import Resources from "../../@types/resources";
import initTranslations from "../app/i18n";

export async function getServerSideTranslations({
  ns,
  locale = "fa",
}: {
  locale?: string;
  ns: Array<keyof Resources>;
}) {
  return await initTranslations(locale, ns);
}
