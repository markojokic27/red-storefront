// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-aria-components';

// Components
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

// Assets

export const OrderCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    tag?: React.ReactNode;
    image: React.ReactNode;
    name: string;
    price: string;
    originalPrice?: string;
    color: string;
    quantity: number;
  }
> = ({
  name,
  price,
  originalPrice,
  tag,
  image,
  color,
  quantity,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={twMerge(
      'w-full bg-grayscale-50 p-8 pb-8 lg:px-12 lg:pb-64 lg:pt-32',
      className
    )}
  >
    <div className="mb-8 flex justify-between lg:mb-16 text-sm md:text-base">
      <p>Order - 1 item</p>
      <Link className="underline underline-offset-4" href={'/checkout'}>
        Edit card
      </Link>
    </div>
    <div className="mb-8 flex gap-3 lg:mb-16">
      <div className="relative min-w-24 bg-white lg:bg-transparent">
        {image}
        {tag && <div className="absolute bottom-2 right-2 text-xs">{tag}</div>}
      </div>
      <div className="flex w-full justify-between sm:flex-row sm:justify-between">
        <div>
          <h4 className="text-sm md:text-md font-black">{name}</h4>
          <p className="text-2xs md:text-base text-grayscale-400">{color}</p>
          <p className="text-2xs md:text-base text-grayscale-400">{quantity}</p>
        </div>
        <div>
          {price && (
            <p className={originalPrice && 'font-bold text-red-700'}>{price}</p>
          )}
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              {originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
    <div className="lg:flex lg:gap-8">
      <Input
        className="mb-4 h-12 bg-grayscale-50 leading-none"
        placeholder="Discount Code"
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
