<script>
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-[#3b4953] bg-theme-primary pb-10 pt-14 text-[0.95rem] text-theme-muted">
	<div class="container flex flex-wrap justify-between gap-7">
		<div>
			<img
				src="/images/logo-white.svg"
				alt="Chamberlain Translation"
				width="332"
				height="28"
				loading="lazy"
				class="mb-3 h-7 w-auto"
			/>
			<p class="text-theme-muted">{translations[$language].footer.tagline}<br />Söll, Tirol</p>
		</div>
		<ul class="grid gap-2">
			<li><a class="text-white hover:text-theme-accent-on-dark" href="mailto:info@jackchamberlaintranslation.com">info@jackchamberlaintranslation.com</a></li>
			<li><a class="text-white hover:text-theme-accent-on-dark" href="/impressum">{translations[$language].footer.imprint}</a></li>
			<li><a class="text-white hover:text-theme-accent-on-dark" href="/datenschutz">{translations[$language].footer.privacy}</a></li>
			<li><a class="text-white hover:text-theme-accent-on-dark" href="/policy">{translations[$language].footer.terms}</a></li>
			<li>© {year} Jack Chamberlain</li>
		</ul>
	</div>
</footer>
