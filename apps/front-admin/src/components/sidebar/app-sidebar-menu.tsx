"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import { useTranslatedSidebarItems } from "./sidebar-items";
import { cn } from "@workspace/ui/lib/utils";

function isSidebarItemSelected(path: string, url: string) {
  return path === url;
}

const AppSidebarMenu = () => {
  const path = usePathname();
  const items = useTranslatedSidebarItems();
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            className={
              "!rounded-[8px] min-h-[40px] group-data-[collapsible=icon]:w-[40px] data-[active]:bg-red-500"
            }
            asChild
            isActive={isSidebarItemSelected(path, item.url)}
          >
            <Link href={item.url}>
              <div>
                <item.icon />
              </div>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default AppSidebarMenu;
