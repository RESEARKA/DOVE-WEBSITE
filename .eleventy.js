/**
 * Eleventy configuration for DOVE Website
 * Based on DOVE Website Guidelines v1.3
 */

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  
  // Copy security headers file
  eleventyConfig.addPassthroughCopy("_headers");

  // Add layout aliases for easier referencing - these must be paths relative to the _includes directory
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  // Add a shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add Etherscan shortcode for contract addresses
  eleventyConfig.addShortcode("etherscan", (addr, text) => 
    `<a href="https://basescan.org/address/${addr}" target="_blank" rel="noopener noreferrer">${text || addr}</a>`
  );
  
  // Add secure SVG rendering shortcode
  eleventyConfig.addShortcode("safeSvg", (svgContent) => {
    // Simple sanitization to reduce XSS risk (in production use a proper library)
    if (!svgContent) return '';
    const sanitized = svgContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, 'void:')
      .replace(/on\w+=/gi, 'data-disabled-event=');
    return sanitized;
  });

  // Add filter to format dates
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  });

  // Add a filter to limit array items
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  
  // Add safeUrl filter for URL validation
  eleventyConfig.addFilter("safeUrl", function(url) {
    if (!url) return '#';
    url = url.trim();
    if (url.toLowerCase().startsWith('https://') && url.length < 256) {
      return url;
    }
    return '#';
  });

  // Create collections
  eleventyConfig.addCollection("legalPages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/pages/legal/*.md");
  });

  // Development mode watch targets
  eleventyConfig.addWatchTarget("./src/assets/css/tailwind.css");

  // Configure build
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
