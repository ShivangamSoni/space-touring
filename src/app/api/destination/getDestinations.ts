import 'server-only';

import { DestinationsData } from '@/data/destinations';

export async function getDestinations() {
  return DestinationsData;
}
