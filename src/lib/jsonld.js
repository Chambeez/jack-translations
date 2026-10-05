import { translations } from '$lib/i18n/translations';
import { SITES, EMAIL, WHATSAPP_DISPLAY } from '$lib/site';

// Structured data (schema.org) so search engines and AI assistants can read
// who Jack is, what he offers and where.
export function jsonLd(lang) {
	const t = translations[lang];
	const url = SITES[lang] + '/';
	const services = [1, 2, 3, 4, 5, 6].map((n) => ({
		'@type': 'Offer',
		itemOffered: {
			'@type': 'Service',
			name: t.services['service' + n].title,
			description: t.services['service' + n].description
		}
	}));

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfessionalService',
				'@id': url + '#business',
				name: t.metadata.title,
				description: t.metadata.description,
				url,
				image: `${SITES[lang]}/images/og-${lang}.png`,
				logo: `${SITES[lang]}/images/logo.svg`,
				email: EMAIL,
				telephone: WHATSAPP_DISPLAY,
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Söll',
					addressRegion: 'Tirol',
					addressCountry: 'AT'
				},
				areaServed: ['AT', 'DE', 'CH'],
				availableLanguage: ['de', 'en'],
				knowsLanguage: ['de', 'en'],
				founder: { '@id': url + '#jack' },
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: t.services.title,
					itemListElement: services
				},
				sameAs: [SITES[lang === 'de' ? 'en' : 'de'] + '/']
			},
			{
				'@type': 'Person',
				'@id': url + '#jack',
				name: 'Jack Chamberlain',
				jobTitle: lang === 'de' ? 'Übersetzer Deutsch–Englisch' : 'German to English translator',
				knowsLanguage: ['en', 'de'],
				worksFor: { '@id': url + '#business' },
				image: `${SITES[lang]}/images/jack-chamberlain.webp`
			}
		]
	};
}
