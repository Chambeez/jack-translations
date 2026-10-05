import { translations } from '$lib/i18n/translations';
import { SITES, EMAIL, WHATSAPP_DISPLAY } from '$lib/site';

// Plain-text summary for AI assistants (https://llmstxt.org)
export const GET = ({ locals }) => {
	const t = translations[locals.lang];
	const s = t.services;
	const services = [1, 2, 3, 4, 5, 6]
		.map((n) => `- ${s['service' + n].title}: ${s['service' + n].description}`)
		.join('\n');
	const steps = t.how.steps.map((step, i) => `${i + 1}. ${step.title}: ${step.text.replace(' below', '').replace(' unten', '')}`).join('\n');

	const body = locals.lang === 'de'
		? `# Chamberlain Übersetzung

> Übersetzungen Deutsch → Englisch von Jack Chamberlain, englischer Muttersprachler mit Sitz in Söll, Tirol (Österreich). Für Unternehmen, Tourismus, Wissenschaft und Publikationen.

## Leistungen
${services}

## Ablauf
${steps}
${t.how.price} Kostenloses, unverbindliches Angebot.

## Referenz
- ${t.work.client}: Magazin (rund 40.000 Wörter) und komplette Website ins Englische übersetzt.

## Kontakt
- E-Mail: ${EMAIL}
- WhatsApp: ${WHATSAPP_DISPLAY}
- Website: ${SITES.de}/ (English: ${SITES.en}/)
`
		: `# Chamberlain Translation

> German to English translation by Jack Chamberlain, a native English speaker based in Söll, Tirol (Austria). For businesses, tourism, academia and publications.

## Services
${services}

## How it works
${steps}
${t.how.price} Free quote, no obligation.

## Reference
- ${t.work.client}: magazine (about 40,000 words) and complete website translated into English.

## Contact
- Email: ${EMAIL}
- WhatsApp: ${WHATSAPP_DISPLAY}
- Website: ${SITES.en}/ (Deutsch: ${SITES.de}/)
`;

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
