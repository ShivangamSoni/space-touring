import { Barlow_Condensed } from 'next/font/google';
const barlow = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Space Touring',
  description: "Let's Goto Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} bg-primary-blue text-primary-violet`}
      >
        <div className="w-[min(1440px,100%)] min-h-screen grid grid-rows-[auto_1fr] gap-10 pb-4 mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
