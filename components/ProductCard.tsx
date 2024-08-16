// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

// Assets
import ImageBackground from '@/public/assets/shopImages/background.png';

export const ProductCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    tag?: React.ReactNode;
    image: React.ReactNode;
    name: string;
    price: string;
    originalPrice?: string;
  }
> = ({ name, price, originalPrice, tag, image, className, ...rest }) => (
  <div
    {...rest}
    className={twMerge(
      'group flex cursor-pointer flex-col items-center',
      className
    )}
  >
    <div className="relative">
      {image}
      <div className="absolute top-0 -z-20 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image
          src={ImageBackground}
          alt="Product background on hover"
          width={552}
          height={736}
        />
      </div>
      {tag && <div className="absolute bottom-2 right-2 text-xs">{tag}</div>}
    </div>
    <div className="flex w-full flex-col justify-start sm:flex-row sm:justify-between">
      {name && <h4>{name}</h4>}
      <div>
        {price && <p className={originalPrice && 'text-red-700'}>{price}</p>}
        {originalPrice && (
          <p className="text-gray-400 line-through">{originalPrice}</p>
        )}
      </div>
    </div>
  </div>
);
