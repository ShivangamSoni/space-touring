import { getTechnologies } from '@/app/api/technology/getTechnologies';

import TechnologyCarousel from '@/components/TechnologyCarousel';

export default async function Technology() {
  const technologies = await getTechnologies();

  return <TechnologyCarousel technologies={technologies} />;
}
