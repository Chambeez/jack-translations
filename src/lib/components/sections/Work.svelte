<script>
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';
	import { testimonials } from '$lib/testimonials';

	$: t = translations[$language].work;
</script>

<section id="work" class="section-pad bg-theme-light">
	<div class="container">
		<div class="mb-12 max-w-[760px]">
			<p class="eyebrow">{t.eyebrow}</p>
			<h2>{t.title}</h2>
		</div>
		<div class="card">
			<p class="mb-2 font-head text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-theme-accent">{t.tag}</p>
			<h3 class="text-[1.5rem]">{t.client}</h3>
			<div class="mt-6 grid gap-6 sm:grid-cols-2">
				{#each t.items as item}
					<div class="border-t border-theme-line pt-5">
						<span class="block font-head text-[2.4rem] font-bold leading-none tracking-[-0.02em] text-theme-dark">{item.big}</span>
						<p class="mb-0 mt-2">{item.label}</p>
					</div>
				{/each}
			</div>
		</div>

		{#if testimonials.length}
			<h3 class="mb-6 mt-16 text-[1.5rem]">{t.testimonialsTitle}</h3>
			<div class="grid gap-6 md:grid-cols-2">
				{#each testimonials as item}
					<figure class="card">
						<blockquote class="text-[1.1rem] text-theme-dark">{$language === 'de' ? '„' : '“'}{item.quote[$language]}“</blockquote>
						<figcaption class="mt-4 font-head text-[0.95rem]">
							<span class="font-semibold text-theme-dark">{item.name}</span><span class="text-theme-secondary">, {item.role[$language]}</span>
						</figcaption>
					</figure>
				{/each}
			</div>
		{/if}
	</div>
</section>
