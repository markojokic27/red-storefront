'use client';

// External packages
import * as React from 'react';
import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

// Component
import { Icon } from '@/components/Icon';

export const Checkbox: React.FC<
  React.ComponentPropsWithoutRef<'label'> & CheckboxProps
> = ({ children, className, ...rest }) => (
  <AriaCheckbox
    {...rest}
    className={twMerge('group flex items-start gap-1', className)}
  >
    <div className="relative inline-flex min-h-4 min-w-4 items-center justify-center border border-gray-400 hover:cursor-pointer hover:border-blue-700 hover:text-blue-700">
      <Icon name="checkbox" />
    </div>
    {children}
  </AriaCheckbox>
);
