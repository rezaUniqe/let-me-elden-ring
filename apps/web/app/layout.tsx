import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/styles/globals.css";
import { ReactNode } from "react";
import { i18nConfig } from "@/i18nConfig";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
