'use client';

// External components
import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

// Components
import { getButtonClassNames, ButtonOwnProps } from '@/components/Button';
import Icon from '@/components/Icon';

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
      getButtonClassNames({ size, colorScheme, variant, isVisuallyDisabled }),
      className
    )}
  >
    {Boolean(iconLeft) && <Icon src={iconLeft} className="mr-2" />}
    {children}
    {Boolean(iconRight) && <Icon src={iconRight} className="ml-2" />}
  </NextLink>
);
