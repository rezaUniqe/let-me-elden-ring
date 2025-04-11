"use client";

import { HTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

type PasswordInputProps = HTMLAttributes<HTMLInputElement>;

export function PasswordInput({
  id,
  placeholder = "Enter password",
  value,
  onChange,
  name,
  className = "",
  required = false,
  disabled = false,
  onBlur,
  ...props
}: PasswordInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`border-amber-900/50 bg-black/50 text-amber-50 focus-visible:ring-amber-400 pr-10 ${className}`}
        required={required}
        disabled={disabled}
        onBlur={onBlur}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 text-amber-200 hover:text-amber-400 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
        tabIndex={-1}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </Button>
    </div>
  );
}
