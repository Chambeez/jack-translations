# Build brief: translation site upgrade (5 Oct 2026)

Read first: CLAUDE.md, docs/audit-2026-10-05.md, branding/HANDOFF.md.
Work in small steps. After each step: npm run build passes, check 390px (no horizontal scroll) and desktop, both languages, then show Jack. Jack pushes himself. Plain language with Jack, no em dashes.

## 1. Branding (from branding/HANDOFF.md)
New logo (logo-white.svg in header, logo.svg on light), sizes as in the handoff, Space Grotesk headings, buttons/cards/spacing matched to ~/Projects/chamberlainweb (read its CSS, don't guess). Remove "Website by Decisive Development" footer credit and meta author (Jack: Chamberlain Translation / Jack Chamberlain).

## 2. Language fix
Decide language on the server: pass the hostname language from hooks.server.js to the layout (e.g. +layout.server.js load) so the first HTML is already German on chamberlainuebersetzung.com and English on chamberlaintranslation.com. Keep the DE/EN switcher.
Then serve English on chamberlaintranslation.com instead of redirecting: Jack/Claude removes the Cloudflare redirect rule on that zone and adds both chamberlaintranslation.com + www as custom domains on the Pages project. Ask Jack before the DNS/rule change. Add hreflang links between the two domains.

## 3. Getting enquiries (main goal)
- Main button everywhere: "Send your text – free quote" / "Text senden – kostenloses Angebot". Decision: NO prices on the site.
- Short "How it works" in 3 steps: send your text (or a sample) → price and deadline within [confirm: 24 h on working days?] → translation + one revision round (matches the terms).
- One line on what the price depends on: length, type of text, deadline.
- Quote form: name, email, type of text (select), language direction (fixed DE→EN), deadline, message, file upload or link. Use Formspree (check if file upload works on the free plan; otherwise ask for a link or say "attach it to the email we send back"). Until the endpoint exists: mailto fallback. Demo-safe: no required fields that block.
- WhatsApp floating button: +43 677 6343 52 16 [confirm with Jack], first line in page language ("Hallo Jack, ich habe einen Text zum Übersetzen:" / "Hi Jack, I have a text to translate:").
- Email info@jackchamberlaintranslation.com works (Porkbun forwarding). Show it near the top of the contact section, not only at the bottom.
- Fix "Geschäftszeiten:**" typo, mobile nav wrap ("Über mich").

## 4. Proof
- Jack's reference: Wilder Kaiser tourism region. Work: a magazine of about 40,000 words and their whole website (translation). Ask Jack whether he may name them / use their logo, and get a short testimonial from his contact there.
- Add a "Selected work" block: Wilder Kaiser: magazine (~40,000 words), website. Testimonial section with a clearly marked placeholder until real quotes arrive. Never invent quotes.

## 5. Legal (not legal advice; Jack to confirm details)
- Impressum page (name, address, contact, business type, UID if any, authority). Ask Jack for his details; don't guess.
- Datenschutzerklärung (privacy policy) covering hosting (Cloudflare), email, form provider, WhatsApp, Google Analytics.
- Google Analytics: either remove it or add a consent banner that loads GA only after consent. Recommend: remove, or switch to Cloudflare Web Analytics (no cookies). Ask Jack.
- Keep Terms (/policy), link all three in the footer.

## 6. SEO / GEO
- sitemap.xml (both domains), robots.txt Sitemap line (robots is Cloudflare-managed: check "Managed robots.txt" setting), llms.txt.
- JSON-LD: ProfessionalService / LocalBusiness, Person (Jack), service list, areaServed, languages.
- og:image (logo on navy, 1200x630), per-language og/title/description.
- Optional later: one page per service (Marketing/website, Tourism, Academic, Technical) with its own title and text. Tourism is the strongest niche given the Wilder Kaiser work.

## Open questions for Jack
- WhatsApp number and quote reply time.
- Permission to name Wilder Kaiser; testimonial contact.
- Impressum details. GA: remove or keep with banner?
