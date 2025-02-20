import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import AppSidebarMenu from "./app-sidebar-menu";

const AdminSidebar = () => {
  return (
    <Sidebar collapsible={"icon"} variant={"inset"}>
      <SidebarTrigger className={"absolute -right-[14px]"} />
      <SidebarContent>
        <SidebarHeader>
          <h1 className="text-2xl font-bold">Libera</h1>
        </SidebarHeader>
        <SidebarGroup>
          <AppSidebarMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AdminSidebar;
