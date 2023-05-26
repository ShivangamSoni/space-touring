import 'server-only';

import { DestinationsData } from '@/data/destinations';

export async function getDestination({ slug }: { slug: string }) {
  const destination = DestinationsData.find(
    ({ name }) => name.toLowerCase() === slug.toLowerCase(),
  );
  return destination;
}
