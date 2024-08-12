import * as React from 'react';
import { twMerge } from 'tailwind-merge';
type IconProps = React.ComponentPropsWithoutRef<'div'> & {
  colorScheme?: 'default' | 'white';
};

const CartIcon: React.FC<IconProps> = ({
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
          stroke={colorScheme === 'white' ? 'white' : 'black'}
          stroke-width="1.5"
          d="M4.75 7.75h14.5v11.5H4.75z"
        />
        <path
          fill={colorScheme === 'white' ? 'white' : 'black'}
          fill-rule="evenodd"
          d="M9.75 8.0005C9.75 8.0003 9.75 8 9 8s-.75-.0003-.75-.0006v-.0068l.0001-.0132a5.2294 5.2294 0 0 1 .0068-.1914 7.2307 7.2307 0 0 1 .0458-.506c.0514-.4113.1554-.973.37-1.5453.2135-.5693.5515-1.1894 1.0946-1.6723C10.326 3.568 11.0656 3.25 12 3.25c.9344 0 1.674.3179 2.2326.8144.5432.4829.8812 1.103 1.0946 1.6723.2147.5723.3187 1.134.3701 1.5453.026.2076.0391.3816.0458.506.0033.0623.005.1124.0059.1483.0005.018.0007.0325.0009.0431l.0001.0132V7.9987c0 .0003 0 .0013-.75.0013s-.75.0003-.75.0005v-.0029l-.0005-.0238a3.9913 3.9913 0 0 0-.0043-.1056 5.7166 5.7166 0 0 0-.0363-.4002c-.0423-.3387-.1258-.777-.2861-1.2047-.1616-.4307-.3861-.8106-.6867-1.0777C12.951 4.932 12.5656 4.75 12 4.75s-.951.1821-1.2361.4356c-.3006.2671-.5251.647-.6867 1.0777-.1603.4277-.2438.866-.2861 1.2047a5.7278 5.7278 0 0 0-.0363.4002 3.696 3.696 0 0 0-.0043.1056l-.0005.0238v.0029Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default CartIcon;
