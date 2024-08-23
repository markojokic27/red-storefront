// External packages
import Image from 'next/image';

// Assets
import ImageOrder from '@/public/assets/images/OrderCard.png';

// Components
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Tag } from '@/components/Tag';

export const OrderContent = () => (
  <div className='p-8 lg:p-0 bg-grayscale-50 '>
    <div className="mb-8 flex justify-between text-sm md:text-base lg:mb-16 ">
      <p>Order - 1 item</p>
      <Button variant="link">Edit card</Button>
    </div>
    <div className="mb-8 flex gap-3">
      <div className="relative min-w-24 bg-white lg:bg-transparent">
        <Image src={ImageOrder} priority alt="" />
        <Tag className="absolute bottom-2 right-2 text-xs">-50%</Tag>
      </div>
      <div className="flex w-full justify-between sm:flex-row sm:justify-between">
        <div className='flex flex-col justify-between'>
          <h4 className="text-sm font-black md:text-md">Name</h4>
          <div>
            <p className="text-2xs text-grayscale-400 md:text-base">Color: white</p>
            <p className="text-2xs text-grayscale-400 md:text-base">Size: S</p>
            <p className="text-2xs text-grayscale-400 md:text-base">Quantity: 1</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-red-700">€30</p>
          <p className="text-sm text-gray-400 line-through">€60</p>
        </div>
      </div>
    </div>
    <div className="lg:flex lg:gap-8">
      <Input
        label="Discount code"
        className="h-12 bg-grayscale-50 leading-none mb-8"
        inputProps={{ className: 'h-12' }}
      />
      <Button
        colorScheme="gray"
        className="mb-8 h-12 w-full bg-grayscale-400 py-4 lg:w-1/4"
      >
        Apply
      </Button>
    </div>
    <div className="mb-2 flex justify-between text-sm md:text-base">
      <p>Subtotal</p>
      <p>€30</p>
    </div>
    <div className="mb-6 flex justify-between text-sm md:text-base">
      <p>Shipping</p>
      <p>€15</p>
    </div>
    <div className="mb-8 flex justify-between text-md md:text-lg">
      <p>Total</p>
      <p>€45</p>
    </div>
    <p className="text-grayscale-400">Including 11.25 tax </p>
  </div>
);
