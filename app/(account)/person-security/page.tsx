// External packages
import * as RadixDialog from '@radix-ui/react-dialog';
import { twJoin } from 'tailwind-merge';

// Components
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { SelectCountry } from '@/components/checkout/Accordion';
import { Dialog } from '@/components/account/Dialog';

// Utilities
import { getButtonClassNames } from '@/utils/getButtonClassNames';

export default function Page() {
  return (
    <div className="mb-20">
      <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
        Personal & security
      </h2>
      <p className="text-md">Personal information</p>
      <div className="mb-16 mt-6 flex max-w-150 flex-col items-center border p-4 text-center md:flex-row md:text-left">
        <Icon name="user"></Icon>
        <div className="md:ml-8">
          <p className="text-2xs text-grayscale-400">Name</p>
          <p>Jovana Jerimic</p>
        </div>
        <div className="md:ml-8">
          <p className="text-2xs text-grayscale-400">Number</p>
          <p>-</p>
        </div>
        <Dialog
          trigger={
            <RadixDialog.Trigger
              className={twJoin(
                getButtonClassNames({
                  size: 'md',
                  colorScheme: 'blue',
                  variant: 'outline',
                  isVisuallyDisabled: false,
                }),
                'md:ml-auto'
              )}
            >
              Change
            </RadixDialog.Trigger>
          }
          title="Change personal information"
          footer={
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <Button>Save changes</Button>
              <RadixDialog.Close asChild>
                <Button variant="outline">Cancel</Button>
              </RadixDialog.Close>
            </div>
          }
        >
          <div className="md:flex md:gap-6">
            <Input label="First name" className="mb-8 w-full" />
            <Input label="Last name" className="mb-8 w-full" />
          </div>
          <Input label="Phone" className="mb-10" />
        </Dialog>
      </div>
      <p className="text-md">Contact</p>
      <div className="mb-2 mt-6 flex max-w-150 flex-col items-center border p-4 md:flex-row">
        <Icon name="user" />
        <div className="text-center md:ml-8 md:text-left">
          <p className="text-2xs text-grayscale-400">Email</p>
          <p>jovana.jerimic@gmail.com</p>
        </div>
      </div>
      <span className="text-2xs text-grayscale-400">
        If you want to change your email please contact us via customer support.
      </span>
      <p className="mb-10 mt-16 text-md">Address</p>
      <div className="b-2 mb-10 mt-6 flex max-w-150 flex-col items-center border p-4 text-center md:flex-row md:items-start md:text-left">
        <div>
          <Icon name="user" />
        </div>
        <div className="w-full md:ml-8">
          <div className="w-full md:flex">
            <div className="md:mb-9 md:w-1/2">
              <p className="text-2xs text-grayscale-400">Country</p>
              <p>Croatia</p>
            </div>
            <div className="md:mb-9">
              <p className="text-2xs text-grayscale-400">Address</p>
              <p>Duvanjsa 3</p>
            </div>
          </div>
          <div className="md:mb-9">
            <p className="text-2xs text-grayscale-400">
              Apartment, suite, etc. (Optional)
            </p>
            <p>Kat 2</p>
          </div>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <p className="text-2xs text-grayscale-400">Postal Code</p>
              <p>10000</p>
            </div>
            <div className="md:w-1/2">
              <p className="text-2xs text-grayscale-400">City</p>
              <p>Zagreb</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 md:ml-auto md:flex md:flex-row md:items-start md:justify-end">
          <Button
            variant="outline"
            iconLeft={<Icon name="trash" />}
            className="h-12 w-12 gap-0 p-0"
          />
          <Dialog
            title="Change address"
            footer={
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <Button>Save changes</Button>
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
                  variant: 'outline',
                  isVisuallyDisabled: false,
                })}
              >
                Change
              </RadixDialog.Trigger>
            }
          >
            <SelectCountry className="mb-10" />
            <Input label="Address" className="mb-10" />
            <Input
              label="Apartment, suite, etc. (Optional)"
              className="mb-10"
            />
            <div className="md:flex md:gap-6">
              <Input label="Postal Code" className="mb-8 w-full" />
              <Input label="City" className="mb-8 w-full" />
            </div>
          </Dialog>
        </div>
      </div>
      <Dialog
        title="Add address"
        footer={
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Button>Add address</Button>
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
              isVisuallyDisabled: false,
            })}
          >
            Add address
          </RadixDialog.Trigger>
        }
      >
        <SelectCountry className="mb-10" />
        <Input label="Address" className="mb-10" />
        <Input label="Apartment, suite, etc. (Optional)" className="mb-10" />
        <div className="md:flex md:gap-6">
          <Input label="Postal Code" className="mb-8 w-full" />
          <Input label="City" className="mb-8 w-full" />
        </div>
      </Dialog>
      <p className="mb-6 mt-16 text-md">Change password</p>
      <p className="mb-12 max-w-2xl text-grayscale-500">
        Perhaps you've scribbled your password on a scrap of paper or you're the
        type who likes to change it every now and then to feel safer. Or maybe
        you had a rough weekend, and well, we know what can happen on weekends (
        ͡° ͜ʖ ͡°). No worries, to change your password, we'll send you an email.
        Just click on the reset button below.
      </p>
      <Dialog
        className="w-full max-w-150"
        title="Reset password"
        trigger={
          <RadixDialog.Trigger
            className={getButtonClassNames({
              size: 'md',
              colorScheme: 'blue',
              variant: 'solid',
              isVisuallyDisabled: false,
            })}
          >
            Reset password
          </RadixDialog.Trigger>
        }
      >
        <p className="w-96 text-grayscale-500">
          We have sent an email with instructions on how to change the password.
        </p>
        <Button
          variant="link"
          className="absolute right-4 top-4 h-6 w-6 rotate-45 text-3xl text-black no-underline"
        >
          +
        </Button>
      </Dialog>
    </div>
  );
}
