// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { expect, test } from '@playwright/test';

test.describe('supply-chain-app', () => {
  test('renders the supply chain as a mermaid diagram', async ({ page }) => {
    await page.goto('/');

    // The title is shown.
    await expect(page.getByTestId('title')).toHaveText(
      'Supply Chain — Mermaid',
    );

    // Mermaid renders the chain into an <svg> inside the diagram container.
    const svg = page.getByTestId('diagram').locator('svg');
    await expect(svg).toBeVisible();

    // The rendered diagram contains the example node labels.
    await expect(page.getByTestId('diagram')).toContainText('price');
    await expect(page.getByTestId('diagram')).toContainText('total');

    // Visual snapshot of the rendered diagram (stored under
    // test/golden/snapshots; reviewed via git diff of the committed PNG).
    await expect(page).toHaveScreenshot('supply-chain.png', { fullPage: true });
  });
});
