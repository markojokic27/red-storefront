// External packages
import * as React from 'react';

// Components
import { Layout, LayoutColumn, LayoutRow } from '@/components/Layout';
import { Logo } from '@/components/Logo';
import { Accordion } from '@/components/checkout/Accordion';
import { Collapsible } from '@/components/checkout/Collapsible';
import { OrderContent } from '@/components/checkout/OrderContent';

export default function Page() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 mb-10 w-full py-6 text-blue-700">
        <Layout className='max-w-full'>
          <LayoutRow>
            <LayoutColumn>
              <div className="flex items-center justify-between">
                <Logo />
                <h3 className="text-md font-black italic lg:hidden">
                  Checkout
                </h3>
              </div>
            </LayoutColumn>
          </LayoutRow>
        </Layout>
      </div>
      <Collapsible />
      <Layout>
        <LayoutRow>
          <LayoutColumn lgSpan={6}>
            <Accordion />
          </LayoutColumn>
          <LayoutColumn lgSpan={5} lgOffset={1} className="hidden lg:block">
            <div className='pulled-background w-full  after:absolute after:left-0 after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""] lg:pb-64 lg:pt-32'>
              <OrderContent />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
