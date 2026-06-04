// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, it } from 'vitest';

import { exampleMermaid } from '../src/example-chain.ts';


describe('exampleMermaid', () => {
  const mermaid = exampleMermaid();

  it('produces a mermaid flowchart', () => {
    expect(mermaid).toContain('flowchart');
  });

  it('contains the example nodes', () => {
    expect(mermaid).toContain('price');
    expect(mermaid).toContain('quantity');
    expect(mermaid).toContain('total');
  });

  it('is a non-empty string', () => {
    expect(typeof mermaid).toBe('string');
    expect(mermaid.length).toBeGreaterThan(0);
  });
});
