import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  size?: 'sm' | 'md';
};

export const Logo: React.FC<IconProps> = ({ ...rest }) => (
  <svg
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    width="95"
    height="36"
    viewBox="0 0 95 36"
    fill="currentcolor"
  >
    <g fill="currentcolor" clipPath="url(#a)">
      <path d="M58.597 36h-26.75L38.104.11h26.75l-2.104 11.963H50.068l-.222 1.053h12.739l-1.662 9.415H48.24l-.221 1.108h12.683l-2.105 12.35ZM66.184.11h14.677c10.357 0 14.843 5.04 13.126 14.899l-1.218 6.923c-.554 3.157-1.385 5.705-2.603 7.865C87.84 33.95 83.74 36 76.264 36H59.926L66.184.11Zm12.351 11.52L76.43 24.036h.056c1.052 0 1.384-.276 1.717-2.27l1.384-8.031c.333-1.772.222-2.105-.941-2.105h-.111ZM35.502 7.089c-.388-2.437-1.717-4.32-4.265-5.539C30.129.997 28.745.61 27.083.387A31.326 31.326 0 0 0 22.93.11H6.535L.277 36h14.4l1.883-10.69c.886 0 1.219.111 1.052 1.607-.055.221-.055.498-.11.83l-1.053 5.871L16.061 36h14.401l.332-1.828 1.163-6.535.11-.499c.831-4.763.222-6.812-3.6-7.643 2.438-.554 4.32-1.662 5.595-3.877.609-1.108 1.107-2.492 1.384-4.154.222-1.606.277-3.101.056-4.375Zm-14.954 6.203c-.166.83-.443 1.385-.831 1.661a1.323 1.323 0 0 1-.775.277h-.665l.665-3.766h.609c.332 0 .554.111.72.277.332.277.443.886.277 1.55Z" />
    </g>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h94.708v36H0z" />
    </clipPath>
  </svg>
);
