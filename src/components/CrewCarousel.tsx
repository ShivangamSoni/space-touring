'use client';
import { useState } from 'react';

import Image from 'next/image';
import { Bellefair } from 'next/font/google';
const bellfair = Bellefair({ weight: '400', subsets: ['latin'] });

import { Crew } from '@/app/api/crew/crew';

export default function CrewCarousel({ members }: { members: Crew[] }) {
  const [crewId, setCrewId] = useState(members[0].id);
  const crewMember = members.find(({ id }) => id === crewId)!;

  return (
    <div className="grid lg:grid-cols-2 sm:gap-4 lg:gap-10">
      <div className="order-last sm:order-first grid grid-rows-[1fr_auto] gap-8 lg:gap-0 py-8 lg:py-16">
        <div className="order-last sm:order-first self-center grid gap-4 sm:gap-8">
          <h3
            className={`${bellfair.className} uppercase flex flex-col gap-1 tracking-widest text-center lg:text-left`}
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-opacity-50">
              {crewMember.role}&nbsp;
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              {crewMember.name}
            </span>
          </h3>
          <p className="text-center lg:text-justify sm:text-lg tracking-wider sm:w-4/6 mx-auto lg:mx-0">
            {crewMember.bio}
          </p>
        </div>

        <ul className="flex items-center justify-center lg:justify-start gap-4">
          {members.map(({ id, name }) => (
            <li key={id}>
              <button
                className={`outline-none border-none w-4 lg:w-5 aspect-square rounded-full bg-white ${
                  id === crewId
                    ? 'bg-opacity-100'
                    : 'bg-opacity-20 hover:bg-opacity-50 focus-visible:bg-opacity-50'
                }`}
                onClick={() => setCrewId(id)}
              >
                <span className="sr-only">
                  View Crew Member:
                  {name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={crewMember.image}
        alt=""
        className="h-72 sm:h-auto object-contain sm:object-none border-b-2 border-gray-500 sm:border-b-0 justify-self-center lg:justify-self-auto"
      />
    </div>
  );
}
