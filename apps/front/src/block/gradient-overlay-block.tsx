import { HTMLAttributes } from "react";
import { cn } from "@workspace/ui/lib/utils";

export default function GradientOverlayBlock({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={cn("relative overflow-clip", className)}>
      {/* Gradient - Top Right */}
      <div
        className={cn(
          "max-sm:hidden absolute",
          "-top-16 -right-16",
          "w-52 h-32 bg-linear-gradient-main",
          "rounded-full blur-3xl opacity-50",
        )}
      />
      {/* Gradient - Bottom Center */}
      <div
        className={cn(
          "max-sm:hidden  absolute -bottom-32",
          "left-1/2 transform -translate-x-1/2",
          "w-[calc(100%-32px)] h-24 bg-linear-gradient-main rounded-full",
          "blur-3xl opacity-50",
        )}
      />
      {children}
    </div>
  );
}
