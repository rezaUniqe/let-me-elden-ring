import { useTranslation } from "react-i18next";
import Resources from "../../@types/resources";

export function useWebTranslations<T extends Array<keyof Resources>>(
  nameSpaces: T,
): ReturnType<typeof useTranslation<T>> {
  return useTranslation<T>(nameSpaces);
}
