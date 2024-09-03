// External packages
import * as RadixDialog from '@radix-ui/react-dialog';

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
      <h2 className="mb-16 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
        Payment methods
      </h2>
      <p className="mb-6 text-md">Credit and debit cards</p>
      <div className="md:min-w-150 mb-6 flex flex-col items-center border p-4 md:flex-row md:items-start">
        <div className="mb-3 md:mb-0">
          <Icon name="visa-card" />
        </div>
        <div className="gap-3 text-center md:ml-16 md:gap-0 md:text-left">
          <p className="mb-3 md:mb-0">Jovana Jerimic</p>
          <p className="mb-3 md:mb-0">**** 1111</p>
          <p className="mb-3 md:mb-0">Exp: 06/27</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:ml-auto md:flex md:flex-row md:items-start md:justify-end">
          <Button
            variant="outline"
            iconLeft={<Icon name="trash" />}
            className="h-12 w-12 gap-0 p-0"
          />
          <Dialog
            title="Change credit or debit card"
            className="md:min-w-150"
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
                className={
                  getButtonClassNames({
                    size: 'md',
                    colorScheme: 'blue',
                    variant: 'outline',
                    isVisuallyDisabled: false,
                  }) + ' h-12'
                }
              >
                Change
              </RadixDialog.Trigger>
            }
          >
            <Input label="Name on card" className="mb-8 w-full" />
            <Input label="Card number" className="mb-8 w-full" />
            <div className="md:flex md:gap-6">
              <Input label="MM/YY" className="mb-8 w-full" />
              <div className="relative mb-8 w-full">
                <Input
                  label="CVC"
                  className="w-full"
                  icon={
                    <div className="h-6 w-6 rounded-[100%] border border-black text-center text-black">
                      i
                    </div>
                  }
                />
                <div className="absolute left-4 top-1/2"></div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
      <div className="md:min-w-150 mb-10 flex flex-col items-center border p-4 md:flex-row md:items-start">
        <div className="mb-3 md:mb-0">
          <Icon name="visa-card" />
        </div>
        <div className="gap-3 text-center md:ml-16 md:gap-0 md:text-left">
          <p className="mb-3 md:mb-0">Jovana Jerimic</p>
          <p className="mb-3 md:mb-0">**** 0002</p>
          <p className="mb-3 md:mb-0">Exp: 04/26</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:ml-auto md:flex md:flex-row md:items-start md:justify-end">
          <Button
            variant="outline"
            iconLeft={<Icon name="trash" />}
            className="h-12 w-12 gap-0 p-0"
          />
          <Dialog
            title="Change credit or debit card"
            className="md:min-w-150"
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
                className={
                  getButtonClassNames({
                    size: 'md',
                    colorScheme: 'blue',
                    variant: 'outline',
                    isVisuallyDisabled: false,
                  }) + ' h-12'
                }
              >
                Change
              </RadixDialog.Trigger>
            }
          >
            <Input label="Name on card" className="mb-8 w-full" />
            <Input label="Card number" className="mb-8 w-full" />
            <div className="md:flex md:gap-6">
              <Input label="MM/YY" className="mb-8 w-full" />
              <div className="relative mb-8 w-full">
                <Input
                  label="CVC"
                  className="w-full"
                  icon={
                    <div className="h-6 w-6 rounded-[100%] border border-black text-center text-black">
                      i
                    </div>
                  }
                />
              </div>
            </div>
          </Dialog>
        </div>
      </div>
      <Dialog
        title="Add credit or debit card"
        className="md:min-w-150"
        footer={
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Button>Add Card</Button>
            <RadixDialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </RadixDialog.Close>
          </div>
        }
        trigger={
          <RadixDialog.Trigger
            className={
              getButtonClassNames({
                size: 'md',
                colorScheme: 'blue',
                variant: 'solid',
                isVisuallyDisabled: false,
              }) + ' h-12'
            }
          >
            Add card
          </RadixDialog.Trigger>
        }
      >
        <Input label="Name on card" className="mb-8 w-full" />
        <Input label="Card number" className="mb-8 w-full" />
        <div className="md:flex md:gap-6">
          <Input label="MM/YY" className="mb-8 w-full" />
          <div className="relative mb-8 w-full">
            <Input
              label="CVC"
              className="w-full"
              icon={
                <div className="h-6 w-6 rounded-[100%] border border-black text-center text-black">
                  i
                </div>
              }
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
