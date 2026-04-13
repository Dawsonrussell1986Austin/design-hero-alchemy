import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, XCircle, Clock, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ImageApproval {
  id: string;
  task_id: number;
  image_url: string;
  status: "pending" | "approved" | "rejected";
  reviewed_by: string | null;
  reviewed_at: string | null;
}

interface ImageApprovalGalleryProps {
  taskId: number;
  imageUrls: string[];
  currentUserName: string;
}

const statusBadge: Record<string, { icon: React.ReactNode; label: string; className: string }> = {
  pending: {
    icon: <Clock className="w-3 h-3" />,
    label: "Pending",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  approved: {
    icon: <CheckCircle2 className="w-3 h-3" />,
    label: "Approved",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  rejected: {
    icon: <XCircle className="w-3 h-3" />,
    label: "Rejected",
    className: "bg-red-100 text-red-700 border-red-200",
  },
};

const isPdfAsset = (url: string) => /\.(pdf)(\?|$)/i.test(url);
const isVideoAsset = (url: string) => /\.(mp4|mov|webm|avi)(\?|$)/i.test(url);

const ImageApprovalGallery = ({ taskId, imageUrls, currentUserName }: ImageApprovalGalleryProps) => {
  const [approvals, setApprovals] = useState<ImageApproval[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchApprovals = useCallback(async () => {
    const { data, error } = await supabase
      .from("brownie_task_image_approvals")
      .select("*")
      .eq("task_id", taskId);

    if (error) {
      console.error("Error fetching approvals:", error);
      setLoading(false);
      return;
    }

    // Auto-create pending records for images that don't have one yet
    const existingUrls = new Set((data || []).map((a: any) => a.image_url));
    const missingUrls = imageUrls.filter((url) => !existingUrls.has(url));

    if (missingUrls.length > 0) {
      const inserts = missingUrls.map((url) => ({
        task_id: taskId,
        image_url: url,
        status: "pending" as const,
      }));
      await supabase.from("brownie_task_image_approvals").insert(inserts);
      // Re-fetch after insert
      const { data: updated } = await supabase
        .from("brownie_task_image_approvals")
        .select("*")
        .eq("task_id", taskId);
      setApprovals((updated || []).map((a: any) => ({ ...a, status: a.status as ImageApproval["status"] })));
    } else {
      setApprovals((data || []).map((a: any) => ({ ...a, status: a.status as ImageApproval["status"] })));
    }

    setLoading(false);
  }, [taskId, imageUrls]);

  useEffect(() => {
    fetchApprovals();
  }, [fetchApprovals]);

  const updateApproval = async (imageUrl: string, newStatus: "approved" | "rejected") => {
    setUpdating(imageUrl);
    const { error } = await supabase
      .from("brownie_task_image_approvals")
      .update({
        status: newStatus,
        reviewed_by: currentUserName,
        reviewed_at: new Date().toISOString(),
      })
      .eq("task_id", taskId)
      .eq("image_url", imageUrl);

    if (error) {
      toast({ title: "Failed to update", description: error.message, variant: "destructive" });
    } else {
      setApprovals((prev) =>
        prev.map((a) =>
          a.image_url === imageUrl
            ? { ...a, status: newStatus, reviewed_by: currentUserName, reviewed_at: new Date().toISOString() }
            : a
        )
      );
      toast({ title: `Media ${newStatus}` });
    }
    setUpdating(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="w-4 h-4 animate-spin text-gray-300" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {imageUrls.map((url, idx) => {
        const approval = approvals.find((a) => a.image_url === url);
        const status = approval?.status || "pending";
        const badge = statusBadge[status];
        const isPdf = isPdfAsset(url);
        const isVideo = isVideoAsset(url);

        return (
          <div key={url} className="rounded-lg border border-gray-200 overflow-hidden bg-white">
            {isPdf ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex min-h-[180px] flex-col items-center justify-center gap-2 bg-gray-50 px-4 py-6 text-center text-gray-500 hover:opacity-90 transition-opacity",
                  status === "rejected" && "opacity-50"
                )}
              >
                <FileText className="w-10 h-10 text-red-500" />
                <span className="text-xs font-medium text-gray-700">PDF Document {idx + 1}</span>
                <span className="text-[11px]">Open in new tab</span>
              </a>
            ) : isVideo ? (
              <div className="bg-gray-50 p-2">
                <video
                  src={url}
                  controls
                  className={cn(
                    "w-full max-h-[220px] rounded object-contain bg-black",
                    status === "rejected" && "opacity-50"
                  )}
                />
              </div>
            ) : (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={url}
                  alt={`Task attachment ${idx + 1}`}
                  className={cn(
                    "w-full max-h-[200px] object-contain bg-gray-50 hover:opacity-90 transition-opacity",
                    status === "rejected" && "opacity-50"
                  )}
                />
              </a>
            )}
            <div className="px-3 py-2 flex items-center justify-between gap-2">
              {/* Status badge */}
              <div className={cn("flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border", badge.className)}>
                {badge.icon}
                {badge.label}
                {approval?.reviewed_by && (
                  <span className="font-normal ml-0.5">by {approval.reviewed_by}</span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1">
                {updating === url ? (
                  <Loader2 className="w-4 h-4 animate-spin text-gray-300" />
                ) : (
                  <>
                    <button
                      onClick={() => updateApproval(url, "approved")}
                      className={cn(
                        "p-1 rounded transition-colors",
                        status === "approved"
                          ? "bg-emerald-100 text-emerald-600"
                          : "text-gray-300 hover:text-emerald-600 hover:bg-emerald-50"
                      )}
                      title="Approve"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateApproval(url, "rejected")}
                      className={cn(
                        "p-1 rounded transition-colors",
                        status === "rejected"
                          ? "bg-red-100 text-red-600"
                          : "text-gray-300 hover:text-red-600 hover:bg-red-50"
                      )}
                      title="Reject"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageApprovalGallery;
