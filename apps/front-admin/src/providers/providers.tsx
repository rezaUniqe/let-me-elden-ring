"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { ReactNode } from "react";
import ReactQueryProvider from "@/providers/react-query-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <SidebarProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <>{children}</>
        </NextThemesProvider>
      </SidebarProvider>
    </ReactQueryProvider>
  );
}
