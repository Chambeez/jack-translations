<script>
	import { language } from '$lib/stores/language';
	import { LEGAL, EMAIL, WHATSAPP_DISPLAY } from '$lib/site';

	$: de = $language === 'de';
</script>

<div class="container section-pad max-w-[760px]">
	<h1 class="mb-6 text-[clamp(2rem,5vw,2.9rem)]">{de ? 'Impressum' : 'Legal notice (Impressum)'}</h1>
	<p class="mb-10">
		{de
			? 'Informationen gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.'
			: 'Information under § 5 E-Commerce-Gesetz (ECG) and § 25 Mediengesetz (Austria).'}
	</p>

	<div class="space-y-8 [&_h2]:mb-2 [&_h2]:text-[1.25rem] [&_p]:mb-0">
		<section>
			<h2>{de ? 'Anbieter und Medieninhaber' : 'Provider and media owner'}</h2>
			<p>
				{LEGAL.name}<br />
				{LEGAL.street}<br />
				{LEGAL.town}, {LEGAL.country[$language]}
			</p>
		</section>

		<section>
			<h2>{de ? 'Kontakt' : 'Contact'}</h2>
			<p>
				{de ? 'E-Mail' : 'Email'}: <a class="text-theme-accent" href="mailto:{EMAIL}">{EMAIL}</a><br />
				{de ? 'Telefon' : 'Phone'}: <a class="text-theme-accent" href="tel:+{WHATSAPP_DISPLAY.replace(/\D/g, '')}">{WHATSAPP_DISPLAY}</a>
			</p>
		</section>

		<section>
			<h2>{de ? 'Unternehmen' : 'Business'}</h2>
			<p>
				{de ? 'Unternehmensgegenstand' : 'Business purpose'}: {de ? 'Übersetzungen Deutsch–Englisch' : 'German to English translation services'}<br />
				{de ? 'Steuernummer' : 'Austrian tax number (Steuernummer)'}: {LEGAL.taxNumber}<br />
				{de
					? 'Neuer Selbständiger, versichert bei der Sozialversicherungsanstalt der Selbständigen (SVS). Keine Gewerbeberechtigung, keine Kammermitgliedschaft.'
					: 'Neuer Selbständiger (freelancer), insured with the Sozialversicherungsanstalt der Selbständigen (SVS). No trade licence, no chamber membership.'}<br />
				{de ? 'Aufsichtsbehörde' : 'Supervisory authority'}: {LEGAL.authority}
			</p>
		</section>

		<section>
			<h2>{de ? 'Offenlegung gemäß § 25 MedienG' : 'Disclosure under § 25 MedienG'}</h2>
			<p>
				{de
					? 'Grundlegende Richtung: Information über die Übersetzungsleistungen von Jack Chamberlain.'
					: 'Purpose: information about the translation services of Jack Chamberlain.'}<br />
				{de ? 'Es gilt österreichisches Recht.' : 'Austrian law applies.'}
			</p>
		</section>
	</div>
</div>
