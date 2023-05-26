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
        desktop: '/assets/destination/background-destination-desktop.jpg',
        tablet: '/assets/destination/background-destination-tablet.jpg',
        mobile: '/assets/destination/background-destination-mobile.jpg',
      }}
    >
      <section className="grid grid-rows-[auto_1fr] py-5 px-32">
        <h2 className="text-white text-4xl uppercase tracking-wider space-x-4">
          <span className="font-semibold text-white text-opacity-50">
            01&nbsp;
          </span>
          <span>Pick Your Destination</span>
        </h2>
        {children}
      </section>
    </Main>
  );
}
