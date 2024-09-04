// admin/webpack.config.js
"use strict";

const path = require("path");

module.exports = (config) => {
  // Remove the default file-loader rule for SVGs
  const svgRuleIndex = config.module.rules.findIndex((rule) => {
    return rule.test && rule.test.test(".svg");
  });

  if (svgRuleIndex !== -1) {
    config.module.rules.splice(svgRuleIndex, 1);
  }

  // Add custom rule for handling SVGs as React components
  config.module.rules.push({
    test: /\.svg$/,
    use: ["url-loader"],
    include: path.resolve(__dirname, "../extensions"),
  });

  return config;
};
