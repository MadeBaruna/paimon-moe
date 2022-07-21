import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { build } from 'vite';

/** @type {import('vite').Plugin} */
const firebaseSwPlugin = {
  name: 'firebaseplugin',
  apply: 'build',
  enforce: 'post',
  buildEnd: async () => {
    const conf = {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/firebase-messaging-sw.js'),
          formats: ['es'],
        },
        rollupOptions: {
          output: {
            entryFileNames: 'firebase-messaging-sw.js',
          },
        },
        outDir: resolve(__dirname, '.svelte-kit/output/client'),
        emptyOutDir: false,
      },
      configFile: false,
    };

    await build(conf);
  },
};

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    sourcemap: true,
  },
  plugins: [sveltekit(), firebaseSwPlugin],
};

export default config;
