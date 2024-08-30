// External packages
import * as RadixDialog from '@radix-ui/react-dialog';

// Components
import { Button, getButtonClassNames } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { SelectCountry } from '@/components/checkout/Accordion';
import { Dialog } from '@/components/account/Dialog';
import { AccountLayout } from '@/components/account/AccountLayout';

export default function Page() {
  // console.log(
  //   getButtonClassNames({
  //     size: 'md',
  //     colorScheme: 'blue',
  //     variant: 'solid',
  //     isVisuallyDisabled: false,
  //   })
  // );
  return (
    <AccountLayout page="personal">
      <div className="mb-20">
        <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
          Personal & security
        </h2>
        <p className="text-md">Personal information</p>
        <div className="mb-16 mt-6 flex max-w-150 flex-col items-center border p-4 md:flex-row">
          <Icon name="user"></Icon>
          <div className="ml-8">
            <p className="text-2xs text-grayscale-400">Name</p>
            <p>Jovana Jerimic</p>
          </div>
          <div className="ml-8">
            <p className="text-2xs text-grayscale-400">Number</p>
            <p>-</p>
          </div>
          <Dialog
            trigger={
              <RadixDialog.Trigger
                // className={
                //   getButtonClassNames({
                //     size: 'md',
                //     colorScheme: 'blue',
                //     variant: 'solid',
                //     isVisuallyDisabled: false,
                //   }) + ' md:ml-auto'
                // }
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
        <div className="mb-2 mt-6 flex max-w-150 border p-4">
          <Icon name="user"></Icon>
          <div className="ml-8">
            <p className="text-2xs text-grayscale-400">Email</p>
            <p>jovana.jerimic@gmail.com</p>
          </div>
        </div>
        <span className="text-2xs text-grayscale-400">
          If you want to change your email please contact us via customer
          support.
        </span>
        <p className="mb-10 mt-16 text-md">Address</p>
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
              // className={
              //   getButtonClassNames({
              //     size: 'md',
              //     colorScheme: 'blue',
              //     variant: 'solid',
              //     isVisuallyDisabled: false,
              //   }) + ' py-4'
              // }
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
          Perhaps you've scribbled your password on a scrap of paper or you're
          the type who likes to change it every now and then to feel safer. Or
          maybe you had a rough weekend, and well, we know what can happen on
          weekends ( ͡° ͜ʖ ͡°). No worries, to change your password, we'll send you
          an email. Just click on the reset button below.
        </p>
        <Button className="py-4">Reset password</Button>
      </div>
    </AccountLayout>
  );
}
