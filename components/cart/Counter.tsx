'use client';

// External packages
import {
  NumberField,
  Group,
  Input,
  Button,
  NumberFieldProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Counter: React.FC<
  React.ComponentPropsWithoutRef<'div'> & NumberFieldProps
> = ({ ...rest }) => {
  return (
    <NumberField {...rest}>
      <Group className="flex items-center rounded-full bg-grayscale-50">
        <Button
          slot="decrement"
          className="m-3 flex h-4 w-4 items-center justify-center text-xs"
        >
          -
        </Button>
        <Input className="h-5 w-5 bg-grayscale-50 text-center outline-none" />
        <Button
          slot="increment"
          className="m-3 flex h-4 w-4 items-center justify-center text-xs"
        >
          +
        </Button>
      </Group>
    </NumberField>
  );
};
