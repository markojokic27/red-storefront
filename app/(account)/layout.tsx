// Components
import { Header } from '@/components/Header';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';
import { LayoutLinks } from '@/components/account/LayoutLinks';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerTheme="dark" />
      <Layout className="mt-21">
        <LayoutRow className="relative">
          <LayoutColumn
            span={12}
            lgSpan={3}
            className='pulled-background-account md:after sticky left-0 top-21 z-10 h-fit w-full before:absolute before:right-0 before:top-0 before:z-[-1] before:block before:h-full before:bg-grayscale-50 before:content-[""] after:absolute after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] lg:after:right-0'
          >
            <h2 className="mt-4 text-lg font-black italic text-blue-700 md:mb-10 lg:mb-16 lg:mt-24 lg:text-xl">
              My account
            </h2>
            <LayoutLinks />
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
