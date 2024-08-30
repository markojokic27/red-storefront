// External packages
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

// Components
import { Header } from '@/components/Header';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';

export const AccountLayout: React.FC<
  React.ComponentPropsWithoutRef<'div'> & { page?: string }
> = ({ className, children, page, ...rest }) => (
  <div {...rest} className={twMerge('', className)}>
    <Header headerTheme="dark" />
    <Layout className="mt-21">
      <LayoutRow>
        <LayoutColumn
          span={12}
          lgSpan={3}
          className='pulled-background-account w-full before:absolute before:right-0 before:top-0 before:z-[-1] before:block before:h-full before:bg-grayscale-50 before:content-[""] after:absolute after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] lg:after:right-0'
        >
          <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
            My account
          </h2>
          <AccountLink route="person-security" page={page}>
            Personal & security
          </AccountLink>
          <AccountLink route="payment" page={page}>
            Payment method
          </AccountLink>
          <AccountLink route="orders" page={page} className="lg:mb-96">
            My orders
          </AccountLink>
          <Button variant="link" className="mb-8 lg:mb-16">
            Log out
          </Button>
        </LayoutColumn>
        <LayoutColumn span={12} lgOffset={1} lgSpan={8}>
          {children}
        </LayoutColumn>
      </LayoutRow>
    </Layout>
  </div>
);

export const AccountLink: React.FC<
  React.ComponentPropsWithoutRef<'a'> & {
    page?: string;
    route?: string;
  }
> = ({ page, route, className, children, ...rest }) => {
  return (
    <Link
      {...rest}
      href={`/account/${route}`}
      className={twMerge(
        'mb-8 hover:cursor-pointer',
        route === page && 'font-black text-blue-700',
        className
      )}
    >
      {children}
    </Link>
  );
};
