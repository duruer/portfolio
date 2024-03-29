import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    scss: {
      quietDeps: true,
    },
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
  },
};

export default config;
