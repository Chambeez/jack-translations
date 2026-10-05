import { SITES, PAGES } from '$lib/site';

// Each domain lists its own pages, with links to the other language version.
export const GET = ({ locals }) => {
	const urls = PAGES.map(
		(path) => `  <url>
    <loc>${SITES[locals.lang]}${path}</loc>
    <xhtml:link rel="alternate" hreflang="de" href="${SITES.de}${path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITES.en}${path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITES.de}${path}"/>
  </url>`
	).join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
	);
};
