"use client";
import Resources from "../../@types/resources";
import { ReactNode } from "react";
import { createInstance, Resource } from "i18next";
import initTranslations from "../app/i18n";
import { I18nextProvider } from "react-i18next";

export function I18NTranslationProvider({
  children,
  locale,
  namespaces,
  resources,
}: Readonly<{
  children: ReactNode;
  locale: string;
  namespaces: Array<keyof Resources>;
  resources: Resource;
}>) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
