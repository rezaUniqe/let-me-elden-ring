import { ReactNode } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">YourApp</span>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
