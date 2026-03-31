import React, { useState, useMemo, useEffect, useCallback } from "react";
import { categories, assignees, type BrownieTask, type TaskStatus } from "@/data/brownieTasks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Filter, LayoutGrid, List, Users, Loader2, CalendarIcon, GanttChart, MessageSquare } from "lucide-react";
import TaskNotesPanel from "@/components/TaskNotesPanel";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format, parseISO, differenceInDays, addDays, isAfter, isBefore, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";

const statusOptions: TaskStatus[] = ["Not Started", "In Progress", "Complete"];

const statusConfig: Record<TaskStatus, { icon: React.ReactNode; color: string; bg: string }> = {
  "Not Started": { icon: <Circle className="w-3.5 h-3.5" />, color: "text-gray-500", bg: "bg-gray-100 border-gray-200" },
  "In Progress": { icon: <Clock className="w-3.5 h-3.5" />, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  "Complete": { icon: <CheckCircle2 className="w-3.5 h-3.5" />, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
};

const priorityConfig: Record<string, string> = {
  "LAUNCH-CRITICAL": "bg-red-100 text-red-800 border-red-200",
  "TRAILING": "bg-slate-100 text-slate-700 border-slate-200",
  "LAUNCH": "bg-blue-100 text-blue-800 border-blue-200",
};

const assigneeColors: Record<string, string> = {
  "Matt": "bg-violet-100 text-violet-800",
  "Dawson": "bg-sky-100 text-sky-800",
  "Nicole": "bg-rose-100 text-rose-800",
  "Ray": "bg-teal-100 text-teal-800",
  "Unassigned": "bg-gray-100 text-gray-500",
};

const ganttBarColors: Record<string, string> = {
  "Complete": "bg-emerald-400",
  "In Progress": "bg-amber-400",
  "Not Started": "bg-gray-300",
};

type ViewMode = "list" | "board" | "timeline";

const DueDatePicker = ({ value, onChange }: { value: string | null | undefined; onChange: (date: string | null) => void }) => {
  const selected = value ? parseISO(value) : undefined;
  const today = startOfDay(new Date());
  const isOverdue = selected && isBefore(selected, today);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-7 w-[110px] text-[11px] justify-start font-normal gap-1 px-2",
            !value && "text-gray-400",
            isOverdue && "text-red-600 border-red-200 bg-red-50"
          )}
        >
          <CalendarIcon className="w-3 h-3" />
          {value ? format(parseISO(value), "MMM d") : "Set date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(d) => onChange(d ? format(d, "yyyy-MM-dd") : null)}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
        />
      </PopoverContent>
    </Popover>
  );
};

const Brownie = () => {
  const [tasks, setTasks] = useState<BrownieTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterAssignee, setFilterAssignee] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [noteCounts, setNoteCounts] = useState<Record<number, number>>({});
  const [notesPanel, setNotesPanel] = useState<{ taskId: number; taskName: string } | null>(null);
  const { toast } = useToast();

  const fetchNoteCounts = useCallback(async () => {
    const { data, error } = await supabase
      .from("brownie_task_notes")
      .select("task_id");
    if (!error && data) {
      const counts: Record<number, number> = {};
      (data as { task_id: number }[]).forEach((n) => {
        counts[n.task_id] = (counts[n.task_id] || 0) + 1;
      });
      setNoteCounts(counts);
    }
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("brownie_tasks")
        .select("*")
        .order("id");
      if (error) {
        toast({ title: "Error loading tasks", description: error.message, variant: "destructive" });
        return;
      }
      setTasks(data as BrownieTask[]);
      setLoading(false);
    };
    fetchTasks();
    fetchNoteCounts();
  }, [fetchNoteCounts]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (filterCategory !== "all" && t.category !== filterCategory) return false;
      if (filterAssignee !== "all" && t.assigned !== filterAssignee) return false;
      if (filterPriority !== "all" && !t.priority.startsWith(filterPriority)) return false;
      return true;
    });
  }, [tasks, filterCategory, filterAssignee, filterPriority]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const complete = tasks.filter((t) => t.status === "Complete").length;
    const inProgress = tasks.filter((t) => t.status === "In Progress").length;
    const critical = tasks.filter((t) => t.priority.startsWith("LAUNCH-CRITICAL")).length;
    const criticalComplete = tasks.filter((t) => t.priority.startsWith("LAUNCH-CRITICAL") && t.status === "Complete").length;
    return { total, complete, inProgress, critical, criticalComplete, pct: total ? Math.round((complete / total) * 100) : 0 };
  }, [tasks]);

  const updateField = useCallback(async (id: number, field: string, value: string | null) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
    const { error } = await supabase
      .from("brownie_tasks")
      .update({ [field]: value })
      .eq("id", id);
    if (error) {
      toast({ title: "Failed to save", description: error.message, variant: "destructive" });
      const { data } = await supabase.from("brownie_tasks").select("*").eq("id", id).single();
      if (data) setTasks((prev) => prev.map((t) => (t.id === id ? data as BrownieTask : t)));
    }
  }, [toast]);

  const updateStatus = (id: number, status: TaskStatus) => updateField(id, "status", status);
  const updateAssignee = (id: number, assigned: string) => updateField(id, "assigned", assigned);
  const updateDueDate = (id: number, date: string | null) => updateField(id, "due_date", date);

  const groupedTasks = useMemo(() => {
    const groups: Record<string, BrownieTask[]> = {};
    filteredTasks.forEach((t) => {
      if (!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    });
    return groups;
  }, [filteredTasks]);

  const boardColumns = useMemo(() => {
    const cols: Record<TaskStatus, BrownieTask[]> = { "Not Started": [], "In Progress": [], "Complete": [] };
    filteredTasks.forEach((t) => cols[t.status].push(t));
    return cols;
  }, [filteredTasks]);

  // Timeline/Gantt calculations
  const timelineData = useMemo(() => {
    const tasksWithDates = filteredTasks.filter((t) => t.due_date);
    if (tasksWithDates.length === 0) return null;

    const dates = tasksWithDates.map((t) => parseISO(t.due_date!));
    const today = startOfDay(new Date());
    const earliest = dates.reduce((a, b) => (isBefore(a, b) ? a : b), today);
    const latest = dates.reduce((a, b) => (isAfter(a, b) ? a : b), addDays(today, 14));

    // Add some padding
    const start = addDays(isBefore(earliest, today) ? earliest : today, -2);
    const end = addDays(latest, 5);
    const totalDays = differenceInDays(end, start) + 1;

    // Generate week markers
    const weeks: { date: Date; label: string; offset: number }[] = [];
    for (let i = 0; i < totalDays; i++) {
      const d = addDays(start, i);
      if (d.getDay() === 1 || i === 0) {
        weeks.push({ date: d, label: format(d, "MMM d"), offset: (i / totalDays) * 100 });
      }
    }

    return { start, end, totalDays, weeks, tasksWithDates };
  }, [filteredTasks]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #a85839, #e8c468)" }}>
                FC
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-gray-900">Fortified Capital — Marketing Tasks</h1>
                <p className="text-xs text-gray-400">Oak Real Estate Partners · Investor Ad Campaign · March 2026</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-lg p-0.5 bg-gray-100">
              <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"}`}>
                <List className="w-4 h-4" />
              </button>
              <button onClick={() => setViewMode("board")} className={`p-1.5 rounded-md transition-colors ${viewMode === "board" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"}`}>
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button onClick={() => setViewMode("timeline")} className={`p-1.5 rounded-md transition-colors ${viewMode === "timeline" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"}`}>
                <GanttChart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Tasks", value: stats.total, sub: `${stats.pct}% complete` },
            { label: "Completed", value: stats.complete, sub: `of ${stats.total}` },
            { label: "In Progress", value: stats.inProgress, sub: "active" },
            { label: "Launch-Critical", value: `${stats.criticalComplete}/${stats.critical}`, sub: "done" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm">
              <p className="text-xs font-medium mb-1 text-gray-400">{s.label}</p>
              <p className="text-2xl font-bold tracking-tight text-gray-900">{s.value}</p>
              <p className="text-xs mt-0.5 text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">Overall Progress</span>
            <span className="text-xs font-bold" style={{ color: "#a85839" }}>{stats.pct}%</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${stats.pct}%`, background: "linear-gradient(90deg, #a85839, #e8c468)" }} />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <Filter className="w-3.5 h-3.5" /> Filters
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px] h-8 text-xs border-gray-200 bg-white text-gray-700"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterAssignee} onValueChange={setFilterAssignee}>
            <SelectTrigger className="w-[140px] h-8 text-xs border-gray-200 bg-white text-gray-700"><Users className="w-3 h-3 mr-1" /><SelectValue placeholder="Assignee" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assignees</SelectItem>
              {assignees.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-[160px] h-8 text-xs border-gray-200 bg-white text-gray-700"><SelectValue placeholder="Priority" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="LAUNCH-CRITICAL">Launch-Critical</SelectItem>
              <SelectItem value="LAUNCH">Launch</SelectItem>
              <SelectItem value="TRAILING">Trailing</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-xs ml-auto text-gray-400">{filteredTasks.length} task{filteredTasks.length !== 1 ? "s" : ""}</span>
        </div>

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-6">
            {Object.entries(groupedTasks).map(([category, catTasks]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#a85839" }}>{category}</h2>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-500">{catTasks.length}</span>
                </div>
                <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Task</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 hidden md:table-cell text-gray-400">Platform</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Priority</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Due Date</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Status</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Assigned</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catTasks.map((t) => {
                        const sc = statusConfig[t.status];
                        return (
                          <tr key={t.id} className="border-t border-gray-100 transition-colors hover:bg-gray-50/50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm flex-1 ${t.status === "Complete" ? "text-gray-400 line-through" : "text-gray-800"}`}>{t.task}</span>
                                <button
                                  onClick={() => setNotesPanel({ taskId: t.id, taskName: t.task })}
                                  className="flex items-center gap-0.5 text-gray-300 hover:text-gray-600 transition-colors flex-shrink-0"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  {noteCounts[t.id] ? (
                                    <span className="text-[10px] font-semibold text-gray-500">{noteCounts[t.id]}</span>
                                  ) : null}
                                </button>
                              </div>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              <span className="text-xs text-gray-400">{t.platform}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${priorityConfig[t.priority.split(" ")[0]] || priorityConfig["LAUNCH-CRITICAL"]}`}>
                                {t.priority.split("(")[0].trim()}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <DueDatePicker value={t.due_date} onChange={(d) => updateDueDate(t.id, d)} />
                            </td>
                            <td className="px-4 py-3">
                              <Select value={t.status} onValueChange={(v) => updateStatus(t.id, v as TaskStatus)}>
                                <SelectTrigger className={`h-7 w-[130px] text-[11px] border ${sc.bg} ${sc.color} gap-1`}>
                                  {sc.icon}<SelectValue />
                                </SelectTrigger>
                                <SelectContent>{statusOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                              </Select>
                            </td>
                            <td className="px-4 py-3">
                              <Select value={t.assigned} onValueChange={(v) => updateAssignee(t.id, v)}>
                                <SelectTrigger className={`h-7 w-[100px] text-[11px] font-medium rounded-full border-0 ${assigneeColors[t.assigned] || assigneeColors["Unassigned"]}`}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>{assignees.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}</SelectContent>
                              </Select>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Board View */}
        {viewMode === "board" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statusOptions.map((status) => {
              const sc = statusConfig[status];
              const colTasks = boardColumns[status];
              return (
                <div key={status}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={sc.color}>{sc.icon}</span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">{status}</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-500">{colTasks.length}</span>
                  </div>
                  <div className="space-y-2">
                    {colTasks.map((t) => (
                      <div key={t.id} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors hover:bg-gray-50/50">
                        <p className="text-sm mb-2 text-gray-800">{t.task}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${priorityConfig[t.priority.split(" ")[0]] || priorityConfig["LAUNCH-CRITICAL"]}`}>
                            {t.priority.split("(")[0].trim()}
                          </span>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${assigneeColors[t.assigned] || assigneeColors["Unassigned"]}`}>{t.assigned}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-[10px] text-gray-400 flex-1">{t.platform}</p>
                          {t.due_date && (
                            <span className={cn("text-[10px] font-medium", isBefore(parseISO(t.due_date), startOfDay(new Date())) ? "text-red-500" : "text-gray-400")}>
                              Due {format(parseISO(t.due_date), "MMM d")}
                            </span>
                          )}
                        </div>
                        <div className="mt-2">
                          <Select value={t.status} onValueChange={(v) => updateStatus(t.id, v as TaskStatus)}>
                            <SelectTrigger className="h-6 w-full text-[10px] border-gray-200 bg-gray-50 text-gray-700"><SelectValue /></SelectTrigger>
                            <SelectContent>{statusOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Timeline / Gantt View */}
        {viewMode === "timeline" && (
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {!timelineData ? (
              <div className="p-12 text-center">
                <GanttChart className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                <p className="text-sm text-gray-500 font-medium">No due dates set yet</p>
                <p className="text-xs text-gray-400 mt-1">Switch to list view and set due dates to see the timeline</p>
              </div>
            ) : (
              <div>
                {/* Timeline header */}
                <div className="border-b border-gray-200 bg-gray-50">
                  <div className="flex">
                    <div className="w-[280px] sm:w-[320px] flex-shrink-0 px-4 py-2.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Task</span>
                    </div>
                    <div className="flex-1 relative h-8 overflow-hidden">
                      {timelineData.weeks.map((w, i) => (
                        <div
                          key={i}
                          className="absolute top-0 h-full border-l border-gray-200 px-1.5 flex items-center"
                          style={{ left: `${w.offset}%` }}
                        >
                          <span className="text-[9px] font-medium text-gray-400 whitespace-nowrap">{w.label}</span>
                        </div>
                      ))}
                      {/* Today marker */}
                      {(() => {
                        const todayOffset = (differenceInDays(startOfDay(new Date()), timelineData.start) / timelineData.totalDays) * 100;
                        if (todayOffset >= 0 && todayOffset <= 100) {
                          return (
                            <div className="absolute top-0 h-full w-px bg-red-400 z-10" style={{ left: `${todayOffset}%` }}>
                              <span className="absolute -top-0 left-1 text-[8px] font-bold text-red-500 uppercase">Today</span>
                            </div>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  </div>
                </div>

                {/* Timeline rows */}
                <div className="divide-y divide-gray-100">
                  {timelineData.tasksWithDates
                    .sort((a, b) => (a.due_date! > b.due_date! ? 1 : -1))
                    .map((t) => {
                      const dueDate = parseISO(t.due_date!);
                      const dayOffset = differenceInDays(dueDate, timelineData.start);
                      const position = (dayOffset / timelineData.totalDays) * 100;
                      const barWidth = Math.max(3, (3 / timelineData.totalDays) * 100); // min 3 days wide
                      const barStart = Math.max(0, position - barWidth);
                      const isOverdue = isBefore(dueDate, startOfDay(new Date())) && t.status !== "Complete";

                      return (
                        <div key={t.id} className="flex items-center hover:bg-gray-50/50 transition-colors">
                          <div className="w-[280px] sm:w-[320px] flex-shrink-0 px-4 py-2.5">
                            <p className={cn("text-xs leading-tight", t.status === "Complete" ? "text-gray-400 line-through" : "text-gray-800")}>
                              {t.task.length > 45 ? t.task.slice(0, 45) + "…" : t.task}
                            </p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className={`text-[8px] font-semibold px-1 py-px rounded ${assigneeColors[t.assigned] || assigneeColors["Unassigned"]}`}>
                                {t.assigned}
                              </span>
                              <span className={cn("text-[9px]", isOverdue ? "text-red-500 font-semibold" : "text-gray-400")}>
                                {format(dueDate, "MMM d")}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 relative h-10 overflow-hidden">
                            {/* Week grid lines */}
                            {timelineData.weeks.map((w, i) => (
                              <div key={i} className="absolute top-0 h-full border-l border-gray-100" style={{ left: `${w.offset}%` }} />
                            ))}
                            {/* Today line */}
                            {(() => {
                              const todayOffset = (differenceInDays(startOfDay(new Date()), timelineData.start) / timelineData.totalDays) * 100;
                              if (todayOffset >= 0 && todayOffset <= 100) {
                                return <div className="absolute top-0 h-full w-px bg-red-300/50 z-10" style={{ left: `${todayOffset}%` }} />;
                              }
                              return null;
                            })()}
                            {/* Gantt bar */}
                            <div
                              className={cn(
                                "absolute top-2.5 h-5 rounded-full transition-all",
                                ganttBarColors[t.status],
                                isOverdue && t.status !== "Complete" && "bg-red-400"
                              )}
                              style={{
                                left: `${Math.max(0, Math.min(barStart, 97))}%`,
                                width: `${Math.min(barWidth, 100 - barStart)}%`,
                                minWidth: "8px",
                              }}
                            >
                              {/* Due date diamond */}
                              <div
                                className={cn(
                                  "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rotate-45 rounded-sm border-2 border-white",
                                  t.status === "Complete" ? "bg-emerald-500" : isOverdue ? "bg-red-500" : "bg-amber-500"
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Legend */}
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 flex items-center gap-4">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-full bg-emerald-400" /><span className="text-[9px] text-gray-400">Complete</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-full bg-amber-400" /><span className="text-[9px] text-gray-400">In Progress</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-full bg-gray-300" /><span className="text-[9px] text-gray-400">Not Started</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-full bg-red-400" /><span className="text-[9px] text-gray-400">Overdue</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-px h-3 bg-red-400" /><span className="text-[9px] text-gray-400">Today</span></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gray-300">Fortified Capital · Internal Use Only</p>
        </div>
      </div>
    </div>
  );
};

export default Brownie;
