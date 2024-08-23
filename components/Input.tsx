'use client';

// External packages
import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  Input as AriaInput,
  Label,
  InputProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Input: React.FC<
  React.ComponentPropsWithoutRef<'div'> &
    TextFieldProps & {
      label: string;
      inputProps?: React.ComponentPropsWithoutRef<'input'> & InputProps;
    }
> = ({ label, inputProps, className }) => {
  const labelRef = React.useRef(null);

  return (
    <TextField
      className={twMerge(
        'relative w-full text-base text-gray-400 outline-none',
        className
      )}
    >
      <Label
        ref={labelRef}
        className="peer absolute left-4 top-1/2 origin-left -translate-y-1/2 transition-transform data-[label-floating=true]:-translate-y-[22px] data-[label-floating=true]:scale-75"
      >
        {label}
      </Label>
      <AriaInput
        {...inputProps}
        className={twMerge(
          'h-[56px] w-full border-1 border-gray-200 px-4 text-grayscale-900 outline-none hover:border-blue-700 focus:border-blue-700 active:border-blue-700 peer-data-[label-floating=true]:pt-3',
          inputProps?.className
        )}
        onChange={(event) => {
          const value = event.target.value;
          const labelElement = labelRef.current as HTMLLabelElement | null;

          if (labelElement !== null) {
            if (value === '') {
              labelElement.setAttribute('data-label-floating', 'false');
            } else {
              labelElement.setAttribute('data-label-floating', 'true');
            }
          }
        }}
      />
    </TextField>
  );
};
