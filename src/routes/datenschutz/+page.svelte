<script>
	import { language } from '$lib/stores/language';
	import { LEGAL, EMAIL, FORM_ENDPOINT } from '$lib/site';

	// Not legal advice. Update this page whenever a new service is added
	// (form provider, analytics, embedded content).
	const text = {
		de: {
			title: 'Datenschutzerklärung',
			intro: 'Der Schutz Ihrer Daten ist mir wichtig. Hier erfahren Sie, welche Daten beim Besuch dieser Website und bei einer Anfrage verarbeitet werden. Grundlage ist die Datenschutz-Grundverordnung (DSGVO) und das österreichische Datenschutzgesetz (DSG).',
			controller: 'Verantwortlicher',
			sections: [
				['Hosting und Server-Logs', 'Diese Website wird bei Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) gehostet und über deren Netzwerk ausgeliefert. Beim Aufruf verarbeitet Cloudflare technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser, um die Website auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist mein berechtigtes Interesse an einem sicheren, funktionierenden Angebot (Art. 6 Abs. 1 lit. f DSGVO). Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert; zusätzlich gelten Standardvertragsklauseln.'],
				['Besucherstatistik', 'Ich nutze Cloudflare Web Analytics, um zu sehen, wie oft Seiten aufgerufen werden. Dabei werden keine Cookies gesetzt und keine Profile über einzelne Besucher erstellt; die Auswertung erfolgt nur in zusammengefasster Form. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.'],
				['Cookies und Schriften', 'Diese Website setzt keine Cookies. Die Schrift ist auf dieser Website selbst gespeichert; es werden dafür keine Daten an Dritte übertragen.'],
				['Kontakt per E-Mail und Anfrageformular', 'Wenn Sie mir eine E-Mail schreiben oder das Anfrageformular nutzen, verarbeite ich Ihre Angaben (z. B. Name, E-Mail-Adresse, Ihr Text und Ihre Nachricht), um Ihre Anfrage zu beantworten und ein Angebot zu erstellen. Rechtsgrundlage ist die Anbahnung bzw. Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Die Daten bleiben gespeichert, solange es für die Anfrage und ggf. den Auftrag nötig ist, und darüber hinaus nur, soweit gesetzliche Aufbewahrungspflichten (z. B. 7 Jahre für Buchhaltungsunterlagen) bestehen.'],
				['WhatsApp', 'Wenn Sie den WhatsApp-Button nutzen, öffnet sich WhatsApp, ein Dienst der WhatsApp Ireland Limited (Meta). Erst dann werden Daten an WhatsApp übertragen; es gelten die Datenschutzbestimmungen von WhatsApp. Über WhatsApp gesendete Nachrichten verwende ich nur zur Beantwortung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie das nicht möchten, schreiben Sie mir bitte per E-Mail.'],
				['Ihre Rechte', 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Schreiben Sie mir dazu einfach eine E-Mail. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist das die Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, www.dsb.gv.at.']
			],
			formspree: ['Anfrageformular (Formspree)', 'Das Anfrageformular wird über Formspree (Formspree, Inc., USA) versendet. Ihre Angaben werden dabei an Formspree übertragen und mir per E-Mail weitergeleitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO; für die Übermittlung in die USA gelten Standardvertragsklauseln.'],
			updated: 'Stand: Oktober 2026'
		},
		en: {
			title: 'Privacy policy',
			intro: 'Protecting your data matters to me. This page explains which data is processed when you visit this website or send an enquiry. It is based on the EU General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG).',
			controller: 'Controller',
			sections: [
				['Hosting and server logs', 'This website is hosted by Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) and delivered through its network. When you visit, Cloudflare processes technically necessary data such as your IP address, date and time, the page requested and your browser, to deliver the website and protect it from attacks. The legal basis is my legitimate interest in a secure, working website (Art. 6(1)(f) GDPR). Cloudflare is certified under the EU-US Data Privacy Framework; standard contractual clauses also apply.'],
				['Visitor statistics', 'I use Cloudflare Web Analytics to see how often pages are visited. It sets no cookies and builds no profiles of individual visitors; data is only evaluated in aggregate. The legal basis is Art. 6(1)(f) GDPR.'],
				['Cookies and fonts', 'This website sets no cookies. The font is stored on this website itself; no data is sent to third parties for it.'],
				['Contact by email and the quote form', 'If you email me or use the quote form, I process the details you give (such as name, email address, your text and message) to answer your enquiry and prepare a quote. The legal basis is taking steps towards, or performing, a contract (Art. 6(1)(b) GDPR). The data is kept as long as needed for the enquiry and any resulting job, and after that only where the law requires it (for example 7 years for accounting records).'],
				['WhatsApp', 'If you use the WhatsApp button, WhatsApp opens, a service of WhatsApp Ireland Limited (Meta). Only then is data sent to WhatsApp, under WhatsApp’s own privacy policy. I use messages sent via WhatsApp only to answer your enquiry (Art. 6(1)(b) GDPR). If you prefer not to use WhatsApp, please email me.'],
				['Your rights', 'You have the right to access, rectification, erasure, restriction of processing, data portability and to object. Just email me. If you believe the processing of your data breaks data protection law, you can complain to the supervisory authority. In Austria this is the Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna, www.dsb.gv.at.']
			],
			formspree: ['Quote form (Formspree)', 'The quote form is sent via Formspree (Formspree, Inc., USA). Your details are transmitted to Formspree and forwarded to me by email. The legal basis is Art. 6(1)(b) GDPR; standard contractual clauses apply to the transfer to the USA.'],
			updated: 'Last updated: October 2026'
		}
	};

	$: t = text[$language];
	$: sections = FORM_ENDPOINT ? [...t.sections.slice(0, 4), t.formspree, ...t.sections.slice(4)] : t.sections;
</script>

<div class="container section-pad max-w-[760px]">
	<h1 class="mb-6 text-[clamp(2rem,5vw,2.9rem)]">{t.title}</h1>
	<p class="mb-10 text-[1.1rem]">{t.intro}</p>

	<div class="space-y-8 [&_h2]:mb-2 [&_h2]:text-[1.25rem] [&_p]:mb-0">
		<section>
			<h2>{t.controller}</h2>
			<p>
				{LEGAL.name}<br />
				{LEGAL.street}, {LEGAL.town}, {LEGAL.country[$language]}<br />
				<a class="text-theme-accent" href="mailto:{EMAIL}">{EMAIL}</a>
			</p>
		</section>
		{#each sections as [title, body]}
			<section>
				<h2>{title}</h2>
				<p>{body}</p>
			</section>
		{/each}
		<p class="text-[0.9rem]">{t.updated}</p>
	</div>
</div>
