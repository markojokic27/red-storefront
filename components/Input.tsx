// External packages
import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  Input as AriaInput,
  InputProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Input: React.FC<
  TextFieldProps &  InputProps & {
    className?: string;
    placeholder?: string;
    floatLabel?: boolean;
  }
> = ({ className, children, floatLabel = false, ...rest }) => {
  const [value, setValue] = React.useState(false);

  return (
    <TextField className="relative w-full outline-none">
      {floatLabel && (
        <label
          className={twMerge(
            `text-2xs absolute text-transparent ${value ? 'left-4 top-1.5 text-sm text-gray-400' : ''}`
          )}
        >
          {rest.placeholder}
        </label>
      )}
      <AriaInput
        {...rest}
        className={twMerge(
          'mb-8 w-full border-1 border-gray-200 px-5 py-4 text-gray-400 outline-none',
          floatLabel && value && 'pb-3 pt-5',
          className
        )}
        placeholder={rest.placeholder}
        onChange={(e) => setValue(e.target.value !== '')}
      />
    </TextField>
  );
};
