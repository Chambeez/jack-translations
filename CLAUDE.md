# Chamberlain Translation website

Jack Chamberlain's German-to-English translation business site.
Jack is not a trained developer: explain every step in plain language, do the technical work, tell him only the clicks he must do himself.

## Live
- Main: https://chamberlainuebersetzung.com (+ www). chamberlaintranslation.com 301-redirects there (Cloudflare redirect rule on that zone).
- Test URL: https://jack-translations.pages.dev

## Stack
- SvelteKit 2, Svelte 5, Tailwind 3, Vite 5. Adapter: @sveltejs/adapter-cloudflare. Node 22 (.nvmrc).
- Language is chosen per hostname on the server (`src/hooks.server.js` -> `+layout.server.js` -> store), so the first HTML is already in the right language. Locally: `?lang=de`. Texts in `src/lib/i18n/translations.js`. DE/EN switch in the header changes it client-side.
- Contact details, WhatsApp, Formspree endpoint, Impressum details (LEGAL), sitemap pages: `src/lib/site.js`. Testimonials (real quotes only): `src/lib/testimonials.js`.
- Styles copied from ~/Projects/chamberlainweb (Space Grotesk, .btn, .card, .container, .section-pad in `src/app.css`).
- Pages: `src/routes/+page.svelte` (sections in `src/lib/components/sections/`), `/policy` (terms), `/impressum`, `/datenschutz`. Per-domain `/robots.txt`, `/sitemap.xml`, `/llms.txt` are server routes.
- Analytics: Google Analytics removed 5 Oct 2026 (no consent). Use Cloudflare Web Analytics (Pages project -> Metrics), no cookies.

## Deploy
- GitHub: Chambeez/jack-translations, branch `master`. Push = live (Cloudflare Pages project "jack-translations", build `npm run build`, output `.svelte-kit/cloudflare`).
- Jack pushes from VS Code (Sync button). Commit with Jack as author.
- If a push doesn't go live within a few minutes: check the Cloudflare GitHub app has access to this repo (github.com/settings/installations, "Cloudflare Workers and Pages", Repository access). It was missing until 6 Oct 2026 (repo came from Tom), which showed as "disconnected from your Git account" in Pages. Cloudflare only builds on a new push after reconnecting.

## Accounts (Jack does all logins and passwords)
- Domains: Porkbun (account jackchamberlain), auto-renew on, expire Jan 2027. Nameservers: Cloudflare (chloe/rene.ns.cloudflare.com).
- DNS + hosting: Cloudflare account Hello@planyourintake.com. Ask Jack before changing DNS or account settings.
- No email on these domains.

## History
- Built by Tom (Decisive Development), handed over 5 Oct 2026 (repo, domains). Moved from Netlify to Cloudflare the same day. Tom deletes the Netlify site once Jack confirms.

## Open
- Cloudflare: remove the redirect rule on chamberlaintranslation.com, add chamberlaintranslation.com + www as custom domains on the Pages project (needs Jack's OK). Turn on Web Analytics. Check "Managed robots.txt".
- Formspree endpoint not set: quote form opens the visitor's email app until FORM_ENDPOINT is filled in.
- Testimonial from Wilder Kaiser contact.

## Ideas (not started)
- One page per service (Marketing/website, Tourism, Academic, Technical). Tourism is the strongest niche.

## Decisions
- 2026-10-05: No prices on the site. Main call to action: free quote (send your text, get price and deadline).
- 2026-10-05: Quote reply promise: within one working day. WhatsApp +43 677 6343 52 16 confirmed. Wilder Kaiser may be named. GA replaced by Cloudflare Web Analytics.
