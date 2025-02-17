import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/styles/globals.css";
import { ReactNode } from "react";
import { i18nConfig } from "../../i18nConfig";
import {PublicEnvScript} from "next-runtime-env";

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
      <head>
          <PublicEnvScript/>
      </head>
      <body
          className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
      <main>{children}</main>
      </body>
      </html>
  );
}
