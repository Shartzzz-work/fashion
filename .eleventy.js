module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.setBrowserSyncConfig({
    files: 'dist/*.css'
  });
  eleventyConfig.addWatchTarget("src/script.js");

  return {
    templateFormats: ["html", "njk"],

    dir: {
      htmlTemplateEngine: "njk",

      input: "src",
      output: "dist",
      includes: "modules"
    }
  };
};