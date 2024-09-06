'use client';

// External packages
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Link, Button } from 'react-aria-components';

// Components
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import { HamburgerMenu } from './HamburgerMenu';

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

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="group fixed top-0 z-40 w-full border-b-1 border-b-blue-700 bg-white data-[theme=light]:border-b-0 data-[theme=light]:bg-transparent"
    >
      <div className="mx-auto flex justify-start px-6 py-[18px] md:container md:p-6">
        <Link href="/" className="focus:outline-none md:mr-28">
          <Logo className="text-blue-700 group-data-[theme=light]:text-grayscale-10" />
        </Link>
        <div
          className={twMerge(
            'hidden gap-8 text-black group-data-[theme=light]:text-white md:flex'
          )}
        >
          <Link href="/shop" className="self-center focus:outline-none">
            Shop
          </Link>
          <Link href="/about" className="self-center focus:outline-none">
            About
          </Link>
        </div>
        <ul className="ml-auto flex items-center gap-8 text-black group-data-[theme=light]:text-white">
          <li className="hidden md:flex md:items-center">
            <Button className="focus:outline-none">
              <Icon name="search" />
            </Button>
          </li>
          <li
            className={twMerge(
              'hidden text-black group-data-[theme=light]:text-white md:flex',
              headerTheme === 'dark' ? 'text-black' : 'text-white'
            )}
          >
            <Button className="uppercase focus:outline-none">hr</Button>
            <hr className="mx-2 h-6 w-px border-0 bg-black group-data-[theme=light]:bg-white md:flex" />
            <Button className="uppercase focus:outline-none">eur</Button>
          </li>
          <li className="hidden md:block">
            <Link href="/person-security" className="focus:outline-none">
              <Icon name="user" />
            </Link>
          </li>
          <li>
            <Link href="/my-orders" className="h-6 w-6 focus:outline-none">
              <Icon name="bag" />
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <HamburgerMenu headerTheme={headerTheme} />
          </li>
        </ul>
      </div>
    </div>
  );
};
