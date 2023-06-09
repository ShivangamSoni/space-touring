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
        desktop: '/assets/crew/background-crew-desktop.jpg',
        tablet: '/assets/crew/background-crew-tablet.jpg',
        mobile: '/assets/crew/background-crew-mobile.jpg',
      }}
    >
      <section className="grid grid-rows-[auto_1fr] py-5 px-6 sm:px-8 lg:px-32">
        <h2 className="text-white text-center sm:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider space-x-4 mb-10">
          <span className="font-semibold text-white text-opacity-50">
            02&nbsp;
          </span>
          <span>Meet Your crew</span>
        </h2>
        {children}
      </section>
    </Main>
  );
}
