'use client';

// External components
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

// Components
import { getButtonClassNames, ButtonOwnProps } from '@/components/Button';

export const LinkAsButton: React.FC<
  React.ComponentPropsWithoutRef<'a'> & NextLinkProps & ButtonOwnProps
> = ({
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  isVisuallyDisabled,
  iconLeft,
  iconRight,
  className,
  children,
  href,
  ...rest
}) => (
  <NextLink
    {...rest}
    href={href!}
    className={twMerge(
      `${iconLeft || iconRight ? 'gap-2' : ''}`,
      getButtonClassNames({ size, colorScheme, variant, isVisuallyDisabled }),
      className
    )}
  >
    {Boolean(iconLeft) && iconLeft}
    {children}
    {Boolean(iconRight) && iconRight}
  </NextLink>
);
