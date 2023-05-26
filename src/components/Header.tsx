'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '@/assets/shared/logo.svg';

import Link from './Link';

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
    <header className="flex items-center justify-between gap-8 lg:gap-0 text-white pl-4">
      <h1>
        <Image src={Logo} alt="" />
        <span className="sr-only">Space Touring</span>
      </h1>

      <div className="hidden lg:block h-[1px] bg-gray-500 flex-1 translate-x-16 z-10"></div>

      <nav className="lg:flex-1 px-8 lg:pl-28 bg-white bg-opacity-5 backdrop-blur-md">
        <ul className="flex items-center justify-start gap-8 lg:gap-12">
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
