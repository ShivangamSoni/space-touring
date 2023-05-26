import Image from 'next/image';

import { DestinationsData } from '@/data/destinations';

import Link from '@/components/Link';

import { Bellefair } from 'next/font/google';
import { getDestination } from '@/app/api/destination/getDestination';
import { redirect } from 'next/navigation';
const bellefair = Bellefair({ weight: '400', subsets: ['latin'] });

export default async function Destination({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const destination = await getDestination({ slug });
  if (!destination) {
    redirect('/destination');
  }

  return (
    <div className=" grid grid-cols-2 gap-10 content-center items-center justify-items-center">
      <Image src={destination.image} alt="" />

      <div className=" grid content-start items-start gap-8 w-3/4">
        <ul className="flex items-center gap-8 ">
          {DestinationsData.map(({ id, name }) => {
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

        <div className="grid items-start content-start gap-8">
          <h3
            className={`${bellefair.className} uppercase text-8xl text-white tracking-widest`}
          >
            {destination.name}
          </h3>
          <p className="text-justify text-lg">{destination.description}</p>

          <div className="border-t border-t-gray-500 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 uppercase">
              <span className="tracking-wider text-lg">Avg. Distance</span>
              <span
                className={`${bellefair.className} tracking-widest text-3xl text-white`}
              >
                {destination.distance}
              </span>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <span className="tracking-wider text-lg">Est. Travel Time</span>
              <span
                className={`${bellefair.className} tracking-widest text-3xl text-white`}
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
