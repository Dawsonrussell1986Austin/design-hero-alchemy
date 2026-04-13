import React, { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { supabase } from "@/integrations/supabase/client";
import { Send, Trash2, Loader2, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface TaskNote {
  id: string;
  task_id: number;
  author: string;
  content: string;
  created_at: string;
}

export interface TaskNotesPanelProps {
  taskId: number | null;
  taskName?: string;
  open?: boolean;
  onClose?: () => void;
  currentUserName?: string;
  assignedTo?: string;
  inline?: boolean;
}

const authors = ["Matt", "Dawson", "Nicole", "Ray", "Team"];

const authorColors: Record<string, string> = {
  "Matt": "bg-violet-500",
  "Dawson": "bg-sky-500",
  "Nicole": "bg-rose-500",
  "Ray": "bg-teal-500",
};

const NotesContent = ({ taskId, taskName, currentUserName, assignedTo }: { taskId: number; taskName?: string; currentUserName?: string; assignedTo?: string }) => {
  const [notes, setNotes] = useState<TaskNote[]>([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(currentUserName || "Matt");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchNotes = useCallback(async () => {
    if (!taskId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("brownie_task_notes")
      .select("*")
      .eq("task_id", taskId)
      .order("created_at", { ascending: true });

    if (error) {
      toast({ title: "Error loading notes", description: error.message, variant: "destructive" });
    } else {
      setNotes(data as TaskNote[]);
    }
    setLoading(false);
  }, [taskId, toast]);

  useEffect(() => {
    if (currentUserName) setAuthor(currentUserName);
  }, [currentUserName]);

  useEffect(() => {
    fetchNotes();
    setContent("");
  }, [taskId, fetchNotes]);

  const addNote = async () => {
    if (!content.trim() || !taskId) return;
    setSubmitting(true);
    const { error } = await supabase
      .from("brownie_task_notes")
      .insert({ task_id: taskId, author, content: content.trim() });

    if (error) {
      toast({ title: "Failed to add note", description: error.message, variant: "destructive" });
    } else {
      setContent("");
      fetchNotes();
      if (assignedTo && assignedTo !== "Unassigned" && assignedTo !== author) {
        supabase.functions.invoke("send-task-notification", {
          body: { type: "note_added", taskName: taskName || "", assignedTo, oldValue: author, newValue: content.trim() },
        }).catch(console.error);
      }
    }
    setSubmitting(false);
  };

  const deleteNote = async (noteId: string) => {
    const { error } = await supabase
      .from("brownie_task_notes")
      .delete()
      .eq("id", noteId);

    if (error) {
      toast({ title: "Failed to delete", description: error.message, variant: "destructive" });
    } else {
      setNotes((prev) => prev.filter((n) => n.id !== noteId));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      addNote();
    }
  };

  return (
    <>
      <div className="space-y-3">
        {loading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="w-5 h-5 animate-spin text-gray-300" />
          </div>
        ) : notes.length === 0 ? (
          <div className="text-center py-4">
            <MessageSquare className="w-6 h-6 mx-auto mb-1 text-gray-200" />
            <p className="text-xs text-gray-400">No notes yet</p>
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="group relative bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold ${authorColors[note.author] || "bg-gray-400"}`}>
                  {note.author[0]}
                </div>
                <span className="text-xs font-semibold text-gray-700">{note.author}</span>
                <span className="text-[10px] text-gray-400">
                  {format(new Date(note.created_at), "MMM d, h:mm a")}
                </span>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-red-50"
                >
                  <Trash2 className="w-3 h-3 text-red-400" />
                </button>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed pl-7">
                {note.content}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-gray-400">Posting as</span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full text-white ${authorColors[author] || "bg-gray-400"}`}>
            {author}
          </span>
        </div>
        <div className="flex gap-2">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a note… (⌘+Enter to send)"
            className="min-h-[60px] max-h-[120px] text-sm resize-none border-gray-200"
          />
          <Button
            size="sm"
            onClick={addNote}
            disabled={!content.trim() || submitting}
            className="self-end h-9 w-9 p-0"
            style={{ background: "#a85839" }}
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </>
  );
};

const TaskNotesPanel = ({ taskId, taskName = "", open, onClose, currentUserName, assignedTo, inline }: TaskNotesPanelProps) => {
  if (inline) {
    if (!taskId) return null;
    return <NotesContent taskId={taskId} taskName={taskName} currentUserName={currentUserName} assignedTo={assignedTo} />;
  }

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose?.()}>
      <SheetContent className="w-[400px] sm:w-[440px] p-0 flex flex-col">
        <SheetHeader className="px-5 pt-5 pb-3 border-b border-gray-100">
          <SheetTitle className="text-sm font-semibold text-gray-900 leading-tight">
            {taskName}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {taskId && <NotesContent taskId={taskId} taskName={taskName} currentUserName={currentUserName} assignedTo={assignedTo} />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TaskNotesPanel;
