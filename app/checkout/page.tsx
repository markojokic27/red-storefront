'use client';

// External packages
import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';

// Components
import { Layout } from '@/components/Layout';
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/icons/Icon';
import { OrderCard } from '@/components/OrderCard';
import { Tag } from '@/components/Tag';

// Assets
import ImageOrder from '@/public/assets/images/OrderCard.png';

export default function Page() {
  return (
    <>
      <Layout className="md:px-0 lg:px-0">
        <div className="flex h-16 items-center justify-between text-blue-700 md:hidden">
          <Logo size="sm" />
          <h3 className="text-md font-black italic">Checkout</h3>
        </div>
        <Accordion.Root type="multiple" className="-mx-8">
          <Accordion.Item value="item1">
            <Accordion.Trigger className="trigger h-18 flex w-full items-center justify-between bg-grayscale-50 px-8">
              <p>Order Summary</p>
              <div className="flex gap-4">
                <p>€45</p>
                <Icon name="chevron" className="chevron"></Icon>
              </div>
            </Accordion.Trigger>

            <Accordion.Content className="accordion-content">
              <OrderCard
                name="Fresh Tote"
                originalPrice="€30"
                price="€15"
                color="White"
                quantity={1}
                tag={<Tag>-50%</Tag>}
                image={
                  <Image
                    alt="product image"
                    src={ImageOrder}
                    width={99}
                    height={132}
                  />
                }
              />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Layout>
    </>
  );
}
