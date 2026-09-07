# `@sebastienrousseau/remark-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/remark-config`.

---

## Description
Shareable Remark lint presets enforcing markdown grammar, syntax, and formatting rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/remark-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Recommended Linting
- **Description**: Includes remark-preset-lint-recommended diagnostic rules
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Style Guide Compliance
- **Description**: Includes remark-preset-lint-markdown-style-guide rules
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Consistency Engine
- **Description**: Includes remark-preset-lint-consistent marker enforcement
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. GitHub Flavored Markdown
- **Description**: Includes remark-gfm parser support
- **Scope**: Production & Development
- **Status**: Stable & Active

