// External packages
import * as RadixDialog from '@radix-ui/react-dialog';

// Components
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { SelectCountry } from '@/components/checkout/Accordion';
import { Dialog } from '@/components/account/Dialog';

export default function Page() {

  return (
      <div className="mb-20">
        <h2 className="mb-10 mt-16 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
          My orders
        </h2>
      </div>
  );
}
