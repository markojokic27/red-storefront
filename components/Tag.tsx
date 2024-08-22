// External packages
import { twMerge } from 'tailwind-merge';

export const Tag: React.FC<
  React.ComponentPropsWithoutRef<'p'> & {
    colorScheme?: 'blue' | 'yellow' | 'gray' | 'red';
  }
> = ({ colorScheme = 'red', className, children, ...rest }) => (
  <p
    {...rest}
    className={twMerge(
      'w-fit rounded-full px-4 leading-6',
      colorScheme === 'blue' && 'bg-blue-100',
      colorScheme === 'yellow' && 'bg-yellow-400',
      colorScheme === 'gray' && 'bg-grayscale-100',
      colorScheme === 'red' && 'bg-red-700 text-white',
      className
    )}
  >
    {children}
  </p>
);
