// External packages
import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  Input as AriaInput,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Input: React.FC<
  TextFieldProps & { className?: string; placeholder?: string }
> = ({ className, children, ...rest }) => (
  <TextField
    {...rest}
    className={twMerge("mb-8 w-full outline-none", className)}
  >
    <AriaInput
      className="w-full border-1 border-gray-200 px-5 py-4 text-gray-400 outline-none"
      placeholder={rest.placeholder}
    />
  </TextField>
);
