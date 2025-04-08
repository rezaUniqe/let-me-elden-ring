import { Blocks, List } from "lucide-react";
import { useWebTranslations } from "@/hooks/use-web-translations";

export function useTranslatedSidebarItems() {
  const { t } = useWebTranslations("common");
  return [
    {
      title: t("sidebar.items"),
      url: "/",
      icon: List,
    },
    {
      title: t("sidebar.favorites"),
      url: "/favorites",
      icon: Blocks,
    },
  ];
}
