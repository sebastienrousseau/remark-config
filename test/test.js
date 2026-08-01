const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/remark-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert(Array.isArray(cjsConfig.plugins), "Plugins must be an array");
  assert(cjsConfig.plugins.includes("remark-gfm"), "Plugins must include remark-gfm");

  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(esmConfig && typeof esmConfig === "object", "ESM config must be an object");
  assert(Array.isArray(esmConfig.plugins), "Plugins must be an array");

  console.log("✅ remark-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
