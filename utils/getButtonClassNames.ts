import { ButtonOwnProps } from '@/components/Button';
import { twJoin } from 'tailwind-merge';

export const getButtonClassNames = ({
  size = 'md',
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
    'rounded-sm text-base font-bold italic weight-700 border-20 flex items-center justify-center leading-none w-fit disabled:hover:cursor-not-allowed focus:outline-none',
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
    size === 'sm' && 'px-6 py-2 lg:px-8 lg:py-3',
    size === 'md' && 'px-8 py-4',
    isVisuallyDisabled &&
      variant === 'solid' &&
      'border-blue-100 text-blue-100 bg-blue-100 hover:bg-blue-100 text-white',
    isVisuallyDisabled &&
      variant === 'outline' &&
      'border-blue-100 text-blue-100  hover:bg-blue-100 hover:text-white',
    variant === 'link' &&
      'border-0 bg-transparent hover:bg-transparent underline underline-offset-4  disabled:bg-transparent disabled:text-blue-100 text-black p-0 m-0 h-auto font-normal not-italic focus:outline-none'
  );
