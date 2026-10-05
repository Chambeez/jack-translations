import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// .container is defined in app.css to match chamberlainweb's .wrap
	corePlugins: { container: false },
	theme: {
		extend: {
			// Values copied from ~/Projects/chamberlainweb/src/styles/global.css
			colors: {
				theme: {
					primary: '#27323a',
					secondary: '#506777',
					dark: '#12181b',
					light: '#f5f5f5',
					gray: '#e6e6e6',
					line: '#e3e6ec',
					blue: {
						light: '#7CC6FE',
						dark: '#399E5A',
					},
					accent: '#B80C09',
					'accent-hover': '#960a07',
					'accent-on-dark': '#ff5a52',
					muted: '#c3cdd4',
				}
			},
			fontFamily: {
				head: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				card: '14px',
			}
		}
	},
	plugins: [typography]
};
