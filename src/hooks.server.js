import { dev } from '$app/environment';
import { translations } from '$lib/i18n/translations';
import { SITES, langForHost } from '$lib/site';

export const handle = async ({ event, resolve }) => {
    let lang = langForHost(event.url.hostname);
    // Local testing only: http://localhost:5173/?lang=de
    if (dev && ['de', 'en'].includes(event.url.searchParams.get('lang'))) {
        lang = event.url.searchParams.get('lang');
    }
    event.locals.lang = lang;
    const currentTranslations = translations[lang];
    const path = event.url.pathname;

    return await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html
                .replaceAll('%lang%', lang)
                .replace('%meta.title%', currentTranslations.metadata.title)
                .replace('%meta.description%', currentTranslations.metadata.description)
                .replace('%meta.ogTitle%', currentTranslations.metadata.ogTitle)
                .replace('%meta.ogDescription%', currentTranslations.metadata.ogDescription)
                .replace('%meta.ogLocale%', lang === 'de' ? 'de_AT' : 'en_GB')
                .replaceAll('%meta.url%', SITES[lang] + path)
                .replaceAll('%meta.urlDe%', SITES.de + path)
                .replace('%meta.urlEn%', SITES.en + path)
                .replaceAll('%meta.origin%', SITES[lang]);
        }
    });
};
