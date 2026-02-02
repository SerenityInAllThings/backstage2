import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const componentsPlugin = createPlugin({
  id: 'components',
  routes: {
    root: rootRouteRef,
  },
});

export const CatalogV2Page = componentsPlugin.provide(
  createRoutableExtension({
    name: 'CatalogV2Page',
    component: () =>
      import('./pages/CatalogV2Page').then(m => m.CatalogV2Page),
    mountPoint: rootRouteRef,
  }),
);
