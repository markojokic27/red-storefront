// External packages
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { headers } from 'next/headers';

// Components
import { Header } from '@/components/Header';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';

export default function layout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const active = headersList.get('referer');
  console.log(headersList.get('referer'));
  return (
    <div>
      <Header headerTheme="dark" />
      <Layout className="mt-21">
        <LayoutRow>
          <LayoutColumn
            span={12}
            lgSpan={3}
            className='pulled-background-account md:after h-fit w-full before:absolute before:right-0 before:top-0 before:z-[-1] before:block before:h-full before:bg-grayscale-50 before:content-[""] after:absolute after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] lg:after:right-0'
          >
            <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
              My account
            </h2>
            <div className="mb-8 flex flex-col gap-8 lg:mb-80">
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
}

export const AccountLink: React.FC<
  React.ComponentPropsWithoutRef<'a'> & {
    active?: string;
    route?: string;
  }
> = ({ active, route, className, children, ...rest }) => {
  return (
    <Link
      {...rest}
      href={`/${route}`}
      className={twMerge(
        'w-full hover:cursor-pointer',
        active === route && 'font-black text-blue-700',
        className
      )}
    >
      {children}
    </Link>
  );
};
