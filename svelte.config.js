import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    env: {
      publicPrefix: 'VITE_'
    },
    serviceWorker: {
      register: false,
    },
  },
  preprocess: preprocess({
    postcss: true,
  }),
};

export default config;
