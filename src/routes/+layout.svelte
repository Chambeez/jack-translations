<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import WhatsAppButton from '$lib/components/ui/WhatsAppButton.svelte';
	import { language } from '$lib/stores/language';
	import { jsonLd } from '$lib/jsonld';

	export let data;

	// The server picks the language from the domain (hooks.server.js), so the
	// first HTML is already in the right language. The DE/EN switch in the nav
	// changes it afterwards in the browser.
	language.set(data.lang);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd(data.lang)).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
	<WhatsAppButton />
</div>
