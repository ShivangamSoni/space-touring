import 'server-only';

import { TechnologyData } from '@/data/technology';

export async function getTechnologies() {
  return TechnologyData;
}
