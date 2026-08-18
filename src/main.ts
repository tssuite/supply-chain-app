// @license
// Copyright (c) 2026 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import mermaid from 'mermaid';

import { exampleMermaid } from './example-chain.ts';
import './style.css';

const render = async (): Promise<void> => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (app === null) {
    return;
  }

  const heading = document.createElement('h1');
  heading.textContent = 'Supply Chain — Mermaid';
  heading.dataset.testid = 'title';

  const source = exampleMermaid();

  mermaid.initialize({ startOnLoad: false });
  const { svg } = await mermaid.render('scGraph', source);

  const diagram = document.createElement('div');
  diagram.dataset.testid = 'diagram';
  diagram.innerHTML = svg;

  app.replaceChildren(heading, diagram);
};

void render();
