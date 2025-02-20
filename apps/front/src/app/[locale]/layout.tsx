import { Providers } from "@/providers/providers";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { ReactNode } from "react";

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
      {children}
    </Providers>
  );
}

export default Layout;
