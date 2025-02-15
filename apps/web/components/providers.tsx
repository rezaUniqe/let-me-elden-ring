import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import TranslationProvider from "@/providers/translation-provider";
import {ReactNode} from "react";

export  function Providers({
  children,
  locale,
}: {
  children:ReactNode;
    locale:string
}) {

  return (
      <TranslationProvider locale={locale}>
        <SidebarProvider>
          <NextThemesProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              enableColorScheme
          >
            {children}
          </NextThemesProvider>
        </SidebarProvider>
      </TranslationProvider>

  );
}
