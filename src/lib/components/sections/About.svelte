<script>
    import CheckListItem from '$lib/components/ui/CheckListItem.svelte';
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
</script>

<section id="about" class="bg-white section-pad">
	<div class="container">
		<h2 class="text-center">
			{translations[$language].about.title}
        </h2>
		<div class="mt-6 items-center gap-8 grid grid-cols-3 mb-16">
			<img
				src="/images/jack-chamberlain.webp"
				alt="Jack Chamberlain"
				loading="lazy"
				class="h-40 w-40 rounded-full object-cover shadow-lg md:h-48 md:w-48 col-span-3 sm:col-span-1 mx-auto"
			/>
			<p class="text-lg leading-relaxed md:text-xl col-span-3 sm:col-span-2">
				{@html translations[$language].about.description.replace('%name%', 
					`<span class="font-semibold text-theme-accent">Jack Chamberlain</span>`)}
			</p>					
		</div>
		<div class="grid items-start gap-12 md:grid-cols-2">
			<div class="flex flex-col">
				<h3 class="mb-4">
					{translations[$language].about.title2}                    
                </h3>
				<ul class="space-y-4">
                    <CheckListItem 
                        title="{translations[$language].about.item1}"
                        description="{translations[$language].about.itemDescription1}"
                    />
                    <CheckListItem 
                        title="{translations[$language].about.item2}"
                        description="{translations[$language].about.itemDescription2}"
                    />
                    <CheckListItem 
                        title="{translations[$language].about.item3}"
                        description="{translations[$language].about.itemDescription3}"
                    />
                </ul>
			</div>
			<div class="flex flex-col">
				<h3 class="mb-4">
					{translations[$language].about.title3}
				</h3>
				<p class="leading-relaxed ">
					{translations[$language].about.ai}					
				</p>
			</div>
		</div>
		<p class="mt-12 text-center text-lg w-full lg:w-[900px] mx-auto">
			{translations[$language].about.end}			
		</p>
	</div>
</section>
