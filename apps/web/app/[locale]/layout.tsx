import { Providers } from "@/components/providers";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { ReactNode } from "react";
import {SidebarTrigger} from "@workspace/ui/components/sidebar";

async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <Providers locale={locale}>
      <AppSidebar />
      <SidebarTrigger/>
      {children}
    </Providers>
  );
}

export default Layout;
