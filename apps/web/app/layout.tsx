import {Geist, Geist_Mono} from "next/font/google"

import "@workspace/ui/styles/globals.css"
import {Providers} from "@/components/providers"
import AppSidebar from "@/components/sidebar/app-sidebar";
import {SidebarTrigger} from "@workspace/ui/components/sidebar";
import {ReactNode} from "react";
import {i18nConfig} from "@/i18nConfig";
import {getTranslatedSidebarItems} from "@/components/sidebar/sidebar-items";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
})

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})


export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({locale}));
}


export default async function RootLayout({
                                             children,
                                             params
                                         }: Readonly<{
    children: ReactNode
    params: Promise<{ locale: string }>
}>) {

    const sidebarItems = await getTranslatedSidebarItems({locale:(await params).locale})


    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
        <Providers>
            <AppSidebar sidebarItems={sidebarItems}/>
            <main>
                <SidebarTrigger/>
                {children}
            </main>
        </Providers>
        </body>
        </html>
    )
}
