import Main from '@/components/Main';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode;
  params: any;
}) {
  return (
    <Main
      bg={{
        desktop: '/assets/technology/background-technology-desktop.jpg',
        tablet: '/assets/technology/background-technology-tablet.jpg',
        mobile: '/assets/technology/background-technology-mobile.jpg',
      }}
    >
      <section className="grid grid-rows-[auto_1fr] py-5 lg:pl-32">
        <h2 className="text-white text-3xl lg:text-4xl uppercase tracking-wider space-x-4 mb-10 pl-8 lg:pl-0">
          <span className="font-semibold text-white text-opacity-50">
            03&nbsp;
          </span>
          <span>Space Launch 101</span>
        </h2>
        {children}
      </section>
    </Main>
  );
}
