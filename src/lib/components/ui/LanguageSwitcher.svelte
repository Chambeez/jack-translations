<script>
	import { language } from '$lib/stores/language';

	const languages = [
		{ code: 'en', label: 'EN', name: 'English' },
		{ code: 'de', label: 'DE', name: 'Deutsch' }
	];

	function switchLanguage(langCode) {
		language.set(langCode);
		document.documentElement.lang = langCode;
	}
</script>

<div class="flex rounded-full border border-[#4a5862] p-0.5 font-head text-[0.85rem] font-semibold">
	{#each languages as { code, label, name }}
		<button
			type="button"
			lang={code}
			aria-label={name}
			aria-pressed={$language === code}
			class="rounded-full px-2.5 py-1 leading-none transition-colors duration-150 {$language === code
				? 'bg-white text-theme-dark'
				: 'text-white hover:text-theme-accent-on-dark'}"
			on:click={() => switchLanguage(code)}
		>
			{label}
		</button>
	{/each}
</div>
