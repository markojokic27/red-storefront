'use client';
// External packages
import * as React from 'react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import Logo from '@/components/Logo';
import { Icon } from '@/components/icons/Icon';
import { Link, Button } from 'react-aria-components';

export const Header: React.FC<{
  headerTheme?: 'light' | 'dark';
}> = ({ headerTheme = 'dark' }) => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = headerRef.current;

    if (element) {
      element.dataset.theme = headerTheme;
    }

    const handleScroll = () => {
      if (element && headerTheme === 'light') {
        if (window.scrollY > window.innerHeight - 85) {
          element.dataset.theme = 'dark';
        } else {
          element.dataset.theme = 'light';
        }
      }
    };
  }, [headerTheme]);

  return (
    <div
      className={twMerge(
        `fixed z-50 w-full bg-${headerTheme} top-0`,
        headerTheme === 'dark' && 'border-b-1 border-b-blue-700'
      )}
    >
      <div className="mx-auto flex max-w-[1440px] justify-start px-8 py-6 lg:px-24">
        <Link href="/" className="focus:outline-none md:mr-28">
          <Logo
            className="lg:w-24"
            colorScheme={headerTheme === 'dark' ? 'blue' : 'white'}
          />
        </Link>
        <div
          className={twMerge(
            'hidden gap-8 md:flex',
            headerTheme === 'dark' ? 'text-black' : 'text-white'
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
              <Icon
                name="search"
                color={headerTheme === 'dark' ? 'default' : 'white'}
              />
            </Button>
          </li>
          <li
            className={twMerge(
              'hidden md:flex',
              headerTheme === 'dark' ? 'text-black' : 'text-white'
            )}
          >
            <Button className="uppercase focus:outline-none">hr</Button>
            <hr
              className={twMerge(
                'mx-2 h-6 w-px border-0',
                headerTheme === 'dark' ? 'bg-black' : 'bg-white'
              )}
            />
            <Button className="uppercase focus:outline-none">eur</Button>
          </li>
          <li className="hidden md:block">
            <Link href="/user" className="focus:outline-none">
              <Icon
                name="user"
                color={headerTheme === 'dark' ? 'default' : 'white'}
              />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="focus:outline-none">
              <Icon
                name="bag"
                color={headerTheme === 'dark' ? 'default' : 'white'}
              />
            </Link>
          </li>
          <li className="flex items-center md:hidden">
            <Button className="focus:outline-none">
              <Icon
                name="hamburger"
                color={headerTheme === 'dark' ? 'default' : 'white'}
              />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
