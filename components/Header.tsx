'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Logo from '@/components/Logo';
import SearchIcon from '@/components/icons/SearchIcon';
import UserIcon from '@/components/icons/UserIcon';
import CartIcon from '@/components/icons/CartIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import { Link, Button } from 'react-aria-components';

type HeaderProps = {
  theme?: string;
};

export default function Header({ theme }: HeaderProps) {
  const [headerTheme, setHeaderTheme] = useState(
    theme === 'white' ? 'white' : 'transparent'
  );

  useEffect(() => {
    if (theme !== 'white') {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight - 84) {
          setHeaderTheme('white');
        } else {
          setHeaderTheme('transparent');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [theme]);

  return (
    <div
      className={twMerge(
        `fixed z-50 w-full bg-${headerTheme} top-0`,
        headerTheme === 'white' && 'border-b-1 border-b-blue-700'
      )}
    >
      <div className="mx-auto flex max-w-[1440px] justify-start px-8 py-6 lg:px-24">
        <Link href="/" className="focus:outline-none md:mr-28">
          <Logo
            className="lg:w-24"
            colorScheme={headerTheme === 'white' ? 'blue' : 'white'}
          />
        </Link>
        <div
          className={twMerge(
            'hidden gap-8 md:flex',
            headerTheme === 'white' ? 'text-black' : 'text-white'
          )}
        >
          <Link href="/shop" className="self-center focus:outline-none">
            Shop
          </Link>
          <Link href="/about" className="self-center focus:outline-none">
            About
          </Link>
        </div>
        <ul className="ml-auto flex items-center gap-8">
          <li className="hidden md:flex md:items-center">
            <Button className="focus:outline-none">
              <SearchIcon
                colorScheme={headerTheme === 'white' ? 'default' : 'white'}
              />
            </Button>
          </li>
          <li
            className={twMerge(
              'hidden md:flex',
              headerTheme === 'white' ? 'text-black' : 'text-white'
            )}
          >
            <Button className="uppercase focus:outline-none">hr</Button>
            <hr
              className={twMerge(
                'mx-2 h-6 w-px border-0',
                headerTheme === 'white' ? 'bg-black' : 'bg-white'
              )}
            />
            <Button className="uppercase focus:outline-none">eur</Button>
          </li>
          <li className="hidden md:block">
            <Link href="/user" className="focus:outline-none">
              <UserIcon
                colorScheme={headerTheme === 'white' ? 'default' : 'white'}
              />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="focus:outline-none">
              <CartIcon
                colorScheme={headerTheme === 'white' ? 'default' : 'white'}
              />
            </Link>
          </li>
          <li className="flex items-center md:hidden">
            <Button className="focus:outline-none">
              <MenuIcon
                colorScheme={headerTheme === 'white' ? 'default' : 'white'}
              />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
