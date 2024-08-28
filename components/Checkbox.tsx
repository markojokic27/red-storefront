'use client';

// External packages
import * as React from 'react';
import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export const Checkbox: React.FC<
  React.ComponentPropsWithoutRef<'span'> & CheckboxProps
> = ({ children, className, isSelected, ...rest }) => (
  <AriaCheckbox
    {...rest}
    className={twMerge(
      'group relative inline-flex min-h-4 min-w-4 items-center justify-center border border-gray-400 hover:cursor-pointer hover:border-blue-700 hover:text-blue-700',
      className
    )}
  >
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute hidden h-4 w-4 scale-90 transition-transform duration-300 ease-in-out group-data-[selected=true]:block group-data-[selected=true]:scale-100"
      fill="currentcolor"
    >
      <path fill="currentcolor" d="M0 0h16v16H0z" />
      <path stroke="currentcolor" d="M.5.5h15v15H.5z" />
      <path
        d="m12 5-5.5 5L4 7.727"
        stroke="#FDFDFD"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  </AriaCheckbox>
);
