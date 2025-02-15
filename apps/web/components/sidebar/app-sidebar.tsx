import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@workspace/ui/components/sidebar';
import AppSidebarMenu from "@/components/sidebar/app-sidebar-menu";



const AppSidebar = () => {
    return (
        <Sidebar>
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