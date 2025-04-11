import { ReactNode } from "react";
import TranslationProvider from "@/providers/translation-provider";

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  return (
    <TranslationProvider ns={["login"]} locale={locale}>
      <div className={"w-screen h-[90vh] grid place-content-center"}>
        {children}
      </div>
    </TranslationProvider>
  );
};

export default Layout;
