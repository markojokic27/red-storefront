// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Label, Radio as AriaRadio, RadioProps } from 'react-aria-components';

export const RadioButton: React.FC<
  RadioProps &
    React.ComponentPropsWithoutRef<'label'> & {
      labelLeft?: React.ReactNode;
      labelRight?: React.ReactNode;
      value: string;
    }
> = ({ value, labelLeft, labelRight, className, ...rest }) => {
  return (
    <AriaRadio
      {...rest}
      value={value}
      className={twMerge(
        'group/radio flex items-center justify-start gap-3 border px-4 py-5 hover:cursor-pointer hover:border-blue-700',
        className
      )}
    >
      <Radio />
      {labelLeft && <Label>{labelLeft}</Label>}
      {labelRight && <Label className="ml-auto">{labelRight}</Label>}
    </AriaRadio>
  );
};

export const Radio: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'h-4 w-4 rounded-full border border-black transition-all duration-300 group-hover/radio:border-blue-700 group-data-[selected=true]/radio:border-5',
        className
      )}
    ></div>
  );
};

export const RadioButtonVissualy: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    labelLeft?: React.ReactNode;
    labelRight?: React.ReactNode;
  }
> = ({ labelLeft, labelRight, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'group flex items-center justify-start gap-3 border px-4 py-5 hover:cursor-pointer hover:border-blue-700',
        className
      )}
    >
      <Radio />
      {labelLeft && <Label>{labelLeft}</Label>}
      {labelRight && <Label className="ml-auto">{labelRight}</Label>}
    </div>
  );
};
