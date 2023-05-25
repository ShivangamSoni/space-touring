import './globals.css';
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
      <body
        className={`${bellefair.className} bg-primary-blue text-white grid grid-rows-[auto_1fr] gap-10 p-4 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
