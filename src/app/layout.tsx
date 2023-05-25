import './globals.css';
import Header from '@/components/Header';

import { Bellefair } from 'next/font/google';

const bellefair = Bellefair({ weight: '400', subsets: ['latin'] });

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
      <body className={`${bellefair.className} bg-primary-blue text-white`}>
        <div className="w-[min(1440px,100%)] min-h-screen grid grid-rows-[auto_1fr] gap-10 py-4 mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
