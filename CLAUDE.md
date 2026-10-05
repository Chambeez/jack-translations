# Chamberlain Translation website

Jack Chamberlain's German-to-English translation business site.
Jack is not a trained developer: explain every step in plain language, do the technical work, tell him only the clicks he must do himself.

## Live
- Main: https://chamberlainuebersetzung.com (+ www). chamberlaintranslation.com 301-redirects there (Cloudflare redirect rule on that zone).
- Test URL: https://jack-translations.pages.dev

## Stack
- SvelteKit 2, Svelte 5, Tailwind 3, Vite 5. Adapter: @sveltejs/adapter-cloudflare. Node 22 (.nvmrc).
- Language is chosen per hostname in `src/hooks.server.js` (chamberlainuebersetzung.com = de, else en). Texts in `src/lib/i18n/translations.js`. The language switcher is client-side (`src/lib/stores/language.js`).
- Pages: `src/routes/+page.svelte` (sections in `src/lib/components/sections/`), `src/routes/policy/`.
- Google Analytics G-3NPEM8KRCL in `src/app.html` (property probably still in Tom's account; ask Tom for admin access).

## Deploy
- GitHub: Chambeez/jack-translations, branch `master`. Push = live (Cloudflare Pages project "jack-translations", build `npm run build`, output `.svelte-kit/cloudflare`).
- Jack pushes from VS Code (Sync button). Commit with Jack as author.
- If a push doesn't go live within a few minutes: Cloudflare showed a "disconnected from Git" warning on 5 Oct 2026; reconnect in Pages → Settings → Build → Git repository.

## Accounts (Jack does all logins and passwords)
- Domains: Porkbun (account jackchamberlain), auto-renew on, expire Jan 2027. Nameservers: Cloudflare (chloe/rene.ns.cloudflare.com).
- DNS + hosting: Cloudflare account Hello@planyourintake.com. Ask Jack before changing DNS or account settings.
- No email on these domains.

## History
- Built by Tom (Decisive Development), handed over 5 Oct 2026 (repo, domains). Moved from Netlify to Cloudflare the same day. Tom deletes the Netlify site once Jack confirms.

## Ideas (not started)
- Serve English on chamberlaintranslation.com instead of redirecting (hooks.server.js already supports it).
- og:image is empty in app.html; author meta says "Decisive Development".
