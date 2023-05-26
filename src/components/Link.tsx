import { ComponentProps } from 'react';
import NextLink from 'next/link';

interface Props extends ComponentProps<typeof NextLink> {
  isActive: boolean;
  variant?: 'standard' | 'nav';
}

export default function Link({
  className,
  children,
  isActive,
  variant = 'standard',
  ...props
}: Props) {
  return (
    <NextLink
      className={`lg:text-xl flex items-center tracking-widest gap-2 py-4 sm:py-6 uppercase outline-none transition-all ${
        isActive
          ? 'border-current hover:border-current hover:border-opacity-100 focus-visible:border-current focus-visible:border-opacity-100'
          : 'border-transparent hover:border-slate-400 hover:border-opacity-50 focus-visible:border-slate-400 focus-visible:border-opacity-50'
      } ${
        variant === 'nav'
          ? 'justify-start sm:justify-center border-r-8 sm:border-b-2 sm:border-r-0'
          : 'justify-center border-b-2'
      } ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
}
