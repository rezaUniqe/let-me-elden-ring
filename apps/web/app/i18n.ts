import {createInstance, Resource, Resources} from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {i18nConfig} from '@/i18nConfig';

export default async function initTranslations(
    locale: string,
    namespaces: Array<keyof Resources>,
    i18nInstance?: ReturnType<typeof createInstance>,
    resources?: Resource,
): Promise<unknown>{
    const activeI18nInstance = i18nInstance || createInstance();
    activeI18nInstance.use(initReactI18next);

    if (!resources) {
        activeI18nInstance.use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`@/app/locales/${language}/${namespace}.json`),
            ),
        );
    }


    await activeI18nInstance.init({
        // @ts-ignore
        lng: locale,
        resources:resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources ? [] : i18nConfig.locales
    });

    return {
        i18n: i18nInstance,
        resources: activeI18nInstance.services.resourceStore.data,
        t: activeI18nInstance.t
    };
}