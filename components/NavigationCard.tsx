// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export const NavigationCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    label?: React.ReactNode;
    image: React.ReactNode;
  }
> = ({ label, image, className, ...rest }) => (
  <div {...rest} className={twMerge('relative cursor-pointer', className)}>
    {image}
    <div className="absolute left-2 top-2 text-xs font-light text-white lg:left-8 lg:top-8 lg:text-lg">
      {label}
    </div>
  </div>
);
