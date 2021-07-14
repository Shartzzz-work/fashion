module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.setBrowserSyncConfig({
    files: 'dist/*.css'
  });

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