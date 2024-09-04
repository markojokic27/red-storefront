'use client';

// External packages
import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import Image from 'next/image';

// Components
import { Dialog } from '@/components/account/Dialog';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

// Utilities
import { getButtonClassNames } from '@/utils/getButtonClassNames';

// Assets
import ImageOrder from '@/public/assets/images/MyOrder.png';

export const MyOrderDialogs: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ({ ...rest }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ReturnDialog open={!!open} setOpen={setOpen} />

      <Dialog
        {...rest}
        title="Select items you liked to return."
        className="md:min-w-176 top-[55%] max-h-[80%] overflow-y-scroll"
        footer={
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <RadixDialog.Close asChild>
              <Button onClick={() => setOpen(true)}>Return</Button>
            </RadixDialog.Close>
            <RadixDialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </RadixDialog.Close>
          </div>
        }
        trigger={
          <RadixDialog.Trigger
            className={getButtonClassNames({
              size: 'md',
              colorScheme: 'blue',
              variant: 'solid',
            })}
          >
            Return
          </RadixDialog.Trigger>
        }
      >
        <div>
          <div className="flex flex-col items-center rounded-sm md:flex-row md:items-stretch">
            <div>
              <Image
                src={ImageOrder}
                alt="Order image"
                height={200}
                width={150}
              />
            </div>
            <div className="flex w-full flex-col justify-between md:ml-8">
              <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-center md:items-start">
                  <p>Sweat absorbent</p>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Color: </p>
                    <p>White</p>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Size: </p>
                    <p>L</p>
                  </div>
                </div>
                <Checkbox />
              </div>
              <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Quantity: </p>
                    <p>1</p>
                  </div>
                  <p>€30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 w-full">
            <hr className="w-full" />
          </div>
          <div className="flex flex-col items-center rounded-sm md:flex-row md:items-stretch">
            <div>
              <Image
                src={ImageOrder}
                alt="Order image"
                height={200}
                width={150}
              />
            </div>
            <div className="flex w-full flex-col justify-between md:ml-8">
              <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-center md:items-start">
                  <p>Sweat absorbent</p>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Color: </p>
                    <p>White</p>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Size: </p>
                    <p>L</p>
                  </div>
                </div>
                <Checkbox />
              </div>
              <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Quantity: </p>
                    <p>1</p>
                  </div>
                  <p>€30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 w-full">
            <hr className="w-full" />
          </div>
          <div className="flex flex-col items-center rounded-sm md:flex-row md:items-stretch">
            <div>
              <Image
                src={ImageOrder}
                alt="Order image"
                height={200}
                width={150}
              />
            </div>
            <div className="flex w-full flex-col justify-between md:ml-8">
              <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-center md:items-start">
                  <p>Sweat absorbent</p>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Color: </p>
                    <p>White</p>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Size: </p>
                    <p>L</p>
                  </div>
                </div>
                <Checkbox />
              </div>
              <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Quantity: </p>
                    <p>1</p>
                  </div>
                  <p>€30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 w-full">
            <hr className="w-full" />
          </div>
          <div className="flex flex-col items-center rounded-sm md:flex-row md:items-stretch">
            <div>
              <Image
                src={ImageOrder}
                alt="Order image"
                height={200}
                width={150}
              />
            </div>
            <div className="flex w-full flex-col justify-between md:ml-8">
              <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-center md:items-start">
                  <p>Sweat absorbent</p>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Color: </p>
                    <p>White</p>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Size: </p>
                    <p>L</p>
                  </div>
                </div>
                <Checkbox />
              </div>
              <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <div className="flex gap-1 text-xs">
                    <p className="text-grayscale-400">Quantity: </p>
                    <p>1</p>
                  </div>
                  <p>€30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 w-full">
            <hr className="w-full" />
          </div>
        </div>
      </Dialog>
    </>
  );
};

const ReturnDialog: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  console.log('openAA', open);
  return (
    <Dialog
      open={open}
      className="md:max-w-176 w-[80%] md:pr-[20%]"
      title="We received your return and it is  getting processed"
    >
      <p className="max-w-96 text-xs text-grayscale-500">
        We will send you and email with more information and process of return.
        Thanks for shopping at RED.
      </p>
      <RadixDialog.Close asChild>
        <Button
          variant="link"
          className="absolute right-4 top-4 h-6 w-6 rotate-45 text-3xl text-black no-underline"
          onPress={() => setOpen(false)}
        >
          +
        </Button>
      </RadixDialog.Close>
    </Dialog>
  );
};
