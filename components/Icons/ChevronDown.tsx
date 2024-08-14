import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  colorScheme: 'gray' | 'black';
};

const ChevronDown: React.FC<IconProps> = ({
  colorScheme = 'black',
  className = '',
  ...rest
}) => {
  return (
      <svg
        {...rest}
        className={twMerge('', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={colorScheme === 'gray' ? '#898A8D' : '#050505'}
          fillRule="evenodd"
          d="m5.4697 9.5304 1.0607-1.0607L12 13.9394l5.4696-5.4697 1.0607 1.0607-6.5303 6.5303-6.5304-6.5303Z"
          clipRule="evenodd"
        />
      </svg>
  );
};

export default ChevronDown;
