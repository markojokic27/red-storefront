'use client';

// External packages
import * as React from 'react';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

// Utilities
import { getButtonClassNames } from '@/utils/getButtonClassNames';

export type ButtonOwnProps = {
  variant?: 'solid' | 'outline' | 'link';
  colorScheme?: 'blue' | 'gray' | 'white';
  size?: 'sm' | 'md';
  isVisuallyDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button: React.FC<
  React.ComponentPropsWithoutRef<'button'> & AriaButtonProps & ButtonOwnProps
> = ({
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  isVisuallyDisabled,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}) => (
  <AriaButton
    {...rest}
    isDisabled={rest.disabled}
    className={twMerge(
      `${iconLeft || iconRight ? 'gap-2' : ''}`,
      getButtonClassNames({ size, colorScheme, variant, isVisuallyDisabled }),
      className
    )}
  >
    {Boolean(iconLeft) && iconLeft}
    {children}
    {Boolean(iconRight) && iconRight}
  </AriaButton>
);
