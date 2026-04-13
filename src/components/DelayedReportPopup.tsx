import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DelayedReportPopupProps {
  /** Label stored in investor_leads.message */
  source: string;
  /** Delay in ms before showing (default 10000) */
  delay?: number;
}

const DelayedReportPopup = ({ source, delay = 10000 }: DelayedReportPopupProps) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("reportPopupDismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("reportPopupDismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("investor_leads").insert({
        full_name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        message: `${source} (popup)`,
      });
      if (error) throw error;
      navigate("/thank-you-report");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  const sans: React.CSSProperties = { fontFamily: "'Lato', sans-serif" };

  const inputStyle: React.CSSProperties = {
    ...sans, color: "#E4E3E1", borderBottom: "1px solid rgba(240,236,227,0.15)",
    background: "transparent", padding: "0", height: "48px", fontSize: "13px",
    fontWeight: 300, letterSpacing: "0.02em", width: "100%", outline: "none",
    borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: 0,
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="fixed inset-0 z-[61] flex items-center justify-center px-4">
        <div
          className="relative w-full max-w-md p-8 sm:p-10 rounded-xl shadow-2xl"
          style={{ background: "linear-gradient(135deg, #082233, #0f3040)", border: "1px solid rgba(240,236,227,0.08)" }}
        >
          <button onClick={dismiss} className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-white/10 transition-colors" aria-label="Close">
            <X className="h-4 w-4" style={{ color: "#E4E3E1" }} />
          </button>

          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-2 text-center" style={{ ...sans, color: "#E4E3E1", fontWeight: 500 }}>
            Get the Full Report
          </p>
          <p className="text-sm mb-6 text-center" style={{ ...sans, color: "#6C7D80", fontWeight: 400 }}>
            See how Oak protects and grows investor capital.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
            </div>
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
            <div className="pt-3">
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-3 py-3.5 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50 rounded-md" style={{ ...sans, backgroundColor: "#C7A74C", color: "#060D14", fontWeight: 600 }}>
                {isSubmitting ? "Submitting..." : "Send Me the Report"}{!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-[10px] text-center tracking-wide" style={{ ...sans, color: "rgba(240,236,227,0.15)", fontWeight: 300 }}>No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default DelayedReportPopup;
