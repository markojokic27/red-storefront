'use client';
// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { Icon } from '@/components/Icon';

export const CartProductCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    tag?: React.ReactNode;
    image: React.ReactNode;
  }
> = ({ tag, image, className, ...rest }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div
      {...rest}
      className={twMerge(
        'flex justify-start gap-3 border-t py-8 md:py-10',
        className
      )}
    >
      <div className="relative min-w-24">
        {image}
        {tag && <div className="absolute bottom-2 right-2 text-xs">{tag}</div>}
      </div>
      <div className="w-full">
        <div className="mb-6 w-full justify-between md:flex lg:mb-10">
          <div>
            <h3 className="text-sm font-black md:text-md">Fresh tote</h3>
            <p className="pt-1 text-2xs text-grayscale-400 md:text-base">
              White
            </p>
          </div>
          <div className="flex gap-2 md:block">
            <p className="text-xs font-bold text-red-700 md:text-md">€15</p>
            <p className="text-xs text-gray-400 line-through md:text-md">€35</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <div className="hover:cursor-pointer hover:text-blue-700">
            <Icon name="trash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Counter: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
  }
> = ({ quantity, setQuantity, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex items-center rounded-full bg-grayscale-50',
        className
      )}
    >
      <button
        onClick={() => {
          quantity > 1 && setQuantity(quantity - 1);
        }}
        className={twMerge(
          'm-3 flex h-4 w-4 items-center justify-center text-xs',
          quantity === 1 && 'text-grayscale-200 hover:cursor-not-allowed'
        )}
      >
        -
      </button>
      <div className="h-5 w-5 text-center">{quantity}</div>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="m-3 flex h-4 w-4 items-center justify-center text-xs"
      >
        +
      </button>
    </div>
  );
};
