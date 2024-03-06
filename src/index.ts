import { registerPlugin } from '@capacitor/core';

import type { RectangleFinderPlugin } from './definitions';

const RectangleFinder = registerPlugin<RectangleFinderPlugin>(
  'RectangleFinder',
  {
    web: () => import('./web').then(m => new m.RectangleFinderWeb()),
  },
);

export * from './definitions';
export { RectangleFinder };
