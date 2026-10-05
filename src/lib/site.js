// One domain per language. Both serve the same site; the hostname picks the language.
export const SITES = {
	de: 'https://chamberlainuebersetzung.com',
	en: 'https://chamberlaintranslation.com'
};

export const langForHost = (hostname) =>
	hostname.includes('chamberlainuebersetzung.com') ? 'de' : 'en';

export const EMAIL = 'info@jackchamberlaintranslation.com';

// WhatsApp: +43 677 6343 52 16 (confirmed by Jack, 5 Oct 2026)
export const WHATSAPP = '4367763435216';
export const WHATSAPP_DISPLAY = '+43 677 6343 52 16';

// Formspree form URL, e.g. 'https://formspree.io/f/abcdwxyz'. While empty, the
// quote form opens the visitor's email app with everything filled in instead.
export const FORM_ENDPOINT = '';

// Pages listed in sitemap.xml
export const PAGES = ['/', '/policy', '/impressum', '/datenschutz'];

// Impressum details (from Jack, 5 Oct 2026). Not legal advice.
export const LEGAL = {
	name: 'Jack Edward Chamberlain',
	street: 'Hauning 21a',
	town: '6306 Söll',
	country: { de: 'Österreich', en: 'Austria' },
	taxNumber: '83 187/5893',
	authority: 'Bezirkshauptmannschaft Kufstein'
};
