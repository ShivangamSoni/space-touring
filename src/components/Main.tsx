import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  bg: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export default function Main({
  children,
  bg: { desktop, tablet, mobile },
}: Props) {
  const styles = {
    '--bg-desktop': `url(${desktop})`,
    '--bg-tablet': `url(${tablet})`,
    '--bg-mobile': `url(${mobile})`,
  } as CSSProperties;

  return (
    <main className="grid">
      <div
        style={styles}
        className={`fixed inset-0 w-full h-full -z-10 bg-no-repeat bg-cover bg-[image:var(--bg-mobile)] sm:bg-[image:var(--bg-tablet)] lg:bg-[image:var(--bg-desktop)]`}
      ></div>
      {children}
    </main>
  );
}
