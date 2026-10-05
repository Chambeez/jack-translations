<script>
	import { language } from '$lib/stores/language.js';
	import { translations } from '$lib/i18n/translations.js';
	import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY } from '$lib/site';
	import QuoteForm from '$lib/components/ui/QuoteForm.svelte';

	$: t = translations[$language].contact;
	$: wa = translations[$language].whatsapp;
</script>

<section id="contact" class="section-pad bg-theme-primary text-white">
	<div class="container grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
		<div>
			<h2 class="text-white">{t.title}</h2>
			<p class="text-[1.12rem] text-theme-muted">{t.copy}</p>
			<ul class="mt-8 space-y-4 text-white">
				<li class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 flex-shrink-0 text-theme-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
					<span>{t.email}: <a href="mailto:{EMAIL}" class="font-semibold underline-offset-4 hover:underline">{EMAIL.split('@')[0]}@<wbr />{EMAIL.split('@')[1]}</a></span>
				</li>
				<li class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 flex-shrink-0 text-theme-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z"/></svg>
					<span>{t.whatsapp}: <a href="https://wa.me/{WHATSAPP}?text={encodeURIComponent(wa.text)}" target="_blank" rel="noopener" class="font-semibold underline-offset-4 hover:underline">{WHATSAPP_DISPLAY}</a></span>
				</li>
				<li class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 flex-shrink-0 text-theme-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
					<span>{t.location}: Söll, Tirol</span>
				</li>
				<li class="flex items-start gap-3">
					<svg class="mt-1 h-5 w-5 flex-shrink-0 text-theme-accent-on-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
					<span>{t.business}</span>
				</li>
			</ul>
		</div>
		<QuoteForm />
	</div>
</section>
