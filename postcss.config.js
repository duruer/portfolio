const production = !process.env.ROLLUP_WATCH;
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const importUrl = require('postcss-import-url');

module.exports = {
  plugins: [
    importUrl(),
    postcssImport(),
    autoprefixer(),
    production &&
      cssnano({
        preset: "default",
      }),
  ],
};
