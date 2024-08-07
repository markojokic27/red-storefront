'use client';
import Logo from '@/public/assets/icons/Red_Logo.svg';
import Search from '@/public/assets/icons/icons/search.svg';
import User from '@/public/assets/icons/icons/user.svg';
import Bag from '@/public/assets/icons/icons/Bag.svg';
import Menu from '@/public/assets/icons/icons/menu.svg';
import Icon from '@/components/Icon';
import HeaderImage from '@/public/assets/images/header.png';
import Image from 'next/image';
import Button from '@/components/Button';
import BagCard from '@/public/assets/images/bagCard.png';
import TshirtCard2 from '@/public/assets/images/TshirtCard2.png';
import TshirtCard from '@/public/assets/images/TshirtCard.png';
import blueTshirt from '@/public/assets/images/blueTshirt.png';
import blackTshirt from '@/public/assets/images/blackTshirt.png';
import whiteSwet from '@/public/assets/images/whiteSwet.png';
import blueBag from '@/public/assets/images/blueBag.png';
import { TextField, Input } from 'react-aria-components';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
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
  return (
    <main className="h-screen text-center">
      <div className={`fixed w-full z-50 bg-${bgColor}`}>
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
      <div className="w-full h-[100vh] -z-10 justify-center overflow-hidden">
        <Image
          alt="header"
          src={HeaderImage}
          className="object-cover absolute -z-10 h-full w-full"
        ></Image>
        <h1 className="mt-96 mx-auto w-full px-4 text-xl lg:text-8xl font-BlackItalic italic text-white">
          Crystal and shine with red
        </h1>
        <Button
          size="responsive"
          variant="outline"
          colorScheme="white"
          className="mx-auto mt-7 lg:mt-12"
        >
          Shop now
        </Button>
      </div>
      <div className="mx-8 lg:mx-24 text-left font-BlackItalic italic text-blue-700 ">
        <h2 className="text-md mt-20 mb-8 lg:text-xl lg:mt-40 lg:mb-16 lg:max-w-xl">
          Embrace the laid-back allure of street fashion, radiating cool vibes
          and a dash of chill.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row mx-auto px-8 lg:px-24 gap-8 lg:16">
        <div className="flex-1  relative">
          <Image src={BagCard} alt="img"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
            Fresh new drops
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={TshirtCard} alt="img"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
            Matz digs red
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={TshirtCard2} alt="img" className="object-cover"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
            Collectors essentials
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  align-middle mx-8 lg:mx-24 mt-20 lg:mt-40 mb-11 text-md lg:text-xl text-left font-BlackItalic italic text-blue-700 ">
        <h3>The beloved.</h3>
        <h3 className="text-grayscale-400">
          Catch yours before they sell out.
        </h3>
        <Button
          colorScheme="blue"
          variant="outline"
          className="mx-auto mt-4 sm:mt-0 md:mr-0 md:ml-auto"
        >
          Shop all
        </Button>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-4 mx-8 lg:mx-24 gap:8 lg:gap-12 mb-20 lg:mb-40">
        <div className="flex flex-col items-center w-full">
          <Image src={blueTshirt} alt="img"></Image>
          <div className="flex justify-between w-full">
            <p>Fresh T Second</p>
            <p>€60</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Image src={blackTshirt} alt="img"></Image>
          <div className="flex justify-between w-full">
            <p>Fresh T Second</p>
            <p>€60</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Image src={whiteSwet} alt="img" className="object-cover"></Image>
          <div className="flex justify-between w-full">
            <p>Base 02 Swet </p>
            <p>€90</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <Image src={blueBag} alt="img"></Image>
          <div className="flex justify-between w-full">
            <p>Fresh Tote</p>
            <p>€30</p>
          </div>
        </div>
      </div>
      <div className="bg-grayscale-20 text-blue-700">
        <div className="border-y-1 border-y-blue-700 text-left py-8 md:py-16 md:flex md:px-16 md:justify-between">
          <div className="px-8 md:px-0 max-w-xl">
            <h3 className="uppercase  font-BlackItalic italic  text-md md:text-lg mb-4 md:mb-6">
              Don't be shy. we know you want those discount coupons.
            </h3>
            <p className="mb-8 md:mb-0 text-sm">
              We will also send you our latest drops and news.
            </p>
          </div>
          <div className="px-8 md:px-0 w-full md:flex md:items-end justify-end md:w-auto">
            <TextField className="mb-6 md:mb-0 max-w-80 md:min-w-80">
              <Input
                placeholder="Your email"
                className="px-2 py-3 text-sm border-1 border-blue-700 w-full"
              ></Input>
            </TextField>
            <Button size="sm" className="text-sm py-3 md:ml-4 border-1">
              Suscribe
            </Button>
          </div>
        </div>
        <div className="flex px-8 md:px-16 text-xs">
          <div className="flex-1 py-6 pr-4 text-left lg:flex items-center">
            <p className="text-xs uppercase font-BlackItalic lg:text-lg lg:max-w-48">
              Nothing is green here
            </p>
          </div>
          <div className="flex-1 border-x-1 border-x-blue-700 py-6 px-4 lg:flex lg:justify-center lg:items-center">
            <ul className="text-left flex flex-col gap-6 lg:flex-row ">
              <li>FAQ</li>
              <li>Help</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="flex-1 py-6 pl-4 lg:flex lg:justify-center lg:items-center lg:pl-16">
            <ul className="text-left flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between w-full">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Pinterest</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="border-t-1 border-t-blue-700 text-xs md:flex md:flex-row-reverse md:justify-between items-center">
          <div>
            <ul className="flex justify-between py-6 border-b-1 px-8 md:px-16 border-b-blue-700 md:border-b-0 md:gap-10">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="py-4 px-8">
            <p className="text-xs text-left">© 2023, Red</p>
          </div>
        </div>
      </div>
    </main>
  );
}
