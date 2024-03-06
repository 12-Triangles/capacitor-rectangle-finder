import { WebPlugin } from '@capacitor/core';

import type { RectangleFinderPlugin } from './definitions';

export class RectangleFinderWeb
  extends WebPlugin
  implements RectangleFinderPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
