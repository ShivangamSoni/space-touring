import { redirect } from 'next/navigation';
import Image from 'next/image';

import { Bellefair } from 'next/font/google';
const bellefair = Bellefair({ weight: '400', subsets: ['latin'] });

import { getDestination } from '@/app/api/destination/getDestination';
import { getDestinations } from '@/app/api/destination/getDestinations';

import Link from '@/components/Link';

export default async function Destination({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const destination = await getDestination({ slug });
  if (!destination) {
    redirect('/destination');
  }
  const destinations = await getDestinations();

  return (
    <div className="grid lg:grid-cols-2 gap-10 content-center items-center justify-items-center">
      <Image
        src={destination.image}
        alt=""
        className="w-60 sm:w-72 md:w-80 lg:w-auto aspect-square"
      />

      <div className="grid justify-items-center lg:justify-items-start content-center lg:content-start items-start gap-8 w-full sm:w-10/12 lg:w-3/4">
        <ul className="flex items-center gap-8">
          {destinations.map(({ id, name }) => {
            const isActive = name.toLowerCase() === slug.toLowerCase();
            return (
              <li key={id}>
                <Link
                  href={`/destination/${name.toLowerCase()}`}
                  className={`${isActive ? 'text-white' : 'text-inherit'}`}
                  isActive={isActive}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="grid items-start content-start gap-8 text-center lg:text-left">
          <h3
            className={`${bellefair.className} uppercase text-6xl sm:text-7xl md:text-8xl text-white tracking-widest`}
          >
            {destination.name}
          </h3>
          <p className="lg:text-justify sm:text-lg sm:w-3/4 sm:mx-auto lg:w-full lg:mx-0">
            {destination.description}
          </p>

          <div className="border-t border-t-gray-500 grid sm:grid-cols-2 gap-8 sm:gap-0 lg:gap-4 pt-8">
            <div className="flex flex-col gap-1 uppercase">
              <span className="tracking-wider lg:text-lg">Avg. Distance</span>
              <span
                className={`${bellefair.className} tracking-widest text-2xl lg:text-3xl text-white`}
              >
                {destination.distance}
              </span>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <span className="tracking-wider lg:text-lg">
                Est. Travel Time
              </span>
              <span
                className={`${bellefair.className} tracking-widest text-2xl lg:text-3xl text-white`}
              >
                {destination.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
