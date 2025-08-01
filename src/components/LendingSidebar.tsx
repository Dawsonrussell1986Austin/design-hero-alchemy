import { Building, FileText, TrendingUp, Target, Users } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const lendingItems = [
  { title: "Overview", url: "/lending", icon: Building },
  { title: "Core Bridge", url: "/lending/core-bridge", icon: FileText },
  { title: "Core-Plus Bridge", url: "/lending/core-plus-bridge", icon: TrendingUp },
  { title: "Opportunistic Bridge", url: "/lending/opportunistic-bridge", icon: Target },
  { title: "Participating Bridge", url: "/lending/participating-bridge", icon: Users },
];

export function LendingSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-silver-mist border-r border-obsidian/10">
        <SidebarGroup>
          <SidebarGroupLabel className="text-obsidian font-display font-medium px-4 py-2">
            {!collapsed && "Lending Programs"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {lendingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3 text-sm transition-all duration-200 ${
                          isActive 
                            ? "bg-accent-brown/20 text-accent-brown font-medium border-r-2 border-accent-brown" 
                            : "text-obsidian/70 hover:bg-silver-mist/50 hover:text-obsidian"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && (
                        <span className="ml-3 font-body font-normal">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}