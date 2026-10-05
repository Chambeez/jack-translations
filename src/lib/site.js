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
