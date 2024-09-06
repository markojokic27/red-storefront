'use client';

// External packages
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';

export const LayoutLinks = () => {
  const pathname = usePathname();

  return (
    <div className="mb-1 flex flex-col gap-1 text-right md:mb-4 md:gap-4 md:text-left lg:gap-8">
      <Link
        href="/person-security"
        className={twMerge(
          'w-full hover:cursor-pointer',
          pathname.includes('/person-security') && 'font-black text-blue-700'
        )}
      >
        Personal & security
      </Link>
      <Link
        href="/payment-methods"
        className={twMerge(
          'w-full hover:cursor-pointer',
          pathname.includes('/payment-methods') && 'font-black text-blue-700'
        )}
      >
        Payment method
      </Link>
      <Link
        href="/my-orders"
        className={twMerge(
          'w-full hover:cursor-pointer',
          pathname.includes('/my-orders') && 'font-black text-blue-700'
        )}
      >
        My orders
      </Link>
    </div>
  );
};
