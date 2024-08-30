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
    <AccountLayout page="payment">
      <div className="mb-20">
        <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
          Payment methods
        </h2>
      </div>
    </AccountLayout>
  );
}
