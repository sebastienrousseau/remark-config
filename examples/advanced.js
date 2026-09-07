/**
 * Advanced Remark plugin extension
 */
const base = require("../index.cjs");
const custom = { ...base, plugins: [...base.plugins, "remark-toc"] };
console.log("Extended plugins count:", custom.plugins.length);
