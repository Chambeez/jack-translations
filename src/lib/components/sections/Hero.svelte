<script>
	import Button from '$lib/components/ui/Button.svelte';
    import { language } from '$lib/stores/language';
    import { translations } from '$lib/i18n/translations';	
</script>

<section class="bg-white pt-[clamp(72px,12vw,150px)] pb-[clamp(64px,9vw,110px)]">
	
	<div class="container text-center">
		<h1 class="mx-auto max-w-[16em]">
			{translations[$language].hero.welcome} <span class="text-theme-secondary">{translations[$language].hero.name}</span>
		</h1>
		<div class="bg-theme-accent mx-auto my-8 h-1 w-24"></div>
		<p class="mt-6 text-lg leading-relaxed md:text-xl">
			{translations[$language].hero.tagline}
		</p>
		<p class="m-auto mb-16 mt-6 w-full max-w-[850px] text-base">
			{translations[$language].hero.description}
		</p>
		<p class="mt-4 text-base md:text-lg">
            {translations[$language].hero.callToAction}
        </p>
		<div class="mt-8">
			<Button 
                href="#contact" 
                text={translations[$language].hero.buttonText}
            />
		</div>
	</div>
</section>
