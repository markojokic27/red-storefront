'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

type LayoutProps = React.ComponentPropsWithoutRef<'div'>;

export const Layout: React.FC<LayoutProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={twMerge('flex flex-wrap -mx-6', className)}
    >
      {children}
    </div>
  );
};
