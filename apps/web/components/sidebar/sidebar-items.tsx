import {Home, Inbox} from "lucide-react"
import {useTranslation} from "react-i18next";


export  function getTranslatedSidebarItems() {
    const {t} = useTranslation("common")
    return [
        {
            title: t("sidebar.myShelf"),
            url: "/my-shelf",
            icon: Home
        },
        {
            title: t("sidebar.books"),
            url: "/",
            icon: Inbox,
        }]

}