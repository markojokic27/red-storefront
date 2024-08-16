// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import * as Icons from '@/components/icons/index';

export type IconNames =
  | 'arrow'
  | 'bag'
  | 'chevron'
  | 'hamburger'
  | 'search'
  | 'user';

const baseClasses = 'w-6 h-6 flex-shrink-0';

export const Icon: React.FC<
  React.ComponentPropsWithoutRef<'svg'> & {
    name: IconNames;
    color?: string;
  }
> = ({ name, className, color, ...rest }) => (
  <>
    {name === 'search' && (
      <Icons.Search {...rest} color={color} className={twMerge(baseClasses, className)} />
    )}
     {name === 'bag' && (
      <Icons.Bag {...rest} color={color} className={twMerge(baseClasses, className)} />
    )}
    {name === 'chevron' && (
      <Icons.Chevron {...rest} color={color} className={twMerge(baseClasses, className)} />
    )}
    {name === 'hamburger' && (
      <Icons.Hamburger {...rest} color={color} className={twMerge(baseClasses, className)} />
    )}
    {name === 'user' && (
      <Icons.User {...rest} color={color} className={twMerge(baseClasses, className)} />
    )} 
  </>
);
