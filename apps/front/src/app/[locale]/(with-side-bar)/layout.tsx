import AppSidebar from "@/components/sidebar/app-sidebar";
import { ReactNode } from "react";
import { cn } from "@workspace/ui/lib/utils";
import ThemeSwitch from "@/components/theme-switch";
import LanguageChanger from "@/components/language-changer";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={"w-full h-full flex flex-row gap-6"}>
      <div
        className={cn(
          "fixed w-full z-10",
          "flex flex-row gap-3 justify-between lg:justify-end",
          "border-b p-3 mx-auto",
          "bg-background/80 backdrop-blur-md",
          "shadow-sm border-slate-200/20 dark:border-slate-700/20",
          "supports-[backdrop-filter]:bg-background/60",
        )}
      >
        <SidebarTrigger className={"lg:hidden"} />
        <div className={cn("flex flex-row gap-3")}>
          <ThemeSwitch />
          <LanguageChanger />
        </div>
      </div>
      <AppSidebar />
      <div className={"relative top-[80px] w-full h-full"}>{children}</div>
    </div>
  );
}

export default Layout;
