import * as React from 'react';
import { twMerge } from 'tailwind-merge';
type IconProps = React.ComponentPropsWithoutRef<'div'> & {
  colorScheme?: 'default' | 'white';
};

const UserIcon: React.FC<IconProps> = ({
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
          fill-rule="evenodd"
          d="M12 3.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM6.25 8a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
          clip-rule="evenodd"
        />
        <path
          fill={colorScheme === 'white' ? 'white' : 'black'}
          fill-rule="evenodd"
          d="M5.813 14.813A8.75 8.75 0 0 1 20.75 21h-1.5a7.25 7.25 0 1 0-14.5 0h-1.5a8.75 8.75 0 0 1 2.563-6.187Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default UserIcon;
