import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: { 
		adapter: adapter(),
		paths: {
			base: '/czsspc' // Change 'czsspc' to your repo name
		}
	}
};

export default config;