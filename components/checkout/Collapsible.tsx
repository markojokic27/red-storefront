'use client';

// External packages
import * as RadixCollapsible from '@radix-ui/react-collapsible';

// Components
import { Icon } from '@/components/Icon';
import { OrderContent } from '@/components/checkout/OrderContent';

// Assets

export const Collapsible = () => {
  return (
    <RadixCollapsible.Root className="mt-21 group lg:hidden">
      <RadixCollapsible.Trigger className="trigger h-18 flex w-full items-center justify-between bg-grayscale-50 px-8">
        <p>Order Summary</p>
        <div className="flex gap-4">
          <p>€45</p>
          <Icon name="chevron" className="chevron"></Icon>
        </div>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="collapsible-content">
        <OrderContent />
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
