'use client';

// External packages
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import * as React from 'react';

export const LayoutLinks: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  ...rest
}) => {
  const [active, setActive] = React.useState('person-security');
  return (
    <div {...rest} className="mb-1 md:mb-4 flex flex-col gap-1 md:gap-4  lg:gap-8 lg:mb-80">
      <AccountLink
        route="person-security"
        active={active ?? ''}
        setActive={setActive}
      >
        Personal & security
      </AccountLink>
      <AccountLink
        route="payment-methods"
        active={active ?? ''}
        setActive={setActive}
      >
        Payment method
      </AccountLink>
      <AccountLink
        route="my-orders"
        active={active ?? ''}
        setActive={setActive}
      >
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
        active === route && 'font-black text-blue-700',
        className
      )}
      onClick={() => setActive && setActive(route)}
    >
      {children}
    </Link>
  );
};
