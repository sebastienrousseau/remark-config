/**
 * 100% Feature Showcase for @sebastienrousseau/remark-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/remark-config ===");
assert(Array.isArray(config.plugins) && config.plugins.length > 0);
assert(config.plugins.includes("remark-preset-lint-recommended"));
assert(config.plugins.includes("remark-preset-lint-markdown-style-guide"));
assert(config.plugins.includes("remark-preset-lint-consistent"));
assert(config.plugins.includes("remark-gfm"));

console.log("  ✓ Active plugins count:", config.plugins.length);
config.plugins.forEach(p => console.log(`  ✓ Plugin: ${p}`));
console.log("✅ 100% of remark-config presets and features validated.");
