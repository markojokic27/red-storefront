import * as React from 'react';
import { twMerge } from 'tailwind-merge';
type IconProps = React.ComponentPropsWithoutRef<'div'> & {
  colorScheme?: 'default' | 'white';
};

const SearchIcon: React.FC<IconProps> = ({
  colorScheme = 'black',
  className = '',
  ...rest
}) => {
  return (
    <div {...rest} className={twMerge('', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={colorScheme === 'white' ? 'white' : 'black'}
      >
        <path
          fill={colorScheme === 'white' ? 'white' : 'black'}
          fillRule="evenodd"
          d="M11 3.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM2.25 11a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z"
          clipRule="evenodd"
        />
        <path
          fill={colorScheme === 'white' ? 'white' : 'black'}
          fillRule="evenodd"
          d="m17 15.94 5.36 5.36-1.06 1.06L15.94 17 17 15.94Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
