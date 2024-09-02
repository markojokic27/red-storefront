'use client';

// External components
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

// Components
import { ButtonOwnProps } from '@/components/Button';

// Utilities
import { getButtonClassNames } from '@/utils/getButtonClassNames';

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
