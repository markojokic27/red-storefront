'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '@/components/Icon';

import Logo from '@/public/assets/icons/Red_Logo.svg';
import Search from '@/public/assets/icons/icons/search.svg';
import User from '@/public/assets/icons/icons/user.svg';
import Bag from '@/public/assets/icons/icons/Bag.svg';
import Menu from '@/public/assets/icons/icons/menu.svg';

export default function Header() {
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgColor('white');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
    <div
        className={twMerge(
          `fixed w-full z-50 bg-${bgColor} top-0`,
          bgColor === 'white' && 'border-b-1 border-b-blue-700'
        )}
      >
        <div className="py-6 px-8 lg:px-24 max-w-[1440px] mx-auto flex justify-start">
          <Icon
            src={Logo}
            alt="logo"
            className="mr-28 w-16 lg:w-24"
            colorScheme={bgColor === 'white' ? 'default' : 'white'}
          />
          <div
            className={twMerge(
              'hidden md:flex',
              bgColor === 'white' ? 'text-black' : 'text-white'
            )}
          >
            <a href="" className="self-center mr-8 ">
              Shop
            </a>
            <a href="" className="self-center mr-8">
              About
            </a>
          </div>
          <div className="ml-auto gap-8 flex items-center">
            <Icon
              src={Search}
              alt="search"
              colorScheme={bgColor === 'white' ? 'default' : 'white'}
              className="hidden lg:block"
            />
            <div
              className={twMerge(
                'hidden md:flex uppercase',
                bgColor === 'white' ? 'text-black' : 'text-white'
              )}
            >
              hr
              <hr
                className={twMerge(
                  'h-6 mx-2 border-0 w-px',
                  bgColor === 'white' ? 'bg-black' : 'bg-white'
                )}
              />
              eur
            </div>
            <Icon
              src={User}
              alt="user"
              colorScheme={bgColor === 'white' ? 'default' : 'white'}
              className="hidden md:block"
            />
            <Icon
              src={Bag}
              alt="bag"
              colorScheme={bgColor === 'white' ? 'default' : 'white'}
            />
            <Icon
              src={Menu}
              alt="menu"
              colorScheme={bgColor === 'white' ? 'default' : 'white'}
              className="md:hidden"
            />
          </div>
        </div>
      </div>
  );
}