import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, LogOut } from "lucide-react";
import type { User } from "@supabase/supabase-js";

interface CinnamonrollAuthProps {
  children: (user: User, teamName: string) => React.ReactNode;
}

const TEAM_EMAIL_MAP: Record<string, string> = {};

const CinnamonrollAuth = ({ children }: CinnamonrollAuthProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailMap, setEmailMap] = useState<Record<string, string>>({});

  useEffect(() => {
    // Fetch team members to build email→name map
    const fetchTeam = async () => {
      const { data } = await supabase.from("team_members").select("name, email");
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((m: { name: string; email: string }) => {
          map[m.email.toLowerCase()] = m.name;
        });
        setEmailMap(map);
      }
    };
    fetchTeam();
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Resolve team name when user or emailMap changes
  useEffect(() => {
    if (user?.email && Object.keys(emailMap).length > 0) {
      const name = emailMap[user.email.toLowerCase()];
      setTeamName(name || user.email.split("@")[0]);
    }
  }, [user, emailMap]);

  const handleMagicLink = async () => {
    if (!email.trim()) return;
    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: "https://www.oakrepartners.com/cinnamonroll",
      },
    });
    setSending(false);
    if (error) {
      alert(error.message);
    } else {
      setSent(true);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm mx-auto p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7A5A33, #B89B5E)" }}>
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Cinnamon Roll</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in to access the task board</p>
          </div>

          {sent ? (
            <div className="text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 mx-auto flex items-center justify-center">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Check your email</p>
              <p className="text-xs text-gray-500">
                We sent a magic link to <strong>{email}</strong>. Click the link to sign in.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleMagicLink()}
                className="h-10 text-sm"
              />
              <Button
                onClick={handleMagicLink}
                disabled={sending || !email.trim()}
                className="w-full h-10 text-sm"
                style={{ background: "#7A5A33" }}
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                Send Magic Link
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Auth header bar */}
      <div className="fixed top-0 right-0 z-50 p-2 flex items-center gap-2">
        <span className="text-xs text-gray-500 bg-white/80 backdrop-blur px-2 py-1 rounded-md border">
          {teamName || user.email}
        </span>
        <button
          onClick={handleSignOut}
          className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 bg-white/80 backdrop-blur border"
          title="Sign out"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
      {children(user, teamName)}
    </div>
  );
};

export default CinnamonrollAuth;
