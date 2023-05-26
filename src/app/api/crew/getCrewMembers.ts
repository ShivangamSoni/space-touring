import 'server-only';

import { CrewData } from '@/data/crew';

export async function getCrewMembers() {
  return CrewData;
}
