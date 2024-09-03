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
  | 'visa-card'
  | 'calendar'
  | 'package'
  | 'check'
  | 'credit-card'
  | 'map-pin'
  | 'receipt'
  | 'undo'
  | 'truck'
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
      <Icons.Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'bag' && (
      <Icons.Bag {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'chevron' && (
      <Icons.Chevron {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'hamburger' && (
      <Icons.Hamburger {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'user' && (
      <Icons.User {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'trash' && (
      <Icons.Trash {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'visa-card' && (
      <Icons.VisaCard {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'calendar' && (
      <Icons.Calendar {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'package' && (
      <Icons.Package {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'check' && (
      <Icons.Check {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'credit-card' && (
      <Icons.CreditCard {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'map-pin' && (
      <Icons.MapPin {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'receipt' && (
      <Icons.Receipt {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'undo' && (
      <Icons.Undo {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === 'truck' && (
      <Icons.Truck {...rest} className={twMerge(baseClasses, className)} />
    )}
  </>
);
