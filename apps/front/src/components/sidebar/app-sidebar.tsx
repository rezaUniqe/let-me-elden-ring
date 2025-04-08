import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import AppSidebarMenu from "./app-sidebar-menu";
import { cn } from "@workspace/ui/lib/utils";

const AppSidebar = () => {
  return (
    <Sidebar collapsible={"icon"} variant={"inset"}>
      <SidebarContent className={"overflow-visible"}>
        <SidebarHeader className={"relative flex flex-row items-center"}>
          <h1
            className={cn(
              "text-2xl font-bold whitespace-nowrap",
              "group-data-[state=collapsed]:hidden",
            )}
          >
            Let Me Elden Ring
          </h1>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarGroup>
          <AppSidebarMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
