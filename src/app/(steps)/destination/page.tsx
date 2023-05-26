import { getDestinations } from '@/app/api/destination/getDestinations';
import { redirect } from 'next/navigation';

export default async function Destination() {
  const exploreLink = `/destination/${(
    await getDestinations()
  )[0].name.toLowerCase()}`;
  redirect(exploreLink);
}
