<script>
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';
</script>

<section class="w-full sticky top-0 z-50">
	<div class="bg-theme-primary">
		<nav class="container flex flex-col items-center justify-between py-4">
			<a href="/" class="mb-3 block w-full max-w-[474px]" aria-label="Chamberlain Translation">
				<img
					src="/images/logo-white.svg"
					alt="Chamberlain Translation"
					width="474"
					height="40"
					class="block h-auto w-full"
				/>
			</a>
			<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 whitespace-nowrap font-head text-[0.92rem] font-medium text-white sm:gap-x-6 sm:text-[0.98rem]">
				<a class="hover:text-theme-accent-on-dark" href="/">{translations[$language].nav.home}</a>
				<a class="hover:text-theme-accent-on-dark" href="#services">{translations[$language].nav.services}</a>
				<a class="hover:text-theme-accent-on-dark" href="#about">{translations[$language].nav.about}</a>
				<a class="hover:text-theme-accent-on-dark" href="#contact">{translations[$language].nav.contact}</a>
			</div>
		</nav>
	</div>
</section>
