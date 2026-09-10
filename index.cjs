// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Modern Remark CommonJS Configuration
 */
module.exports = {
  plugins: [
    "remark-preset-lint-recommended",
    "remark-preset-lint-markdown-style-guide",
    "remark-preset-lint-consistent",
    "remark-gfm",
  ],
};
