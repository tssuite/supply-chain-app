// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { NodeBluePrint, Scm, Scope, ScopeBluePrint } from '@tssuite/supply-chain';


/**
 * Builds a small example supply chain and returns its Mermaid representation.
 *
 * The chain models a tiny shop: `total = price * quantity`. The returned
 * string is valid Mermaid `flowchart` syntax produced by the library's
 * `scope.mermaid()` and can be rendered with the `mermaid` package.
 */
export const exampleMermaid = (): string => {
  const scm = new Scm({ isTest: true });
  const root = Scope.root({ key: 'example', scm });

  const shop = new ScopeBluePrint({ key: 'shop' }).instantiate({ scope: root });

  new NodeBluePrint<number>({
    key: 'price',
    initialProduct: 10,
    suppliers: [],
  }).instantiate({ scope: shop });

  new NodeBluePrint<number>({
    key: 'quantity',
    initialProduct: 3,
    suppliers: [],
  }).instantiate({ scope: shop });

  new NodeBluePrint<number>({
    key: 'total',
    initialProduct: 0,
    suppliers: ['price', 'quantity'],
    produce: (components) =>
      (components[0] as number) * (components[1] as number),
  }).instantiate({ scope: shop });

  scm.flush();

  return shop.mermaid();
};
