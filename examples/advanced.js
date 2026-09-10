// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced Remark plugin extension
 */
const base = require("../index.cjs");
const custom = { ...base, plugins: [...base.plugins, "remark-toc"] };
console.log("Extended plugins count:", custom.plugins.length);
