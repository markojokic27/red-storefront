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
  | 'trash'
  | 'user';

const baseClasses = 'w-6 h-6 flex-shrink-0';

export const Icon: React.FC<
  React.ComponentPropsWithoutRef<'svg'> & {
    name: IconNames;
    color?: string;
  }
> = ({ name, className, ...rest }) => (
  <>
    {name === 'search' && (
      <Icons.Search {...rest}  className={twMerge(baseClasses, className)} />
    )}
     {name === 'bag' && (
      <Icons.Bag {...rest}  className={twMerge(baseClasses, className)} />
    )}
    {name === 'chevron' && (
      <Icons.Chevron {...rest}  className={twMerge(baseClasses, className)} />
    )}
    {name === 'hamburger' && (
      <Icons.Hamburger {...rest}  className={twMerge(baseClasses, className)} />
    )}
    {name === 'user' && (
      <Icons.User {...rest}  className={twMerge(baseClasses, className)} />
    )} 
    {name === 'trash' && (
      <Icons.Trash {...rest}  className={twMerge(baseClasses, className)} />
    )}
  </>
);
