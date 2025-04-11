import { Providers } from "@/providers/providers";
import { ReactNode } from "react";
import ThemeSwitch from "@/components/theme-switch";
import LanguageChanger from "@/components/language-changer";

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
        <div className={"flex flex-row justify-end w-full p-6"}>
          <ThemeSwitch />
          <LanguageChanger />
        </div>
        {children}
      </div>
    </Providers>
  );
}

export default Layout;
