import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen flex min-h-screen flex-col items-center justify-center bg-muted/40 py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
