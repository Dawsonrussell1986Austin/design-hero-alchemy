import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LendingSidebar } from "@/components/LendingSidebar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Menu } from "lucide-react";

interface LendingLayoutProps {
  children: React.ReactNode;
}

export function LendingLayout({ children }: LendingLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Keep existing top navigation */}
      <div className="bg-gradient-to-br from-obsidian via-graphite-fog to-deep-petrol">
        <Navigation />
      </div>
      
      {/* Sidebar layout for lending section */}
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <LendingSidebar />
          
          <div className="flex-1 flex flex-col">
            {/* Sidebar toggle in top-left of content area */}
            <div className="bg-silver-mist border-b border-obsidian/10 px-6 py-4 flex items-center gap-4">
              <SidebarTrigger className="text-obsidian hover:bg-obsidian/10 p-2 rounded-md transition-colors">
                <Menu className="h-4 w-4" />
              </SidebarTrigger>
              <div className="text-sm text-obsidian/60 font-body">
                Use the sidebar to navigate between lending programs
              </div>
            </div>
            
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
}
