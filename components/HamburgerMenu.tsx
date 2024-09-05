// External packages
import * as RadixDialog from '@radix-ui/react-dialog';
import Link from 'next/link';

// Components
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { Button } from 'react-aria-components';

export const HamburgerMenu: React.FC<
  React.ComponentPropsWithoutRef<'button'> & {
    headerTheme?: 'light' | 'dark';
  }
> = ({ headerTheme = 'dark', ...rest }) => {
  return (
    <>
      <RadixDialog.Root {...rest}>
        <RadixDialog.Trigger className="group h-6 w-6 focus:outline-none">
          <Icon
            name="hamburger"
            color={headerTheme === 'dark' ? 'default' : 'white'}
            className="group-data-[state=open]:hidden"
          />
        </RadixDialog.Trigger>

        <RadixDialog.Portal>
          <RadixDialog.Content
            className={`hamburger-menu fixed bottom-0 left-0 top-0 z-[60] -translate-x-full transform bg-blue-700 transition-transform duration-300 ease-in-out data-[state=open]:translate-x-0`}
          >
            <RadixDialog.Title />
            <RadixDialog.DialogDescription />
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="relative h-fit w-full border-b border-b-white text-white">
                  <Input
                    label="Search"
                    className="-mb-2 p-0 pl-10"
                    inputProps={{
                      className: 'bg-blue-700 text-white h-18 m-0 border-0',
                    }}
                  />
                  <Icon
                    name="search"
                    className="absolute left-4 top-1/2 -translate-y-1/2 transform"
                  />
                </div>
                <div className="flex flex-col text-xl text-white">
                  <Link className="ml-8 mt-8" href={'/shop'}>
                    Shop
                  </Link>
                  <Link className="ml-8 mt-8" href={'/about'}>
                    About
                  </Link>
                </div>
              </div>
              <div className="flex justify-between p-8 text-white">
                <Link href={'/person-security'}>My account</Link>
                <div className="flex">
                  <Button className="uppercase focus:outline-none">hr</Button>
                  <hr className="mx-2 h-6 w-px border-0 bg-white md:flex" />
                  <Button className="uppercase focus:outline-none">eur</Button>
                </div>
              </div>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </>
  );
};
