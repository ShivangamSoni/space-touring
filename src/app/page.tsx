import Link from 'next/link';

import Main from '@/components/Main';

import { Bellefair } from 'next/font/google';
const bellefair = Bellefair({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <Main
      bg={{
        desktop: '/assets/home/background-home-desktop.jpg',
        tablet: '/assets/home/background-home-tablet.jpg',
        mobile: '/assets/home/background-home-mobile.jpg',
      }}
    >
      <section className="grid grid-cols-2 items-end pt-40 pb-48 px-32">
        <div className="w-[min(450px,100%)] tracking-wider">
          <h2 className="flex flex-col uppercase gap-10 mb-10">
            <span className="text-4xl font-light tracking-widest">
              So, You want to travel to
            </span>
            <span className={`${bellefair.className} text-9xl text-white`}>
              Space
            </span>
          </h2>
          <p className="text-justify text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="justify-self-end">
          <Link
            href={'/destination'}
            className={`${bellefair.className} uppercase text-4xl outline-none border-none flex items-center justify-center bg-white text-primary-blue w-64 aspect-square rounded-full relative after:content-[""] after:absolute after:-inset-20 after:rounded-full after:bg-white after:bg-opacity-20 after:backdrop-blur-sm after:-z-10 after:scale-0 after:transition-transform after:duration-500 hover:after:scale-100`}
          >
            Explore
          </Link>
        </div>
      </section>
    </Main>
  );
}
