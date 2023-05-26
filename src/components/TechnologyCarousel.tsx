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
    <div className="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      <Image
        src={technology.images.landscape}
        alt=""
        className="lg:hidden w-full"
      />

      <div className="grid items-start lg:grid-cols-[auto_1fr] gap-8 sm:gap-10 lg:gap-16 px-4 sm:px-0">
        <ul className="flex lg:flex-col items-center justify-center gap-4">
          {technologies.map(({ id, name }, idx) => {
            const isActive = id === technologyId;
            return (
              <li key={id}>
                <button
                  className={`outline-none w-12 md:w-16 lg:w-20 aspect-square rounded-full text-xl md:text-2xl lg:text-3xl border border-gray-500 ${
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

        <div className="grid gap-6 sm:gap-8 text-center">
          <h3 className="flex flex-col gap-1 uppercase tracking-widest">
            <span className="text-lg lg:text-xl">The terminology...&nbsp;</span>
            <span
              className={`${bellfair.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white`}
            >
              {technology.name}
            </span>
          </h3>
          <p className="lg:text-justify sm:text-lg tracking-wider sm:w-4/5 mx-auto lg:w-full lg:mx-0">
            {technology.description}
          </p>
        </div>
      </div>

      <Image
        src={technology.images.portrait}
        alt=""
        className="justify-self-end hidden lg:block"
      />
    </div>
  );
}
