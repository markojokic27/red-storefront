'use client';

// External packages
import * as RadixAccordion from '@radix-ui/react-accordion';
import {
  Button as AriaButton,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Form,
  Select,
} from 'react-aria-components';

// Components
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Icon } from '@/components/Icon';
import { Checkbox } from '@/components/Checkbox';

export const Accordion = () => {
  return (
    <>
      <RadixAccordion.Root type="multiple" className='lg:mt-21'>
        <RadixAccordion.Item value="item1" className="group w-full border-b">
          <RadixAccordion.Trigger className="trigger h-full w-full py-8 text-left group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            1. Email
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="accordion-content">
            <Input label="Email" className="mb-4 bg-red-700" />
            <div className="mb-10 flex items-start gap-2">
              <Checkbox />
              <p className="text-2xs text-grayscale-400">
                What to get news and offers? Ok, yes and some discounts. But
                only if you subscribe.
              </p>
            </div>
            <Button type="submit" className="mb-8 py-3">
              Next
            </Button>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item2" className="group w-full border-b">
          <RadixAccordion.Trigger className="trigger h-full w-full py-8 text-left group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            2. Shipping Address
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="accordion-content">
            <Form>
              <Select className="data-[data-trigger=Select]: relative mb-8">
                <AriaButton className="relative flex w-full items-center justify-between border border-grayscale-50 px-4">
                  <SelectValue className="pb-3 pt-5" />
                  <Icon name="chevron" />
                  <label className="text-2xs absolute top-1.5 text-sm text-gray-400">
                    Country
                  </label>
                </AriaButton>
                <Popover className="react-aria-Popover w-full bg-red-300">
                  <ListBox className="w-full bg-green-300 hover:cursor-pointer">
                    <ListBoxItem className="p-2 hover:bg-green-400">
                      Croatia
                    </ListBoxItem>
                    <ListBoxItem className="p-2 hover:bg-green-400">
                      Slovenia
                    </ListBoxItem>
                    <ListBoxItem className="p-2 hover:bg-green-400">
                      Germany
                    </ListBoxItem>
                  </ListBox>
                </Popover>
              </Select>
              <div className="lg:flex lg:gap-12">
                <Input className="mb-8" label="First name" />
                <Input className="mb-8" label="Last name" />
              </div>
              <Input label="Address" className="mb-4" />
              <Button type="submit" className="mb-8 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      </RadixAccordion.Root>
    </>
  );
};
