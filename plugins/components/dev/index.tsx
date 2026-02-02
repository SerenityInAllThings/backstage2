import { createDevApp } from '@backstage/dev-utils';
import { componentsPlugin, CatalogV2Page } from '../src/plugin';

createDevApp()
  .registerPlugin(componentsPlugin)
  .addPage({
    element: <CatalogV2Page />,
    title: 'Root Page',
    path: '/components',
  })
  .render();
