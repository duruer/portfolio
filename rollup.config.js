import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sveltePreprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import fsExtra from "fs-extra";
import fs from "fs";

if (fs.existsSync("public/assets"))
  fs.rmdirSync("public/assets", { recursive: true });

fsExtra.copySync("src/assets", "public/assets");

const production = !process.env.ROLLUP_WATCH;
const input = ["src/main.js"];

const watch = {
  clearScreen: false,
};

const plugins = [
  json(),

  production &&
    babel({
      runtimeHelpers: true,
    }),

  postcss({
    extract: "assets/css/bundle.css",
    sourceMap: production,
    plugins: [],
  }),

  svelte({
    // enable run-time checks when not in production
    compilerOptions: {
      dev: !production,
    },

    preprocess: sveltePreprocess(),

    onwarn: (warning, handler) => {
      // e.g. don't warn on <marquee> elements, cos they're cool
      if (warning.code === "a11y-invalid-attribute") return;

      // let Rollup handle all other warnings normally
      handler(warning);
    },
  }),

  // If you have external dependencies installed from
  // npm, you'll most likely need these plugins. In
  // some cases you'll need additional configuration -
  // consult the documentation for details:
  // https://github.com/rollup/plugins/tree/master/packages/commonjs
  resolve({
    browser: true,
    dedupe: ["svelte"],
  }),

  commonjs(),

  replace({
    preventAssignment: true,
    values: {
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      ),
    },
  }),

  // In dev mode, call `npm run start` once
  // the bundle has been generated
  !production && serve(),

  // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !production && livereload("public"),

  // If we're building for production (npm run build
  // instead of npm run dev), minify
  production && terser(),
];

const esExport = {
  input: input,
  output: [
    {
      sourcemap: production,
      format: "es",
      name: "app",
      dir: "public/",
      entryFileNames: "assets/js/es/[name].js",
      chunkFileNames: "assets/js/es/[name].[hash].js",
      assetFileNames: "assets/[name].[hash].[ext]",
    },
  ],
  plugins: plugins,
  watch: watch,
  treeshake: production,
};

const systemBundlePlugins = [...plugins];

const systemExport = {
  input: input,
  output: [
    {
      sourcemap: production,
      format: "system",
      name: "app",
      dir: "public/",
      entryFileNames: "assets/js/system/[name].js",
      chunkFileNames: "assets/js/system/[name].[hash].js",
      assetFileNames: "assets/[name].[hash].[ext]",
    },
  ],
  plugins: systemBundlePlugins,
  watch: watch,
  treeshake: production,
};

const listExports = [esExport];

if (production) listExports.push(systemExport);

export default listExports;

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}
