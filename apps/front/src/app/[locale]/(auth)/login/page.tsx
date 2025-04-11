"use client";

import Link from "next/link";
import { SignInForm } from "@/app/[locale]/(auth)/login/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { useWebTranslations } from "@/hooks/use-web-translations";

const Login = () => {
  const { t } = useWebTranslations(["login"]);

  return (
    <Card
      className={cn(
        "w-[calc(100vw-32px)] sm:w-[550px] rounded-2xl  border border-amber-900/50",
        "bg-black/80 backdrop-blur-sm text-amber-50 m-auto",
        "shadow-[0_0_15px_rgba(255,183,0,0.2)]",
      )}
    >
      <CardHeader className="relative space-b-2 text-center">
        <CardTitle className="text-2xl font-bold text-amber-400 tracking-wider">
          {t("login:title")}
        </CardTitle>
        <CardDescription className="text-amber-200/70">
          {t("login:description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm">
        <div className="text-amber-200/70 flex flex-row items-center gap-1">
          {t("login:registerLink")}
          <Link href="/register" className="text-amber-400 hover:underline">
            {t("login:register")}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
