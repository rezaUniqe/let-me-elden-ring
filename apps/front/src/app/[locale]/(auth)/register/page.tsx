"use client";
import Link from "next/link";
import { SignUpForm } from "@/app/[locale]/(auth)/register/register-form";
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

const Register = () => {
  const { t } = useWebTranslations(["register"]);
  return (
    <Card
      className={cn(
        "w-[calc(100%-32px)] sm:max-w-[600px] rounded-2xl  border border-amber-900/50",
        "bg-black/80 backdrop-blur-sm text-amber-50 m-auto",
        "shadow-[0_0_15px_rgba(255,183,0,0.2)]",
      )}
    >
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-bold text-amber-400 tracking-wider">
          {t("register:title")}
        </CardTitle>
        <CardDescription className="text-amber-200/70">
          {t("register:description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm">
        <div className="text-amber-200/70 flex flex-row items-center gap-1">
          {t("register:loginLink")}
          <Link href="/login" className="text-amber-400 hover:underline">
            {t("register:loginButton")}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Register;
