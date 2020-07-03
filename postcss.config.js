const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    // Jekyll output directory
    "./src/**/*.js",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("cssnano")(),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
