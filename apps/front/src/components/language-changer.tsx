"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "../../i18nConfig";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { cn } from "@workspace/ui/lib/utils";

type LanguageOption = {
  value: string;
  label: string;
  flag: string;
};

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const languages: LanguageOption[] = [
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "fa", label: "فارسی", flag: "🇮🇷" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.value === currentLocale) || languages[0];

  const changeLanguage = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1">
          <span className="mx-1">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline-block">
            {currentLanguage?.label}
          </span>
          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => changeLanguage(language.value)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              currentLocale === language.value && "font-medium",
            )}
          >
            <span className="text-base">{language.flag}</span>
            <span>{language.label}</span>
            {currentLocale === language.value && (
              <Check className="h-4 w-4 ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
