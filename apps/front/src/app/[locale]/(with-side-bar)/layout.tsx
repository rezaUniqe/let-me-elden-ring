import AppSidebar from "@/components/sidebar/app-sidebar";
import { ReactNode } from "react";

async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={"w-full h-full flex flex-row"}>
      <AppSidebar />
      {children}
    </div>
  );
}

export default Layout;
