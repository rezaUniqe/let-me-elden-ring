import {useTranslation} from "react-i18next";
import Resources from "../../@types/resources";

export function useWebTranslations(ns?:Array<keyof Resources>|keyof Resources){
   return  useTranslation()
}