'use client';

// External packages
import * as React from 'react';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { twMerge, twJoin } from 'tailwind-merge';
//import Icon from './icons/Icon';

export const getButtonClassNames = ({
  size,
  colorScheme,
  variant,
  isVisuallyDisabled,
}: {
  size: ButtonOwnProps['size'];
  colorScheme: ButtonOwnProps['colorScheme'];
  variant: ButtonOwnProps['variant'];
  isVisuallyDisabled: ButtonOwnProps['isVisuallyDisabled'];
}): string =>
  twJoin(
    'rounded-sm text-base font-bold italic weight-700 border-20 flex items-center justify-center leading-none w-fit disabled:hover:cursor-not-allowed',
    colorScheme === 'blue'
      ? 'border-blue-700 text-blue-700 bg-blue-700 hover:bg-blue-900 hover:border-blue-900 disabled:bg-blue-100'
      : colorScheme === 'gray'
        ? 'border-gray-700 text-gray-400 bg-gray-400 hover:bg-gray-600 disabled:bg-gray-100'
        : colorScheme === 'white'
          ? 'border-white text-white bg-white hover:bg-gray-600 disabled:bg-gray-100'
          : null,
    variant === 'solid' && 'text-white',
    variant === 'outline' &&
      'border-1 bg-transparent hover:bg-transparent hover:border-blue-900 hover:text-blue-900 disabled:bg-transparent disabled:border-blue-100 disabled:text-blue-100',
    size === 'sm' && 'px-6 py-2',
    size === 'md' && 'px-8 py-2',
    size === 'responsive' && 'px-6 py-2 lg:px-8 lg:py-2',
    isVisuallyDisabled && 'border-blue-100 text-blue-100 bg-gray-100'
  );

export type ButtonOwnProps = {
  variant?: 'solid' | 'outline';
  colorScheme?: 'blue' | 'gray' | 'white';
  size?: 'sm' | 'md' | 'responsive';
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
      getButtonClassNames({ size, colorScheme, variant, isVisuallyDisabled }),
      className
    )}
  >
    {/*Boolean(iconLeft) && <Icon src={iconLeft} className="mr-2"/>*/}
    {children}
    {/*Boolean(iconRight) && <Icon src={iconRight} className="ml-2" />*/}
  </AriaButton>
);
