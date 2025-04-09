import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import TranslationProvider from "@/providers/translation-provider";
import { ReactNode } from "react";
import ReactQueryProvider from "@/providers/react-query-provider";
import { StoreProvider } from "@/providers/store-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <ReactQueryProvider>
      <TranslationProvider locale={locale}>
        <StoreProvider>
          <SidebarProvider>
            <NextThemesProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              enableColorScheme
            >
              <NuqsAdapter>{children}</NuqsAdapter>
            </NextThemesProvider>
          </SidebarProvider>
        </StoreProvider>
      </TranslationProvider>
    </ReactQueryProvider>
  );
}
