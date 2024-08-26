'use client';

import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  Input as AriaInput,
  Label,
  InputProps,
  FieldError,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Input: React.FC<
  React.ComponentPropsWithoutRef<'div'> &
    TextFieldProps & {
      label: string;
      inputProps?: React.ComponentPropsWithoutRef<'input'> &
        InputProps & { validationError?: string };
    }
> = ({ label, inputProps = {}, className }) => {
  const labelRef = React.useRef<HTMLLabelElement | null>(null);
  const {
    validationError,
    onChange,
    className: inputClassName,
    ...restInputProps
  } = inputProps;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (labelRef.current) {
      labelRef.current.setAttribute(
        'data-label-floating',
        value ? 'true' : 'false'
      );
    }
    onChange?.(event); 
  };

  return (
    <TextField
      className={twMerge('w-full text-base text-gray-400', className)}
    >
      <div className="relative">
        <Label
          ref={labelRef}
          className="peer absolute left-4 top-1/2 origin-left -translate-y-1/2 transition-transform data-[label-floating=true]:-translate-y-[22px] data-[label-floating=true]:scale-75"
        >
          {label}
        </Label>
        <AriaInput
          {...restInputProps}
          className={twMerge(
            'h-[56px] w-full border border-gray-200 px-4 text-gray-900 outline-none hover:border-blue-700 focus:border-blue-700 active:border-blue-700 peer-data-[label-floating=true]:pt-3',
            inputClassName
          )}
          onChange={handleChange}
        />
      </div>
      {validationError && (
        <p className="mt-2 text-red-500">{validationError}</p>
      )}
    </TextField>
  );
};
