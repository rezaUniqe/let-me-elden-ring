import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import AppSidebarMenu from "./app-sidebar-menu";
import { cn } from "@workspace/ui/lib/utils";

const AppSidebar = () => {
  return (
    <Sidebar collapsible={"icon"} variant={"sidebar"}>
      <SidebarContent
        className={cn(
          "bg-background/80 backdrop-blur-md h-full",
          "shadow-sm border-slate-200/20 dark:border-slate-700/20",
          "supports-[backdrop-filter]:bg-background/60 !overflow-visible",
        )}
      >
        <SidebarTrigger className={"absolute -right-4 top-3"} />

        <SidebarGroup className={"mt-12"}>
          <AppSidebarMenu />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
