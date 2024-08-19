// External packages
import * as React from 'react';

export const Search: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M11 3.75c-4.00406 0-7.25 3.24594-7.25 7.25 0 4.0041 3.24594 7.25 7.25 7.25 4.0041 0 7.25-3.2459 7.25-7.25 0-4.00406-3.2459-7.25-7.25-7.25ZM2.25 11c0-4.83249 3.91751-8.75 8.75-8.75 4.8325 0 8.75 3.91751 8.75 8.75 0 4.8325-3.9175 8.75-8.75 8.75-4.83249 0-8.75-3.9175-8.75-8.75Z"
      clipRule="evenodd"
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      d="M17 15.9393 22.3607 21.3 21.3 22.3607 15.9393 17 17 15.9393Z"
      clipRule="evenodd"
      fill="currentcolor"
    />
  </svg>
);