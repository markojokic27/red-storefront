'use client';

// External packages
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';

export const LayoutLinks: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  ...rest
}) => {
  let active = usePathname();
  return (
    <div
      {...rest}
      className="mb-1 flex flex-col gap-1 md:mb-4 md:gap-4 lg:mb-80 lg:gap-8 text-right md:text-left"
    >
      <AccountLink route="person-security" active={active ?? ''}>
        Personal & security
      </AccountLink>
      <AccountLink route="payment-methods" active={active ?? ''}>
        Payment method
      </AccountLink>
      <AccountLink route="my-orders" active={active ?? ''}>
        My orders
      </AccountLink>
    </div>
  );
};

export const AccountLink: React.FC<
  React.ComponentPropsWithoutRef<'a'> & {
    active?: string;
    route: string;
    setActive?: React.Dispatch<React.SetStateAction<string>>;
  }
> = ({ active, route, className, setActive, children, ...rest }) => {
  return (
    <Link
      {...rest}
      href={`/${route}`}
      className={twMerge(
        'w-full hover:cursor-pointer',
        active?.includes(route) && 'font-black text-blue-700',
        className
      )}
    >
      {children}
    </Link>
  );
};
