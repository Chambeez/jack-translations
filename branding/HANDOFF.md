# Handoff: match chamberlaintranslation.com branding to Chamberlain Web

Jack wants the translation site to look like part of the same family as chamberlainweb.at. The colour palette already matches (both use navy #27323a, ink #12181b, red #b80c09, muted #506777, soft #f5f5f5). The logo did not. A new logo is in this folder.

## The new logo (in this folder)
- `logo-white.svg`: for dark backgrounds (the current header). White "chamberlain", bright red #E0312C "translation", same as chamberlainweb.at's logo-white.svg.
- `logo.svg`: for light backgrounds. Ink #12181B and red #B80C09.
- `logo-white.webp`: raster fallback, 1185 x 100.
- `preview-dark.png`, `preview-light.png`: what they look like.

Built from the actual chamberlainweb.at logo: same Space Grotesk outlines, "chamberlain" bold (700), "translation" regular (400) in red like "web", dotless i with a small globe above it in place of Chamberlain Web's mouse cursor. Text is outlined, so no font is needed to display it.

## What to do
1. Copy `logo-white.svg` into `static/images/` and point the header logo in `src/lib/components/nav/Nav.svelte` at it (currently `/images/logo-white.webp`, sized 388x50 desktop, 328x42 mobile).
2. Fix the size: the new logo is wider (ratio about 11.85:1). Use about 474x40 on desktop and 379x32 on mobile. The old 42px mobile height would make it about 498px wide, too wide for a phone. Check at 390px width with no horizontal scroll.
3. Use the same logo anywhere else the old one appears (footer, favicon/OG image if they use it). Keep alt text "Chamberlain Translation".
4. Then match the rest of the branding to chamberlainweb.at (repo: ~/Projects/chamberlainweb): Space Grotesk headings, button and card styles, spacing. Look at chamberlainweb's CSS for the exact values rather than guessing.
5. `npm run build` must pass. Show Jack before pushing; he pushes himself.

## Rules (Jack)
Short answers, plain language (he is not a developer), no em dashes, no overclaiming. Never type passwords; account and DNS changes need his OK.
