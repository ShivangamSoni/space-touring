import { getCrewMembers } from '@/app/api/crew/getCrewMembers';

import CrewCarousel from '@/components/CrewCarousel';

export default async function Crew() {
  const crewMembers = await getCrewMembers();

  return <CrewCarousel members={crewMembers} />;
}
