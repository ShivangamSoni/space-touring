'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '@/assets/shared/logo.svg';

import Link from './Link';

import { Barlow_Condensed } from 'next/font/google';
const barlowCondensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const SITE_LINKS = [
  {
    id: crypto.randomUUID(),
    label: 'Home',
    href: '/',
  },
  {
    id: crypto.randomUUID(),
    label: 'Destination',
    href: '/destination',
  },
  {
    id: crypto.randomUUID(),
    label: 'Crew',
    href: '/crew',
  },
  {
    id: crypto.randomUUID(),
    label: 'Technology',
    href: '/technology',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${barlowCondensed.className} flex items-center justify-between`}
    >
      <h1>
        <Image src={Logo} alt="" />
        <span className="sr-only">Space Touring</span>
      </h1>

      <div className="h-[1px] bg-gray-500 flex-1 translate-x-16"></div>

      <nav className="flex-1 pl-28 bg-white bg-opacity-5 backdrop:blur-md">
        <ul className="flex items-center justify-start gap-12">
          {SITE_LINKS.map(({ id, label, href }, i) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <li key={id}>
                <Link href={href} isActive={isActive}>
                  <span className="font-bold">
                    {i.toString().padStart(2, '0')}
                  </span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
