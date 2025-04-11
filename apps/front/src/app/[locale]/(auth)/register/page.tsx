import Link from "next/link";
import { SignUpForm } from "@/app/[locale]/(auth)/register/register-form";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import GradientOverlayBlock from "@/block/gradient-overlay-block";
import { cn } from "@workspace/ui/lib/utils";

const Register = () => {
  return (
    <GradientOverlayBlock
      className={cn(
        "w-[calc(100%-32px)] sm:max-w-[500px] rounded-2xl  border border-amber-900/50",
        "bg-black/80 backdrop-blur-sm text-amber-50",
        "shadow-[0_0_15px_rgba(255,183,0,0.2)]",
      )}
    >
      <CardHeader className="space-y-2 text-center">
        <div className="mx-auto mb-2 relative w-16 h-16"></div>
        <CardTitle className="text-2xl font-bold text-amber-400 tracking-wider">
          BECOME A TARNISHED
        </CardTitle>
        <CardDescription className="text-amber-200/70">
          Join our Elden Ring community to share your journey through the Lands
          Between
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm">
        <div className="text-amber-200/70">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-400 hover:underline">
            Sign in
          </Link>
        </div>
        <div className="text-amber-200/50 text-xs">
          May grace guide your way, Tarnished
        </div>
      </CardFooter>
    </GradientOverlayBlock>
  );
};

export default Register;
