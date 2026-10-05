<script>
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';

	$: t = translations[$language].nav;
</script>

<header class="sticky top-0 z-50 w-full bg-theme-primary">
	<nav class="container flex flex-col items-center gap-3 py-4 lg:flex-row lg:justify-between lg:gap-6">
		<a href="/" class="block w-full max-w-[474px] lg:max-w-[332px]" aria-label="Chamberlain Translation">
			<img
				src="/images/logo-white.svg"
				alt="Chamberlain Translation"
				width="474"
				height="40"
				class="block h-auto w-full"
			/>
		</a>
		<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 whitespace-nowrap font-head text-[0.92rem] font-medium text-white sm:gap-x-6 sm:text-[0.98rem]">
			<a class="hover:text-theme-accent-on-dark" href="/#services">{t.services}</a>
			<a class="hover:text-theme-accent-on-dark" href="/#about">{t.about}</a>
			<a class="hover:text-theme-accent-on-dark" href="/#contact">{t.contact}</a>
			<LanguageSwitcher />
		</div>
	</nav>
</header>
