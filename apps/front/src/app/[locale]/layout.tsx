import { Providers } from "@/providers/providers";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { ReactNode } from "react";
import ThemeSwitch from "@/components/theme-switch";

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
      <div className={"flex flex-col w-full h-full"}>
        <div className={"h-[10px] flex flex-row justify-end p-6 w-full"}>
          <ThemeSwitch />
        </div>
        <div className={"flex flex-row"}>
          <AppSidebar />
          {children}
        </div>
      </div>
    </Providers>
  );
}

export default Layout;
