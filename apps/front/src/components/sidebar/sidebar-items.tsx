import { BookLockIcon, Book } from "lucide-react";
import { useWebTranslations } from "@/hooks/use-web-translations";

export function useTranslatedSidebarItems() {
  const { t } = useWebTranslations("common");
  return [
    {
      title: t("sidebar.books"),
      url: "/",
      icon: Book,
    },
    {
      title: t("sidebar.myShelf"),
      url: "/my-shelf",
      icon: BookLockIcon,
    },
  ];
}
