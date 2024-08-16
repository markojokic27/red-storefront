// External packages
import * as React from 'react';

export const Hamburger: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  color,
  ...rest
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill={color === 'white' ? 'white' : 'black'}
      fillRule="evenodd"
      d="M2.25 5.25h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Zm0 6h19.5v1.5H2.25v-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
