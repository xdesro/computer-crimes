/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ './src/assets/img': 'img' });
  eleventyConfig.addPassthroughCopy({ './src/assets/fonts': 'fonts' });

  eleventyConfig.addFilter('formatDate', (dateStr) => {
    const date = new Date(dateStr);
    const timezoneDiff = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.valueOf() + timezoneDiff);
    return adjustedDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  });
  
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
