import { ComponentProps } from 'react';
import NextLink from 'next/link';

interface Props extends ComponentProps<typeof NextLink> {
  isActive: boolean;
}

export default function Link({
  className,
  children,
  isActive,
  ...props
}: Props) {
  return (
    <NextLink
      className={`flex items-center justify-center tracking-widest gap-2 py-4 uppercase outline-none border-b-2 transition-all hover:border-slate-400 hover:border-opacity-50 focus-visible:border-slate-400 focus-visible:border-opacity-50 ${
        isActive
          ? 'border-current hover:border-current hover:border-opacity-100 focus-visible:border-current focus-visible:border-opacity-100'
          : 'border-transparent'
      }`}
      {...props}
    >
      {children}
    </NextLink>
  );
}
