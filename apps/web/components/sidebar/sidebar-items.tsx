import {Home, Inbox} from "lucide-react"
import initTranslations from "@/app/i18n";


export async function getTranslatedSidebarItems({locale}: { locale: string }) {
    const {t} = await initTranslations(locale, ["common"])
    return [
        {
            title: t("common:sidebar.myShelf"),
            url: "#",
            icon: Home
        },
        {
            title: t("common:sidebar.books"),
            url: "#",
            icon: Inbox,
        }]

}