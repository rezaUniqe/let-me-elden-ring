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
          <SidebarMenuButton asChild>
            <Link
              className={cn(
                " py-3",
                isSidebarItemSelected(path, item.url) &&
                  "bg-gray-500 text-white hover:bg-gray-500 hover:text-white",
              )}
              href={item.url}
            >
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default AppSidebarMenu;
