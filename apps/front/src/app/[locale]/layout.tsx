import { Providers } from "@/providers/providers";
import { ReactNode } from "react";

async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return <Providers locale={locale}>{children}</Providers>;
}

export default Layout;
