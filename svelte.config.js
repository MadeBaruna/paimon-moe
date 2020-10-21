const sveltePreprocess = require('svelte-preprocess');
const postcss = require('./postcss.config');

const preprocess = sveltePreprocess({
  defaults: {
    style: 'postcss',
  },
  postcss,
});

module.exports = { preprocess };
