'use client';

// External packages
import * as React from 'react';
import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Checkbox: React.FC<
  React.ComponentPropsWithoutRef<'label'> & CheckboxProps
> = ({ children, className, ...rest }) => (
  <AriaCheckbox
    {...rest}
    className={twMerge('z-10 min-h-4 min-w-4', className)}
  >
    
  </AriaCheckbox>
);
