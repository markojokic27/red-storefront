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
  SelectProps,
  RadioGroup,
  FieldError,
} from 'react-aria-components';
import Image from 'next/image';

// Components
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Icon } from '@/components/Icon';
import { Checkbox } from '@/components/Checkbox';
import { RadioButton, RadioButtonVissualy } from '@/components/RadioButton';

// Assets
import ImagePayment from '@/public/assets/icons/Pay-pal.svg';

export const Accordion = () => {
  const [state, setState] = React.useState('item1');
  return (
    <>
      <RadixAccordion.Root type="single" value={state} className="lg:mt-21">
        <RadixAccordion.Item value="item1" className="group w-full border-b">
          <RadixAccordion.Header className="h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {state !== 'item1' ? (
              <div>
                <div className="flex justify-between">
                  <p>1. Email</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                      onClick={() => {
                        setState('item1');
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Email</p>
                  <p className="">jovana.jerimic@gmail.com</p>
                </div>
              </div>
            ) : (
              <p>1. Email</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content">
            {state === 'item1' && (
              <Form onSubmit={() => setState('item2')}>
                <Input
                  isRequired
                  inputProps={{
                    type: 'email',
                    validationError: 'Email is required',
                  }}
                  className="mb-8"
                  label="Email"
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
          <RadixAccordion.Header className="h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {state !== 'item1' && state !== 'item2' ? (
              <div>
                <div className="flex justify-between">
                  <p>2. Shipping Address</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                      onClick={() => {
                        setState('item2');
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
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
              <p>2. Shipping Address</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content">
            <Form onSubmit={() => setState('item3')}>
              <SelectCountry />
              <div className="lg:flex lg:gap-12">
                <Input
                  isRequired
                  inputProps={{
                    type: 'text',
                    validationError: 'First name is required',
                  }}
                  className="mb-8"
                  label="First name"
                />
                <Input
                  isRequired
                  inputProps={{
                    type: 'text',
                    validationError: 'Last name is required',
                  }}
                  className="mb-8"
                  label="Last name"
                />
              </div>
              <Input
                isRequired
                inputProps={{
                  type: 'text',
                  validationError: 'Address is required',
                }}
                label="Address"
                className="mb-8"
              />
              <Input
                label="Apartment, suite, etc. (Optional)"
                className="mb-8"
              />
              <div className="lg:flex lg:gap-12">
                <Input
                  isRequired
                  inputProps={{
                    type: 'text',
                    validationError: 'Postal Code is required',
                  }}
                  className="mb-8"
                  label="Postal Code"
                />
                <Input
                  isRequired
                  inputProps={{
                    type: 'text',
                    validationError: 'City is required',
                  }}
                  className="mb-8"
                  label="City"
                />
              </div>
              <Input
                isRequired
                inputProps={{
                  type: 'text',
                  validationError: 'Phone is required',
                }}
                className="mb-8"
                label="Phone"
              />

              <Button type="submit" className="mb-8 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item3" className="group w-full border-b">
          <RadixAccordion.Header className="h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {state === 'item4' || state === 'finish' ? (
              <div>
                <div className="flex justify-between">
                  <p>3. Shipping Method</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="m-0 h-auto border-0 bg-transparent p-0 font-normal not-italic text-black underline underline-offset-4 hover:cursor-pointer hover:bg-transparent focus:outline-none disabled:bg-transparent disabled:text-blue-100"
                      onClick={() => {
                        setState('item3');
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Shipping</p>
                  <p className="">Stand delivery 3 — 5 days</p>
                </div>
              </div>
            ) : (
              <p>3. Shipping method</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content">
            <Form onSubmit={() => setState('item4')}>
              <RadioGroup
                isRequired
                aria-label="Shipping options"
                className="flex flex-col gap-2"
              >
                <RadioButton
                  value="€5"
                  labelLeft={<p>Stand delivery 3 — 5 days</p>}
                  labelRight={<p>€5</p>}
                />
                <RadioButton
                  value="€10"
                  labelLeft={<p>Fast delivery 1 — 2 days</p>}
                  labelRight={<p>€10</p>}
                />
              </RadioGroup>

              <Button type="submit" className="mb-8 mt-10 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item4" className="group w-full">
          <RadixAccordion.Header className="h-full w-full py-8 text-left hover:cursor-default group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
            {state === 'item4' ? (
              <p className="color-blue-700 font-black">4. Paymant</p>
            ) : (
              <p>4. Payment</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content">
            <RadixAccordion.Root
              type="single"
              collapsible
              className="group w-full"
            >
              <RadioGroup
                aria-label="Shipping options"
                className="flex flex-col gap-2"
              >
                <RadixAccordion.Item value="item41" className="mb-2">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger w-full">
                      <RadioButtonVissualy
                        labelLeft={<p>Card</p>}
                        labelRight={
                          <Image src={ImagePayment} alt="PayPal icon" />
                        }
                      />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          setState('finish');
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item42" className="mb-2">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger w-full">
                      <RadioButtonVissualy
                        labelLeft={<p>Google Pay</p>}
                        labelRight={
                          <Image src={ImagePayment} alt="PayPal icon" />
                        }
                      />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          setState('finish');
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item43" className="mb-2">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger w-full">
                      <RadioButtonVissualy
                        labelLeft={<p>Apple Pay</p>}
                        labelRight={
                          <Image src={ImagePayment} alt="PayPal icon" />
                        }
                      />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          setState('finish');
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item44">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger w-full">
                      <RadioButtonVissualy
                        labelLeft={<p>Pay Pal</p>}
                        labelRight={
                          <Image src={ImagePayment} alt="PayPal icon" />
                        }
                      />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          setState('finish');
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
              </RadioGroup>
            </RadixAccordion.Root>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      </RadixAccordion.Root>
      <Button
        className="mb-24 mt-10 w-full py-4"
        isVisuallyDisabled={state === 'finish' ? false : true}
      >
        Place an order
      </Button>
    </>
  );
};

export const SelectCountry: React.FC<
  SelectProps<object> & React.ComponentPropsWithoutRef<'div'>
> = ({ ...rest }) => {
  return (
    <Select
      {...rest}
      aria-label="Country"
      className="group relative mb-8 outline-none focus:outline-none active:outline-none"
    >
      <AriaButton className="relative flex w-full items-center justify-between border border-grayscale-50 px-4 hover:border-blue-700 group-data-[invalid]:border-red-700">
        <SelectValue className="pb-3 pt-5" />
        <Icon name="chevron" />
        <label className="absolute top-1.5 text-2xs text-sm text-gray-400">
          Country
        </label>
      </AriaButton>
      <Popover className="react-aria-Popover w-full border">
        <ListBox className="w-full bg-white hover:cursor-pointer">
          <ListBoxItem className="listBoxItem">Croatia</ListBoxItem>
          <ListBoxItem className="listBoxItem">Slovenia</ListBoxItem>
          <ListBoxItem className="listBoxItem">Germany</ListBoxItem>
        </ListBox>
      </Popover>

      <FieldError className="absolute hidden text-2xs text-red-500 group-data-[invalid=true]:block">
        Country is required
      </FieldError>
    </Select>
  );
};
