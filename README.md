<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./remark-config.svg" alt="remark-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/remark-config</h1>

<p align="center">
  Shareable Remark AST markdown linting configuration files and rules.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/remark-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/remark-config/ci.yml?style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/remark-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau/remark-config.svg?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/remark-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/remark-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/remark-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue.svg?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Install](#install) — npm, pnpm, yarn, bun
- [Quick Start](#quick-start) — configuration in under a minute

**Configuration Reference**
- [Capabilities & Features](#capabilities--features) — design rationale & defaults
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations
- [Integration Guide](#integration-guide) — setup in popular toolchains

**Operational & Quality**
- [Development & Verification](#development--verification) — running tests & validation
- [Security & Attestation](#security--attestation) — supply chain security & SLSA attestation
- [License](#license) — ISC License

---

## Install

### Package Managers

```bash
# npm
npm install --save-dev @sebastienrousseau/remark-config

# pnpm
pnpm add -D @sebastienrousseau/remark-config

# yarn
yarn add -D @sebastienrousseau/remark-config

# bun
bun add -d @sebastienrousseau/remark-config
```

### Version Matrix

| Tool | Supported Version | Package Version |
|---|---|---|
| Node.js | `>=18.0.0` | `1.0.0` |
| Remark | Latest Stable | `1.0.0` |

---

## Quick Start

### In `package.json`

```json
"remarkConfig": { "plugins": ["@sebastienrousseau/remark-config"] }
```

### In CommonJS Configuration (`.remarkrc.json`)

```js
module.exports = require("@sebastienrousseau/remark-config");
```

### In ES Module Configuration (`.remarkrc.js`)

```js
import config from "@sebastienrousseau/remark-config";
export default config;
```

---

## Capabilities & Features

| Capability | Details |
|---|---|
| **2026 Ready** | Engineered to conform strictly to modern ECMAScript and Remark standards. |
| **Zero Side Effects** | Pure configuration exports with zero unnecessary runtime overhead. |
| **Dual Export** | Native support for both CommonJS (`require`) and ES Modules (`import`). |
| **TypeScript Support** | Includes first-class TypeScript definition files (`index.d.ts`). |

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

---

## Development & Verification

### Local Testing

```bash
# Clone the repository
git clone https://github.com/sebastienrousseau/remark-config.git
cd remark-config

# Run the validation test suite
npm test
```

---

## Security & Attestation

- **SLSA Level 3**: Every package build is signed with keyless provenance via GitHub Actions.
- **Dependency Auditing**: Automated vulnerability scans via `npm audit` and OpenSSF Scorecards.
- **Zero Unpinned Dependencies**: Strict dependency management prevents supply chain vulnerabilities.

---

## License

[ISC License](LICENSE) © [Sebastien Rousseau](https://github.com/sebastienrousseau)
