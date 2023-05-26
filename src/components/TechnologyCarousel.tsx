'use client';
import { useState } from 'react';

import Image from 'next/image';
import { Bellefair } from 'next/font/google';
const bellfair = Bellefair({ weight: '400', subsets: ['latin'] });

import { Technology } from '@/app/api/technology/technology';

export default function TechnologyCarousel({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [technologyId, setTechnologyId] = useState(technologies[0].id);
  const technology = technologies.find(({ id }) => id === technologyId)!;

  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="grid items-start grid-cols-[auto_1fr] gap-16">
        <ul className="grid gap-4">
          {technologies.map(({ id, name }, idx) => {
            const isActive = id === technologyId;
            return (
              <li key={id}>
                <button
                  className={`outline-none w-20 aspect-square rounded-full text-3xl border border-gray-500 ${
                    isActive
                      ? 'bg-white text-primary-blue border-white'
                      : 'bg-transparent text-white hover:border-white focus-visible:border-white'
                  }`}
                  onClick={() => setTechnologyId(id)}
                >
                  {idx + 1}
                  <span className="sr-only">View Technology: {name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="grid gap-8">
          <h3 className="flex flex-col gap-1 uppercase tracking-widest">
            <span className="text-xl">The terminology...&nbsp;</span>
            <span className={`${bellfair.className} text-5xl text-white`}>
              {technology.name}
            </span>
          </h3>
          <p className="text-justify text-lg tracking-wider">
            {technology.description}
          </p>
        </div>
      </div>

      <Image
        src={technology.images.portrait}
        alt=""
        className="justify-self-end"
      />
    </div>
  );
}
