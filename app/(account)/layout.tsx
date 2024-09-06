// Components
import { Header } from '@/components/Header';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';
import { LayoutLinks } from '@/components/account/LayoutLinks';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerTheme="dark" />
      <Layout className="mt:18 md:mt-21">
        <LayoutRow className="relative">
          <LayoutColumn
            span={12}
            lgSpan={3}
            className='pulled-background-account md:after top-18 sticky left-0 z-10 flex lg:h-screen w-full before:absolute before:right-0 before:top-0 before:z-[-1] before:block before:h-full before:bg-grayscale-50 before:content-[""] after:absolute after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] md:top-21 lg:after:right-0 '
          >
            <div className="flex w-full flex-col justify-between">
              <div>
                <h2 className="mt-4 text-right text-lg font-black italic text-blue-700 md:mb-10 md:text-left lg:mb-16 lg:mt-24 lg:text-xl">
                  My account
                </h2>
                <LayoutLinks />
              </div>
              <Button variant="link" className="ml-auto md:ml-0 mb-4 lg:mb-36">
                Log out
              </Button>
            </div>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={1} lgSpan={8}>
            {children}
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
