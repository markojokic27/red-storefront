// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { RadioColor, RadioGroupProduct, RadioSize } from '@/components/RadioGroupSize';
import { Button } from '@/components/Button';



export const ShopProductCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    name: string;
    originalPrice: string;
    price?: string;
    tag?: React.ReactNode;
    description: React.ReactNode;
  }
> = ({ name, originalPrice, price, tag, description, className, ...rest }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div {...rest} className={twMerge('', className)}>
      <h2 className="mb-5 text-xl font-black italic text-blue-700 md:text-3xl">
        {name}
      </h2>
      {!price && <p className="text-xl font-light">{originalPrice}</p>}
      {price && (
        <div>
          {tag}
          <p className="mt-4 text-xl font-light">{price}</p>
          <p className="text-lg font-light text-gray-400 line-through">
            {originalPrice}
          </p>
        </div>
      )}
      <div className="my-10 leading-10">{description}</div>
      <div className="mb-8">
        <p className="mb-4">Color</p>
        <RadioGroupProduct value='white'>
          {['white', 'grayscale-400', 'black', 'blue-700'].map((color) => (
            <RadioColor
              key={color}
              value={color}
            />
          ))}
        </RadioGroupProduct>
      </div>
      <div className="mb-8">
        <p className="mb-4">Size</p>
        <RadioGroupProduct value='M'>
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <RadioSize
              key={size}
              value={size}
            />
          ))}
        </RadioGroupProduct>
      </div>
      <div className="mb-8">
        <p className="mb-4">Quantity</p>
        <div className="flex items-center">
          <button
            onClick={() => {
              quantity > 1 && setQuantity(quantity - 1);
            }}
            className="h-6 w-6"
          >
            -
          </button>
          <div className="flex h-8 w-8 items-center justify-center border-b border-b-black">
            {quantity}
          </div>
          <button onClick={() => setQuantity(quantity + 1)} className="h-6 w-6">
            +
          </button>
        </div>
      </div>
      <Button className="w-full py-4">Add to cart</Button>
      <p className="mt-4 text-gray-400">Estimate delivery 2-3 days</p>
    </div>
  );
};
