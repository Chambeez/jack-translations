<script>
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';

	$: t = translations[$language].how;
</script>

<section id="how" class="section-pad bg-white">
	<div class="container">
		<div class="mb-12 max-w-[760px]">
			<p class="eyebrow">{t.eyebrow}</p>
			<h2>{t.title}</h2>
		</div>
		<ol class="grid gap-6 md:grid-cols-3">
			{#each t.steps as step, i}
				<li class="card">
					<span class="mb-[18px] block font-head font-bold text-theme-accent">0{i + 1}</span>
					<h3>{step.title}</h3>
					<p class="mb-0">{step.text}</p>
				</li>
			{/each}
		</ol>
		<p class="mb-0 mt-8 text-[1.05rem]">{t.price}</p>
	</div>
</section>
