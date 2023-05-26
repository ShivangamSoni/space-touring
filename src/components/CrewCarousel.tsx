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
    <div className="grid grid-cols-2 gap-10">
      <div className="grid grid-rows-[1fr_auto] py-16">
        <div className="self-center grid gap-8">
          <h3
            className={`${bellfair.className} uppercase flex flex-col gap-1 tracking-widest`}
          >
            <span className="text-4xl text-white text-opacity-50">
              {crewMember.role}&nbsp;
            </span>
            <span className="text-5xl text-white">{crewMember.name}</span>
          </h3>
          <p className="text-justify text-lg tracking-wider w-4/6">
            {crewMember.bio}
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {members.map(({ id, name }) => (
            <li key={id}>
              <button
                className={`outline-none border-none w-5 aspect-square rounded-full bg-white ${
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
      <Image src={crewMember.image} alt="" />
    </div>
  );
}
