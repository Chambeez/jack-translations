import { SITES } from '$lib/site';

export const GET = ({ locals }) =>
	new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITES[locals.lang]}/sitemap.xml\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
