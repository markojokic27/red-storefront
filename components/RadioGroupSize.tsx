// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { RadioGroupProps, RadioProps } from 'react-aria-components';

export const RadioGroupSize: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...rest }) => {
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const handleSelection = (value: string) => {
    setSelectedSize(value);
  };
  return (
    <div {...rest} className={twMerge('flex gap-4', className)}>
      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
        <RadioSize
          key={size}
          value={size}
          variant="disabled" //{selectedSize === size ? 'selected' : 'unselected'}
          onClick={() => handleSelection(size)}
        />
      ))}
    </div>
  );
};

export const RadioSize: React.FC<
  React.ComponentPropsWithoutRef<'div'> &
    RadioProps &
    RadioGroupProps & { variant?: 'unselected' | 'selected' | 'disabled' }
> = ({ variant = 'unselected', className, ...rest }) => (
  <div
    {...rest}
    className={twMerge(
      'flex h-10 w-10 cursor-pointer items-center justify-center border border-black hover:border-blue-700 hover:font-black hover:text-blue-700 relative',
      variant === 'disabled' &&
        'cursor-default border-gray-400 bg-gray-50 text-gray-400 hover:border-gray-400  hover:text-gray-400 hover:font-normal before:absolute  before:top-1/2 before:bottom-1 before:h-[1px] before:w-[144%] before:bg-gray-400 before:rotate-45 after:absolute  after:top-1/2 after:h-[1px] after:bg-gray-400 after:-rotate-45 after:w-[144%]',
      variant === 'selected' && 'border-2 font-black',
      className
    )}
  >
    {rest.value}
  </div>
);
