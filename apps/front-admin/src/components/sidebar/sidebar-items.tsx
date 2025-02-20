import {Book} from "lucide-react";

export function useTranslatedSidebarItems() {
  return [
    {
      title: "Books",
      url: "/",
      icon: Book,
    }
  ];
}
