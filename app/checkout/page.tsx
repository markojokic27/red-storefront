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
import { EmailInput } from '@/components/checkout/EmailInput';

// Assets
import ImageOrder from '@/public/assets/images/OrderCard.png';

export default function Page() {
  return (
    <>
      <Layout className="md:hidden md:px-0 lg:px-0">
        <div className="flex h-16 items-center justify-between text-blue-700">
          <Logo size="sm" />
          <h3 className="text-md font-black italic">Checkout</h3>
        </div>
        <Accordion.Root type="multiple" className="-mx-8 mb-8">
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
      <Layout className="flex md:gap-12 md:pr-0 lg:pr-0 xl:gap-20">
        <div className="h-screen w-full  md:w-1/2 md:max-w-xl">
          <div className="mb-10 hidden w-full py-6 text-blue-700 md:block">
            <Logo />
          </div>
          <Accordion.Root type="multiple" className="">
            <EmailInput/>
            <Accordion.Item
              value="item2"
              className="h-21 w-full border-t"
            >
              <Accordion.Trigger className="">cccc</Accordion.Trigger>

              <Accordion.Content className="accordion-content">dddd</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className="hidden w-1/2 md:block">
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
        </div>
      </Layout>
    </>
  );
}
