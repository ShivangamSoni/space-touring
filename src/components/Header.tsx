'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '@/assets/shared/logo.svg';
import Hamburger from '@/assets/shared/icon-hamburger.svg';
import Close from '@/assets/shared/icon-close.svg';

import Link from './Link';
import { useState } from 'react';

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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between gap-8 lg:gap-0 text-white pr-4 pl-4 sm:pr-0 pt-4 sm:pt-0">
      <h1>
        <Image src={Logo} alt="" />
        <span className="sr-only">Space Touring</span>
      </h1>

      <button
        className="sm:hidden z-20"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? (
          <>
            <Image src={Close} alt="" />
            <span className="sr-only">Close Menu</span>
          </>
        ) : (
          <>
            <Image src={Hamburger} alt="" />
            <span className="sr-only">Open Menu</span>
          </>
        )}
      </button>

      <div className="hidden lg:block h-[1px] bg-gray-500 flex-1 translate-x-16 z-10"></div>

      <nav
        className={`fixed top-0 bottom-0 right-0 z-10 w-9/12 sm:static sm:w-auto lg:flex-1 pl-8 sm:px-8 lg:pl-28 bg-white bg-opacity-5 backdrop-blur-2xl transition-transform ${
          showMenu ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        }`}
      >
        <ul className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-8 lg:gap-12 py-24 sm:py-0">
          {SITE_LINKS.map(({ id, label, href }, i) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <li key={id}>
                <Link
                  onClick={() => setShowMenu(false)}
                  href={href}
                  isActive={isActive}
                  variant="nav"
                >
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
