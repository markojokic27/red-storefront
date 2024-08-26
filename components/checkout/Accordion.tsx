'use client';

// External packages
import * as React from 'react';
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
import { RadioButton } from '@/components/RadioButton';
import Link from 'next/link';

export const Accordion = () => {
  const [visibleInput, setVisibleInput] = React.useState('item1');

  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState('');

  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailPattern.test(email) ? 'true' : 'false');
    setVisibleInput(emailPattern.test(email) ? 'item2' : 'item1');
  };
  const handleAddresSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setVisibleInput('item3');
  };
  const handleShippingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setVisibleInput('item4');
  };

  return (
    <>
      <RadixAccordion.Root
        type="single"
        value={visibleInput}
        className="lg:mt-21"
      >
        <RadixAccordion.Item value="item1" className="group w-full border-b">
          <RadixAccordion.Trigger className="trigger h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {validEmail === 'true' ? (
              <div>
                <div className="flex justify-between">
                  <p>1. Email</p>
                  <a
                    className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                    onClick={() => {
                      setVisibleInput('item1');
                      setValidEmail('');
                    }}
                  >
                    Change
                  </a>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Email</p>
                  <p className="">{email}</p>
                </div>
              </div>
            ) : (
              '1. Email'
            )}
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="accordion-content">
            {validEmail !== 'true' && (
              <Form onSubmit={handleEmailSubmit}>
                <Input
                  label="Email"
                  className={`mb-4 ${validEmail === 'false' ? 'border-red-500' : ''}`} //nope
                  inputProps={{
                    value: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                      setValidEmail('');
                    },
                    validationError:
                      email === '' && validEmail === 'false'
                        ? 'You forgot your email'
                        : validEmail === 'false'
                          ? 'Invalid email address'
                          : undefined,
                  }}
                />
                <div className="mb-10 flex items-start gap-2">
                  <Checkbox className="mb-2" />
                  <p className="text-2xs text-gray-400">
                    What to get news and offers? Ok, yes and some discounts. But
                    only if you subscribe.
                  </p>
                </div>
                <Button type="submit" className="mb-8 py-3">
                  Next
                </Button>
              </Form>
            )}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item2" className="group w-full border-b">
          <RadixAccordion.Trigger className="trigger h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {visibleInput === 'item3' || visibleInput === 'item4' ? (
              <div>
                <div className="flex justify-between">
                  <p>2. Shipping Address</p>
                  <a
                    className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                    onClick={() => {
                      setVisibleInput('item2');
                    }}
                  >
                    Change
                  </a>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Name</p>
                  <p className="">Jovana Jerimic</p>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Ship to</p>
                  <p className="">Duvanjs 3, 10000 Zagreb, Croata</p>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Phone</p>
                  <p className="">+385 226 2266</p>
                </div>
              </div>
            ) : (
              '2. Shipping Address'
            )}
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="accordion-content">
            <Form onSubmit={handleAddresSubmit}>
              <Select className="data-[data-trigger=Select]: relative mb-8">
                <AriaButton className="relative flex w-full items-center justify-between border border-grayscale-50 px-4">
                  <SelectValue className="pb-3 pt-5" />
                  <Icon name="chevron" />
                  <label className="text-2xs absolute top-1.5 text-sm text-gray-400">
                    Country
                  </label>
                </AriaButton>
                <Popover className="react-aria-Popover w-full">
                  <ListBox className="w-full bg-white hover:cursor-pointer">
                    <ListBoxItem className="listBoxItem">Croatia</ListBoxItem>
                    <ListBoxItem className="listBoxItem">Slovenia</ListBoxItem>
                    <ListBoxItem className="listBoxItem">Germany</ListBoxItem>
                  </ListBox>
                </Popover>
              </Select>
              <div className="lg:flex lg:gap-12">
                <Input className="mb-8" label="First name" />
                <Input className="mb-8" label="Last name" />
              </div>
              <Input label="Address" className="mb-4" />
              <Input
                label="Apartment, suite, etc. (Optional)"
                className="mb-4"
              />
              <div className="lg:flex lg:gap-12">
                <Input className="mb-8" label="Postal Code" />
                <Input className="mb-8" label="City" />
              </div>
              <Input className="mb-8" label="Phone" />

              <Button type="submit" className="mb-8 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item3" className="group w-full border-b">
          <RadixAccordion.Trigger className="trigger h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {visibleInput === 'item4' ? (
              <div>
                <div className="flex justify-between">
                  <p>3. Shipping Method</p>
                  <a
                    className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                    onClick={() => {
                      setVisibleInput('item3');
                    }}
                  >
                    Change
                  </a>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Shipping</p>
                  <p className="">Stand delivery 3 — 5 days</p>
                </div>
              </div>
            ) : (
              '3. Shipping method'
            )}
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="accordion-content">
            <Form onSubmit={handleShippingSubmit}>
              {/*<RadioButton value="a" />*/}

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
