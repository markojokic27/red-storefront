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
    <input type="checkbox" className='w-4 h-4 accent-black'/>
    {/* <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#050505"
        d="M.5.5h15v15H.5z"
        className="data-[selected=true]:hidden"
      />
    </svg>
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden data-[selected=true]:block'>
      <path fill="#050505" d="M0 0h16v16H0z" />
      <path stroke="#050505" d="M.5.5h15v15H.5z" />
      <path
        d="m12 5-5.5 5L4 7.727"
        stroke="#FDFDFD"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg> */}
  </AriaCheckbox>
);
