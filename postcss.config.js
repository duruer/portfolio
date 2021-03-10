const production = !process.env.ROLLUP_WATCH;

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    // postcssImport(),
    autoprefixer(),
    production && cssnano({
      preset: "default",
    }),
  ],
};
