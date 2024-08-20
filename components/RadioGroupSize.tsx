// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  RadioGroup,
  RadioGroupProps,
  Radio,
  RadioProps,
} from 'react-aria-components';

export const RadioGroupProduct: React.FC<
  RadioGroupProps & { className?: string; children?: React.ReactElement[] }
> = ({ className, value, children, ...rest }) => {
  const [selected, setSelected] = React.useState(value);

  return (
    <RadioGroup
      {...rest}
      className={twMerge('flex gap-4', className)}
      defaultValue={selected}
      onChange={setSelected}
    >
      {(children ?? []).map((child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isSelected: selected === (child as React.ReactElement<any>).props.value,
          });
        }
        return null;
      })}
    </RadioGroup>
  );
};

export const RadioSize: React.FC<
  RadioProps & {
    variant?: 'unselected' | 'selected' | 'disabled';
    isSelected?: boolean;
    className?: string;
  }
> = ({ variant = 'unselected', value, isSelected, className, ...rest }) => (
  <Radio
    {...rest}
    value={value}
    className={twMerge(
      'relative flex h-10 w-10 cursor-pointer items-center justify-center border border-black hover:border-blue-700 hover:font-black hover:text-blue-700',
      variant === 'disabled' &&
        'cursor-default border-0 bg-gray-50 text-gray-400 before:absolute before:bottom-1 before:top-1/2 before:h-[1px] before:w-[144%] before:rotate-45 before:bg-gray-400 after:absolute after:top-1/2 after:h-[1px] after:w-[144%] after:-rotate-45 after:bg-gray-400 hover:border-0 hover:font-normal hover:text-gray-400',
      isSelected && 'border-2 font-black',
      className
    )}
  >
    {value}
  </Radio>
);

export const RadioColor: React.FC<
  RadioProps & {
    variant?: 'unselected' | 'selected' | 'disabled';
    isSelected?: boolean;
    className?: string;
  }
> = ({ variant = 'unselected', value,isSelected, className, ...rest }) => (
  <Radio
    {...rest}
    value={value}
    className={twMerge(
      'h-10 w-10 cursor-pointer border border-black p-1 hover:border-blue-700',
      variant === 'disabled' &&
        'cursor-default border-gray-200 hover:border-gray-200',
      isSelected && 'border-2 hover:border-black',
      className
    )}
  >
    <div
      className={twMerge(
        `bg-${value} h-full w-full hover:scale-105`,
        variant === 'disabled' && 'opacity-50 hover:scale-100',
        value === 'white' && 'border border-grayscale-200'
      )}
    />
  </Radio>
);
