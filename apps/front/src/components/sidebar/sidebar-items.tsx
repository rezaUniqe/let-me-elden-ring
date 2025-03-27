import { BookLockIcon, Shield,Blocks,List } from "lucide-react";
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
      title: t("sidebar.armors"),
      url: "/armors",
      icon: Blocks,
    },
    {
      title: t("sidebar.shields"),
      url: "/shields",
      icon: Shield,
    },
    {
      title: t("sidebar.talismans"),
      url: "/talismans",
      icon: BookLockIcon,
    },
    {
      title: t("sidebar.weapons"),
      url: "/weapons",
      icon: BookLockIcon,
    },
  ];
}
