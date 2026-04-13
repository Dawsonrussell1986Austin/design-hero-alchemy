import React, { useState, useMemo, useEffect, useCallback } from "react";
import CinnamonrollAuth from "@/components/CinnamonrollAuth";
import { categories, assignees, type BrownieTask, type TaskStatus } from "@/data/brownieTasks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Filter, LayoutGrid, List, Users, Loader2, CalendarIcon, GanttChart, MessageSquare, Link2, ExternalLink, X, Plus, Archive, Pencil, Trash2, Settings, Mail, ImageIcon, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import TaskNotesPanel from "@/components/TaskNotesPanel";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format, parseISO, differenceInDays, addDays, isAfter, isBefore, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";

const statusOptions: TaskStatus[] = ["Not Started", "In Progress", "In Review", "Complete"];

const statusConfig: Record<TaskStatus, { icon: React.ReactNode; color: string; bg: string }> = {
  "Not Started": { icon: <Circle className="w-3.5 h-3.5" />, color: "text-gray-500", bg: "bg-gray-100 border-gray-200" },
  "In Progress": { icon: <Clock className="w-3.5 h-3.5" />, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  "In Review": { icon: <GanttChart className="w-3.5 h-3.5" />, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  "Complete": { icon: <CheckCircle2 className="w-3.5 h-3.5" />, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  "Archived": { icon: <Archive className="w-3.5 h-3.5" />, color: "text-gray-400", bg: "bg-gray-100 border-gray-200" },
};

const priorityOptions = ["CRITICAL", "LAUNCH", "TRAILING"];

const priorityConfig: Record<string, string> = {
  "CRITICAL": "bg-red-100 text-red-800 border-red-200",
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
        <button className={cn("flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded hover:bg-gray-100 transition-colors", isOverdue ? "text-red-500 font-semibold" : value ? "text-gray-600" : "text-gray-300")}>
          <CalendarIcon className="w-3 h-3" />
          {value ? format(parseISO(value), "MMM d") : "Set date"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={selected} onSelect={(d) => { onChange(d ? format(d, "yyyy-MM-dd") : null); }} initialFocus className="pointer-events-auto" />
        {value && (
          <div className="px-3 pb-3">
            <Button variant="outline" size="sm" className="w-full h-7 text-xs" onClick={() => onChange(null)}>Clear date</Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

const LinkEditor = ({ value, onChange }: { value: string | null | undefined; onChange: (url: string | null) => void }) => {
  const [draft, setDraft] = useState(value || "");
  const [open, setOpen] = useState(false);

  const save = () => {
    onChange(draft.trim() || null);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={(v) => { setOpen(v); if (v) setDraft(value || ""); }}>
      <PopoverTrigger asChild>
        {value ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button className="flex items-center text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0">
            <Link2 className="w-3.5 h-3.5" />
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-3" align="start">
        <div className="space-y-2">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Document / Creative Link</label>
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="https://..."
            className="h-8 text-xs"
            onKeyDown={(e) => { if (e.key === "Enter") save(); }}
          />
          <div className="flex gap-2">
            <Button size="sm" className="h-7 text-xs flex-1" onClick={save} style={{ background: "#a85839" }}>Save</Button>
            {value && (
              <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => { onChange(null); setOpen(false); }}>
                <X className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

// Blank task for the add/edit dialog
// emptyTask is now a function so it can default to the current user
const makeEmptyTask = (currentUser: string): Partial<BrownieTask> & { isNew?: boolean } => ({
  task: "",
  priority: "TRAILING",
  status: "Not Started" as TaskStatus,
  assigned: currentUser && currentUser !== "Team" ? currentUser : "Unassigned",
  category: categories[0],
  platform: "",
  due_date: null,
  link_url: null,
  image_urls: [],
});

const BrownieInner = ({ currentUserName }: { currentUserName: string }) => {
  // Build sorted assignee list: current user shown as "Me (Name)" first
  const sortedAssignees = useMemo(() => {
    const others = assignees.filter((a) => a !== currentUserName && a !== "Unassigned");
    return [
      ...(currentUserName && currentUserName !== "Team" ? [currentUserName] : []),
      ...others,
      "Unassigned",
    ];
  }, [currentUserName]);

  const getAssigneeLabel = (name: string) => {
    if (name === currentUserName && currentUserName !== "Team") return `Me (${name})`;
    return name;
  };
  const [tasks, setTasks] = useState<BrownieTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterAssignee, setFilterAssignee] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [noteCounts, setNoteCounts] = useState<Record<number, number>>({});
  const [notesPanel, setNotesPanel] = useState<{ taskId: number; taskName: string } | null>(null);
  const [showArchived, setShowArchived] = useState(false);

  // Add/Edit dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Partial<BrownieTask> & { isNew?: boolean }>(makeEmptyTask(currentUserName));

  // Delete confirmation
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  // Team email settings
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [teamEmails, setTeamEmails] = useState<Record<string, string>>({});

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

  const fetchTeamEmails = useCallback(async () => {
    const { data } = await supabase.from("team_members").select("name, email");
    if (data) {
      const emails: Record<string, string> = {};
      data.forEach((m: { name: string; email: string }) => { emails[m.name] = m.email; });
      setTeamEmails(emails);
    }
  }, []);

  const saveTeamEmails = async () => {
    for (const [name, email] of Object.entries(teamEmails)) {
      await supabase.from("team_members").update({ email }).eq("name", name);
    }
    toast({ title: "Team emails saved" });
    setSettingsOpen(false);
  };

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
    fetchTeamEmails();
  }, [fetchNoteCounts, fetchTeamEmails]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (!showArchived && t.status === "Archived") return false;
      if (showArchived && t.status !== "Archived") return false;
      if (filterCategory !== "all" && t.category !== filterCategory) return false;
      if (filterAssignee !== "all" && t.assigned !== filterAssignee) return false;
      if (filterPriority !== "all" && !t.priority.startsWith(filterPriority)) return false;
      return true;
    });
  }, [tasks, filterCategory, filterAssignee, filterPriority, showArchived]);

  const stats = useMemo(() => {
    const activeTasks = tasks.filter((t) => t.status !== "Archived");
    const total = activeTasks.length;
    const complete = activeTasks.filter((t) => t.status === "Complete").length;
    const inProgress = activeTasks.filter((t) => t.status === "In Progress").length;
    const critical = activeTasks.filter((t) => t.priority.startsWith("CRITICAL")).length;
    const criticalComplete = activeTasks.filter((t) => t.priority.startsWith("CRITICAL") && t.status === "Complete").length;
    const archived = tasks.filter((t) => t.status === "Archived").length;
    return { total, complete, inProgress, critical, criticalComplete, pct: total ? Math.round((complete / total) * 100) : 0, archived };
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

  const sendNotification = useCallback(async (type: string, taskName: string, assignedTo: string, oldValue?: string, newValue?: string) => {
    if (assignedTo === "Unassigned") return;
    try {
      await supabase.functions.invoke("send-task-notification", {
        body: { type, taskName, assignedTo, oldValue, newValue },
      });
    } catch (e) {
      console.error("Notification failed:", e);
    }
  }, []);

  const updateStatus = async (id: number, status: TaskStatus) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      const oldStatus = task.status;
      await updateField(id, "status", status);
      sendNotification("status_change", task.task, task.assigned, oldStatus, status);
    }
  };

  const updateAssignee = async (id: number, assigned: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      const oldAssigned = task.assigned;
      await updateField(id, "assigned", assigned);
      if (assigned !== oldAssigned) {
        sendNotification("assignment_change", task.task, assigned, oldAssigned, assigned);
      }
    }
  };

  const updateDueDate = (id: number, date: string | null) => updateField(id, "due_date", date);
  const updateLink = (id: number, url: string | null) => updateField(id, "link_url", url);

  const archiveTask = async (id: number) => {
    await updateField(id, "status", "Archived");
    toast({ title: "Task archived" });
  };

  const unarchiveTask = async (id: number) => {
    await updateField(id, "status", "Not Started");
    toast({ title: "Task restored" });
  };

  const deleteTask = async (id: number) => {
    // Delete notes first, then the task
    await supabase.from("brownie_task_notes").delete().eq("task_id", id);
    const { error } = await supabase.from("brownie_tasks").delete().eq("id", id);
    if (error) {
      toast({ title: "Failed to delete", description: error.message, variant: "destructive" });
    } else {
      setTasks((prev) => prev.filter((t) => t.id !== id));
      toast({ title: "Task deleted" });
    }
    setDeleteConfirm(null);
  };

  const openNewTask = () => {
    setEditingTask({ ...makeEmptyTask(currentUserName), isNew: true });
    setDialogOpen(true);
  };

  const openEditTask = (task: BrownieTask) => {
    setEditingTask({ ...task, isNew: false });
    setDialogOpen(true);
  };

  const saveTask = async () => {
    if (!editingTask.task?.trim()) {
      toast({ title: "Task name is required", variant: "destructive" });
      return;
    }

    if (editingTask.isNew) {
      // Get next ID
      const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;
      const newTask = {
        id: maxId + 1,
        task: editingTask.task!.trim(),
        priority: editingTask.priority || "TRAILING",
        platform: editingTask.platform || "",
        status: (editingTask.status || "Not Started") as string,
        assigned: editingTask.assigned || "Unassigned",
        category: editingTask.category || categories[0],
        due_date: editingTask.due_date || null,
        link_url: editingTask.link_url || null,
        image_urls: editingTask.image_urls || [],
      };

      const { error } = await supabase.from("brownie_tasks").insert(newTask);
      if (error) {
        toast({ title: "Failed to create task", description: error.message, variant: "destructive" });
        return;
      }
      setTasks((prev) => [...prev, newTask as BrownieTask]);
      toast({ title: "Task created" });
    } else {
      // Update existing
      const updates = {
        task: editingTask.task!.trim(),
        priority: editingTask.priority,
        category: editingTask.category,
        assigned: editingTask.assigned,
        status: editingTask.status,
        due_date: editingTask.due_date || null,
        link_url: editingTask.link_url || null,
        image_urls: editingTask.image_urls || [],
      };
      const { error } = await supabase.from("brownie_tasks").update(updates).eq("id", editingTask.id);
      if (error) {
        toast({ title: "Failed to update", description: error.message, variant: "destructive" });
        return;
      }
      setTasks((prev) => prev.map((t) => (t.id === editingTask.id ? { ...t, ...updates } as BrownieTask : t)));
      toast({ title: "Task updated" });
    }
    setDialogOpen(false);
  };

  const groupedTasks = useMemo(() => {
    const groups: Record<string, BrownieTask[]> = {};
    filteredTasks.forEach((t) => {
      if (!groups[t.category]) groups[t.category] = [];
      groups[t.category].push(t);
    });
    return groups;
  }, [filteredTasks]);

  const boardColumns = useMemo(() => {
    const cols: Record<TaskStatus, BrownieTask[]> = { "Not Started": [], "In Progress": [], "In Review": [], "Complete": [], "Archived": [] };
    filteredTasks.forEach((t) => {
      if (cols[t.status]) cols[t.status].push(t);
    });
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

    const start = addDays(isBefore(earliest, today) ? earliest : today, -2);
    const end = addDays(latest, 5);
    const totalDays = differenceInDays(end, start) + 1;

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
              <img src="/lovable-uploads/white_oak.png" alt="Oak Logo" className="w-8 h-8 rounded-lg object-contain bg-gray-900 p-0.5" />
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-gray-900">Fortified Capital — Marketing Tasks</h1>
                <p className="text-xs text-gray-400">Oak Real Estate Partners · Investor Ad Campaign · March 2026</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setSettingsOpen(true)} className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors" title="Team Email Settings">
              <Settings className="w-4 h-4" />
            </button>
            <Button onClick={openNewTask} size="sm" className="h-8 text-xs gap-1.5" style={{ background: "#a85839" }}>
              <Plus className="w-3.5 h-3.5" /> New Task
            </Button>
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
            { label: "Critical", value: `${stats.criticalComplete}/${stats.critical}`, sub: "done" },
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
              {sortedAssignees.map((a) => <SelectItem key={a} value={a}>{getAssigneeLabel(a)}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-[160px] h-8 text-xs border-gray-200 bg-white text-gray-700"><SelectValue placeholder="Priority" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="CRITICAL">Critical</SelectItem>
              <SelectItem value="LAUNCH">Launch</SelectItem>
              <SelectItem value="TRAILING">Trailing</SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={() => setShowArchived(!showArchived)}
            className={cn("flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors", showArchived ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300")}
          >
            <Archive className="w-3 h-3" />
            Archived{stats.archived > 0 && ` (${stats.archived})`}
          </button>

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
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Priority</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Due Date</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Status</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400">Assigned</th>
                        <th className="text-left text-[10px] font-semibold uppercase tracking-wider px-4 py-2.5 text-gray-400 w-[80px]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catTasks.map((t) => {
                        const sc = statusConfig[t.status] || statusConfig["Not Started"];
                        return (
                          <tr key={t.id} className="border-t border-gray-100 transition-colors hover:bg-gray-50/50">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm flex-1 ${t.status === "Complete" ? "text-gray-400 line-through" : t.status === "Archived" ? "text-gray-300 line-through" : "text-gray-800"}`}>{t.task}</span>
                                {t.image_urls && t.image_urls.length > 0 && (
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <button className="flex items-center gap-0.5 text-violet-400 hover:text-violet-600 transition-colors flex-shrink-0">
                                        <ImageIcon className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-semibold">{t.image_urls.length}</span>
                                      </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto max-w-[400px] p-2" align="start">
                                      <div className="flex flex-wrap gap-2">
                                        {t.image_urls.map((url, idx) => (
                                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                                            <img src={url} alt="" className="w-24 h-24 object-cover rounded-lg border border-gray-200 hover:opacity-80 transition-opacity" />
                                          </a>
                                        ))}
                                      </div>
                                    </PopoverContent>
                                  </Popover>
                                )}
                                <LinkEditor value={t.link_url} onChange={(url) => updateLink(t.id, url)} />
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
                            <td className="px-4 py-3">
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${priorityConfig[t.priority.split(" ")[0]] || priorityConfig["CRITICAL"]}`}>
                                {t.priority.split("(")[0].trim()}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <DueDatePicker value={t.due_date} onChange={(d) => updateDueDate(t.id, d)} />
                            </td>
                            <td className="px-4 py-3">
                              {t.status === "Archived" ? (
                                <span className="text-[11px] text-gray-400 italic">Archived</span>
                              ) : (
                                <Select value={t.status} onValueChange={(v) => updateStatus(t.id, v as TaskStatus)}>
                                  <SelectTrigger className={`h-7 w-[130px] text-[11px] border ${sc.bg} ${sc.color} gap-1`}>
                                    {sc.icon}<SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>{statusOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                                </Select>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <Select value={t.assigned} onValueChange={(v) => updateAssignee(t.id, v)}>
                                <SelectTrigger className={`h-7 w-[100px] text-[11px] font-medium rounded-full border-0 ${assigneeColors[t.assigned] || assigneeColors["Unassigned"]}`}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>{sortedAssignees.map((a) => <SelectItem key={a} value={a}>{getAssigneeLabel(a)}</SelectItem>)}</SelectContent>
                              </Select>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1">
                                <button onClick={() => openEditTask(t)} className="p-1 text-gray-300 hover:text-gray-600 transition-colors rounded hover:bg-gray-100">
                                  <Pencil className="w-3.5 h-3.5" />
                                </button>
                                {t.status === "Archived" ? (
                                  <button onClick={() => unarchiveTask(t.id)} className="p-1 text-gray-300 hover:text-blue-600 transition-colors rounded hover:bg-blue-50" title="Restore">
                                    <Archive className="w-3.5 h-3.5" />
                                  </button>
                                ) : (
                                  <button onClick={() => archiveTask(t.id)} className="p-1 text-gray-300 hover:text-amber-600 transition-colors rounded hover:bg-amber-50" title="Archive">
                                    <Archive className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                <button onClick={() => setDeleteConfirm(t.id)} className="p-1 text-gray-300 hover:text-red-600 transition-colors rounded hover:bg-red-50" title="Delete">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            {filteredTasks.length === 0 && (
              <div className="text-center py-12 text-gray-400 text-sm">
                {showArchived ? "No archived tasks" : "No tasks match your filters"}
              </div>
            )}
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
                      <div key={t.id} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors hover:bg-gray-50/50 group">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="text-sm text-gray-800 flex-1">{t.task}</p>
                          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                            <button onClick={() => openEditTask(t)} className="p-0.5 text-gray-300 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100">
                              <Pencil className="w-3 h-3" />
                            </button>
                            <button onClick={() => archiveTask(t.id)} className="p-0.5 text-gray-300 hover:text-amber-600 transition-colors opacity-0 group-hover:opacity-100">
                              <Archive className="w-3 h-3" />
                            </button>
                            <LinkEditor value={t.link_url} onChange={(url) => updateLink(t.id, url)} />
                            {t.image_urls && t.image_urls.length > 0 && (
                              <span className="flex items-center gap-0.5 text-violet-400">
                                <ImageIcon className="w-3 h-3" />
                                <span className="text-[9px] font-semibold">{t.image_urls.length}</span>
                              </span>
                            )}
                            <button
                              onClick={() => setNotesPanel({ taskId: t.id, taskName: t.task })}
                              className="flex items-center gap-0.5 text-gray-300 hover:text-gray-600 transition-colors"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              {noteCounts[t.id] ? <span className="text-[10px] font-semibold text-gray-500">{noteCounts[t.id]}</span> : null}
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${priorityConfig[t.priority.split(" ")[0]] || priorityConfig["CRITICAL"]}`}>
                            {t.priority.split("(")[0].trim()}
                          </span>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${assigneeColors[t.assigned] || assigneeColors["Unassigned"]}`}>{getAssigneeLabel(t.assigned)}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] text-gray-400 flex-1">{t.category}</span>
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
                      const barWidth = Math.max(3, (3 / timelineData.totalDays) * 100);
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
                            {timelineData.weeks.map((w, i) => (
                              <div key={i} className="absolute top-0 h-full border-l border-gray-100" style={{ left: `${w.offset}%` }} />
                            ))}
                            {(() => {
                              const todayOffset = (differenceInDays(startOfDay(new Date()), timelineData.start) / timelineData.totalDays) * 100;
                              if (todayOffset >= 0 && todayOffset <= 100) {
                                return <div className="absolute top-0 h-full w-px bg-red-300/50 z-10" style={{ left: `${todayOffset}%` }} />;
                              }
                              return null;
                            })()}
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

      {/* Task Notes Panel */}
      <TaskNotesPanel
        taskId={notesPanel?.taskId ?? null}
        taskName={notesPanel?.taskName ?? ""}
        open={!!notesPanel}
        onClose={() => {
          setNotesPanel(null);
          fetchNoteCounts();
        }}
        currentUserName={currentUserName}
        assignedTo={notesPanel ? tasks.find(t => t.id === notesPanel.taskId)?.assigned : undefined}
      />

      {/* Add/Edit Task Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">{editingTask.isNew ? "New Task" : "Edit Task"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Task Name</label>
              <Textarea
                value={editingTask.task || ""}
                onChange={(e) => setEditingTask((prev) => ({ ...prev, task: e.target.value }))}
                placeholder="Describe the task..."
                className="text-sm min-h-[60px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Category</label>
                <Select value={editingTask.category || categories[0]} onValueChange={(v) => setEditingTask((prev) => ({ ...prev, category: v }))}>
                  <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Priority</label>
                <Select value={editingTask.priority || "TRAILING"} onValueChange={(v) => setEditingTask((prev) => ({ ...prev, priority: v }))}>
                  <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{priorityOptions.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Assigned To</label>
                <Select value={editingTask.assigned || "Unassigned"} onValueChange={(v) => setEditingTask((prev) => ({ ...prev, assigned: v }))}>
                  <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{sortedAssignees.map((a) => <SelectItem key={a} value={a}>{getAssigneeLabel(a)}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Status</label>
                <Select value={editingTask.status || "Not Started"} onValueChange={(v) => setEditingTask((prev) => ({ ...prev, status: v as TaskStatus }))}>
                  <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{statusOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Link (optional)</label>
              <Input
                value={editingTask.link_url || ""}
                onChange={(e) => setEditingTask((prev) => ({ ...prev, link_url: e.target.value }))}
                placeholder="https://..."
                className="h-9 text-xs"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Images</label>
              {/* Existing images */}
              {(editingTask.image_urls && editingTask.image_urls.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {editingTask.image_urls.map((url, idx) => (
                    <div key={idx} className="relative group w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(editingTask.image_urls || [])];
                          updated.splice(idx, 1);
                          setEditingTask((prev) => ({ ...prev, image_urls: updated }));
                        }}
                        className="absolute top-0.5 right-0.5 p-0.5 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed border-gray-300 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Click to upload images</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={async (e) => {
                    const files = e.target.files;
                    if (!files || files.length === 0) return;
                    const newUrls: string[] = [];
                    for (const file of Array.from(files)) {
                      const ext = file.name.split(".").pop() || "png";
                      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
                      const { error } = await supabase.storage.from("task-images").upload(path, file);
                      if (error) {
                        toast({ title: "Upload failed", description: error.message, variant: "destructive" });
                        continue;
                      }
                      const { data: urlData } = supabase.storage.from("task-images").getPublicUrl(path);
                      newUrls.push(urlData.publicUrl);
                    }
                    if (newUrls.length > 0) {
                      setEditingTask((prev) => ({
                        ...prev,
                        image_urls: [...(prev.image_urls || []), ...newUrls],
                      }));
                    }
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={saveTask} style={{ background: "#a85839" }}>{editingTask.isNew ? "Create Task" : "Save Changes"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirm !== null} onOpenChange={(open) => { if (!open) setDeleteConfirm(null); }}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">This will permanently delete this task and all its notes. This cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteConfirm && deleteTask(deleteConfirm)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Team Email Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><Mail className="w-5 h-5" /> Team Email Settings</DialogTitle>
          </DialogHeader>
          <p className="text-xs text-gray-500">Set email addresses for each team member to receive task notifications (status changes, assignments, and daily overdue digests).</p>
          <div className="space-y-3 py-2">
            {assignees.filter((a) => a !== "Unassigned").map((name) => (
              <div key={name} className="flex items-center gap-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full w-[80px] text-center ${assigneeColors[name]}`}>{name}</span>
                <Input
                  value={teamEmails[name] || ""}
                  onChange={(e) => setTeamEmails((prev) => ({ ...prev, [name]: e.target.value }))}
                  placeholder={`${name.toLowerCase()}@company.com`}
                  className="h-8 text-xs flex-1"
                  type="email"
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>Cancel</Button>
            <Button onClick={saveTeamEmails} style={{ background: "#a85839" }}>Save Emails</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Brownie = () => (
  <CinnamonrollAuth>
    {(_user, teamName) => <BrownieInner currentUserName={teamName || "Team"} />}
  </CinnamonrollAuth>
);

export default Brownie;
