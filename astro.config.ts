import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

const config = defineConfig({
	site: 'https://dengsauve.github.io',
	base: '/dnsauve.dev',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		// sitemap(),
		spectre({
			name: 'Dennis Sauve',
			openGraph: {
				home: {
					title: 'Dennis Sauve',
					description: 'My home for blogging and projects',
				},
				blog: {
					title: 'Blog',
					description: 'News and guides for Devs and DevOps.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
});

export default config;