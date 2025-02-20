import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@workspace/ui/components/sidebar';
import AppSidebarMenu from "./app-sidebar-menu";



const AppSidebar = () => {
    return (
        <Sidebar collapsible={"icon"} variant={"inset"}>
            <SidebarContent>
                <SidebarHeader >
                    <h1 className="text-2xl font-bold">Libera</h1>
                </SidebarHeader>
                <SidebarGroup>
                        <AppSidebarMenu/>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
};

export default AppSidebar;