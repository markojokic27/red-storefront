'use client';

// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

export default function Page() {
  const [visiblePage, setVisiblePage] = React.useState('personal');
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-21">
        <LayoutRow>
          <LayoutColumn
            span={12}
            lgSpan={3}
            className='pulled-background-account w-full after:absolute after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] lg:after:right-0'
          >
            <h2 className="mb-10 mt-16 text-lg font-black text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
              My account
            </h2>
            <AccountLink
              page="personal"
              setVisiblePage={setVisiblePage}
              visiblePage={visiblePage}
            >
              Personal & security
            </AccountLink>
            <AccountLink
              page="paymant"
              setVisiblePage={setVisiblePage}
              visiblePage={visiblePage}
            >
              Payment method
            </AccountLink>
            <AccountLink
              page="orders"
              className="lg:mb-96"
              setVisiblePage={setVisiblePage}
              visiblePage={visiblePage}
            >
              My orders
            </AccountLink>
            <Button variant="link" className="mb-8 lg:mb-16">
              Log out
            </Button>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={1} lgSpan={8}>
            {visiblePage === 'personal' && (
              <div className='mb-20'>
                <h2 className="mb-10 mt-16 text-lg font-black text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
                  Personal & security
                </h2>
                <p className="text-md">Personal information</p>
                <div className="mb-16 mt-6 flex max-w-150 border p-4">
                  <Icon name="user"></Icon>
                  <div className="ml-8">
                    <p className="text-2xs text-grayscale-400">Name</p>
                    <p>Jovana Jerimic</p>
                  </div>
                  <div className="ml-8">
                    <p className="text-2xs text-grayscale-400">Number</p>
                    <p>-</p>
                  </div>
                  <Button variant="outline" className="ml-auto">
                    Change
                  </Button>
                </div>
                <p className="text-md">Contact</p>
                <div className="mb-2 mt-6 flex max-w-150 border p-4">
                  <Icon name="user"></Icon>
                  <div className="ml-8">
                    <p className="text-2xs text-grayscale-400">Email</p>
                    <p>jovana.jerimic@gmail.com</p>
                  </div>
                </div>
                <span className="text-2xs text-grayscale-400">
                  If you want to change your email please contact us via
                  customer support.
                </span>
                <p className="mb-10 mt-16 text-md">Address</p>
                <Button className="py-4">Add address</Button>
                <p className="mb-6 mt-16 text-md">Change password</p>
                <p className="mb-12 text-grayscale-500 max-w-2xl">
                  Perhaps you've scribbled your password on a scrap of paper or
                  you're the type who likes to change it every now and then to
                  feel safer. Or maybe you had a rough weekend, and well, we
                  know what can happen on weekends ( ͡° ͜ʖ ͡°). No worries, to
                  change your password, we'll send you an email. Just click on
                  the reset button below.
                </p>
                <Button className="py-4">Reset password</Button>
              </div>
            )}
            {visiblePage === 'payment' && <div></div>}
            {visiblePage === 'orders' && <div></div>}
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}

export const AccountLink: React.FC<
  React.ComponentPropsWithoutRef<'p'> & {
    visiblePage: string;
    setVisiblePage: (page: string) => void;
    page: string;
  }
> = ({ visiblePage, setVisiblePage, page, className, children, ...props }) => {
  return (
    <p
      className={twMerge(
        'mb-8 hover:cursor-pointer',
        visiblePage === page && 'font-black text-blue-700',
        className
      )}
      onClick={() => setVisiblePage(page)}
    >
      {children}
    </p>
  );
};
