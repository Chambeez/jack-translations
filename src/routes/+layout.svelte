<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { language } from '$lib/stores/language';

	export let data;

	// The server picks the language from the domain (hooks.server.js), so the
	// first HTML is already in the right language. The DE/EN switch in the nav
	// changes it afterwards in the browser.
	language.set(data.lang);
</script>

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
