// const sveltePreprocess = require('svelte-preprocess');
// const postcss = require('./postcss.config');

// const preprocess = sveltePreprocess({
//   defaults: {
//     style: 'postcss',
//   },
//   postcss,
// });

// module.exports = { preprocess };

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    serviceWorker: {
      register: false,
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
