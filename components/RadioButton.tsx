// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Label, Radio, RadioProps } from 'react-aria-components';

export const RadioButton: React.FC<
  RadioProps &
    React.ComponentPropsWithoutRef<'div'> & {
      labelLeft?: React.ReactNode;
      labelRight?: React.ReactNode;
      value: string;
    }
> = ({ value, labelLeft, labelRight, className, ...rest }) => (
  <Radio
    {...rest}
    value={value}
    className={twMerge('group flex justify-start px-4 py-5', className)}
  >
    <div className="group-data-[selected=true]:border-5 h-4 w-4 rounded-full border border-black group-hover:border-blue-700" />
    {labelLeft && <Label>{labelLeft}</Label>}
    {labelRight && <Label>{labelRight}</Label>}
  </Radio>
);
