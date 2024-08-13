import * as React from 'react';
import { twMerge } from 'tailwind-merge';
type IconProps = React.ComponentPropsWithoutRef<'div'> & {
  colorScheme?: 'default' | 'white';
};

const MenuIcon: React.FC<IconProps> = ({
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
        fill="none"
      >
        <path
          fill={colorScheme === 'white' ? 'white' : 'black'}
          fillRule="evenodd"
          d="M2.25 5.25h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
