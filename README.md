<!--
@license
Copyright (c) 2026 tssuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @tssuite/supply-chain-app

A browser demo for [`@tssuite/supply-chain`](../supply-chain). It builds a small
example supply chain (`total = price × quantity`) and visualizes it as a
**Mermaid** diagram in the browser.

It is derived from
[`@tssuite/template-project-app`](https://github.com/tssuite/template-project-app)
and therefore ships with Vite, Vitest unit tests, and Playwright e2e tests with
screenshot snapshots in `test/golden/snapshots`.

## How it works

- `src/example-chain.ts` — `exampleMermaid()` builds the supply chain with the
  library (`Scm`, `Scope`, `NodeBluePrint`) and returns `scope.mermaid()` — the
  Mermaid `flowchart` text. Pure and unit-tested.
- `src/main.ts` — renders that text to SVG via the `mermaid` package and injects
  it into `#app`. Verified by the Playwright e2e test.

## Getting started

```bash
# Build the library first so the link target has a fresh dist:
( cd ../supply-chain && pnpm install && pnpm build )

pnpm install
pnpm exec playwright install chromium   # one-time
pnpm dev          # open the app with a live Mermaid diagram
pnpm test:unit    # vitest unit tests + coverage + lint
pnpm test:e2e     # playwright e2e (renders + screenshots the diagram)
pnpm build        # type-check + production build
```

The library is linked via `@tssuite/supply-chain": "link:../supply-chain"`.
