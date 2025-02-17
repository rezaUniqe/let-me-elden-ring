import {getServerSideTranslations} from "../hooks/get-ssr-translations";
import Resources from "../../@types/resources";
import {ReactNode} from "react";
import {I18NTranslationProvider} from "@/providers/I18N-translation-provider";

interface Params {
  locale: string;
  ns?: Array<keyof Resources>;
  children: ReactNode;
}
export const globalNs: Array<keyof Resources> = ["common"];

export default async function TranslationProvider({ locale, ns, children }: Params) {
  const { resources } = await getServerSideTranslations({
    locale: locale,
    ns: globalNs.concat(ns ?? []),
  });

  return (
    <I18NTranslationProvider
      namespaces={globalNs.concat(ns ?? [])}
      locale={locale}
      resources={resources}
    >
      {children}
    </I18NTranslationProvider>
  );
}

