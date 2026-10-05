<script>
    import { language } from '$lib/stores/language.js';
    import { translations } from '$lib/i18n/translations.js';
</script>
<section id="contact" class="bg-theme-light section-pad">
	<div class="container">		
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 justify-center">
			<div>
				<h2 class="mb-4">
					{translations[$language].contact.title}
				</h2>
				<p class=" text-lg leading-relaxed md:text-xl">
					{translations[$language].contact.copy} 
				</p>
			</div>
			<div class="w-full sm:w-fit mx-auto">
				<div>
					<h3 class="mb-4 text-2xl">
						{translations[$language].contact.subtitle}
					</h3>
					<ul class="space-y-4">
						<li class="flex items-center">
							<svg
								class="mr-3 h-5 w-5 text-theme-accent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
							<span>
								Email: 
								<a href="mailto:info@jackchamberlaintranslation.com" class="text-theme-accent">info@jackchamberlaintranslation.com</a>
							</span>
						</li>
						<li class="flex items-center">
							<svg
								class="mr-3 h-5 w-5 text-theme-accent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v18m9-9H3"
								></path>
							</svg>
							<span>{translations[$language].contact.location}: Söll, Tirol</span>
						</li>
						<li class="flex items-center">
							<svg
								class="mr-3 h-5 w-5 text-theme-accent"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
							<span>{translations[$language].contact.business}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- <div class="w-full sm:w-fit mx-auto">
	<h3 class="mb-4 text-2xl font-semibold ">
		Connect with Me
	</h3>
	<ul class="space-y-4 ">
		<li class="flex items-center">
			<svg
				class="mr-3 h-5 w-5 text-theme-accent"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM10 12l4 4m0 0l4-4m-4 4V4"
				></path>
			</svg>
			<a href="https://www.linkedin.com" class="text-theme-accent">LinkedIn Profile</a>
		</li>
		<li class="flex items-center">
			<svg
				class="mr-3 h-5 w-5 text-theme-accent"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v18m9-9H3"
				></path>
			</svg>
			<span><a href="https://twitter.com" class="text-theme-accent">Twitter</a></span>
		</li>
	</ul>
</div> -->