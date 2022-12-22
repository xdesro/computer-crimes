/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ './src/assets/img': 'img' });
  eleventyConfig.addPassthroughCopy({ './src/assets/fonts': 'fonts' });
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
