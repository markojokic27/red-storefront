'use client';
import Logo from '@/public/assets/icons/Red_Logo.svg';
import Search from '@/public/assets/icons/icons/search.svg';
import User from '@/public/assets/icons/icons/user.svg';
import Bag from '@/public/assets/icons/icons/Bag.svg';
import Menu from '@/public/assets/icons/icons/menu.svg';
import Icon from '@/components/Icon';
import aboutBag from '@/public/assets/images/aboutBag.png';
import HeaderImage from '@/public/assets/images/headerAbout.png';
import aboutSide from '@/public/assets/images/aboutSide.png';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Button from '@/components/Button';
import { Input, TextField } from 'react-aria-components';
const page = () => {
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
  return (
    <main className="">
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
        <div className="w-full px-8 lg:px-24 text-white max-w-2xl ">
          <h1 className="mt-20 md:mt-48 text-xl lg:text-4xl font-BlackItalic italic mb-12 ">
            The world of red
          </h1>
          <p className="mb-4 text-base bg-black bg-opacity-15 backdrop-blur-sm rounded">
            Welcome to Red, where style meets substance. Red is not just a
            street fashion brand; it's an attitude, a movement, and a way of
            life. Our passion lies in creating cool, youthful, and chill designs
            that resonate with the free spirits of today.
          </p>
          <p className="text-base bg-black bg-opacity-15 backdrop-blur-sm rounded">
            But it doesn't stop there; Red is more than just a brand; it's a
            philosophy that cherishes slow fashion and sustainability. We are
            committed to producing fashion with love and care, staying true to
            our core values of environmental responsibility and ethical
            practices.
          </p>
          <p className="mt-10 md:mt-36 xl:scroll-mt-60 text-md bg-black bg-opacity-15 backdrop-blur-sm rounded">
            Embrace the bold and step into the world of Red, where fashion is
            not just an outfit but an expression of authenticity.
          </p>
        </div>
      </div>
      <div className="px-8 lg:px-24 mb-40 max-w-[1440px] mx-auto">
        <div>
          <h2 className="text-lg lg:text-4xl text-blue-700 italic font-BlackItalic mt-24 mb-16">
            Breaking Boundaries <br /> Unisex Styles for All
          </h2>
        </div>
        <div className="md:flex flex-row-reverse md:gap-10 xl:gap-40 max-w-[1440px] mx-auto">
          <div className="md:flex-1">
            <p className="mb-10 xl:mb-40">
              At Red, we believe fashion should know no boundaries. Our designs
              break free from traditional gender norms, offering unisex styles
              that empower everyone to express themselves without limitations.
              Our collections are thoughtfully crafted, celebrating diversity
              and individuality. Whether you're rocking the city streets or
              dancing under the stars, our unisex streetwear is made to fit your
              vibe effortlessly.
            </p>
            <p className="mb-10 md:mb-0">
              Red is more than just a brand; it's a community that embraces
              uniqueness, and we invite you to join us in celebrating fashion
              that knows no boundaries.
            </p>
          </div>
          <div className="flex-1">
            <Image src={aboutBag} alt="img"></Image>
          </div>
        </div>
      </div>
      <div className="relative w-full mb-32 ">
        <div className="px-8 lg:px-16 max-w-[492px] z-20">
          <h3 className="text-lg lg:text-4xl text-blue-700 italic font-BlackItalic mb-12">
            Slow Fashion Made with Love
          </h3>
          <p className="mb-1">
            In a world of fast fashion, Red stands out as a beacon of conscious
            style. We are committed to breaking away from the relentless churn
            of trends and instead focus on producing timeless pieces that
            withstand the test of time.
          </p>
          <p className="mb-10 md:mb-40">
            Each garment is carefully curated, from design conception to
            production, with love and care. We believe that fashion should not
            only make you look good but also make you feel good about your
            choices.
          </p>
          <p>
            With Red, you can be confident that your fashion statement goes
            beyond aesthetics; it's a testament to your commitment to
            sustainability and the wellbeing of our planet. Embrace slow
            fashion, celebrate individuality, and discover the magic of Red
            streetwear.
          </p>
        </div>
        <div className="absolute  scale-50 z-10 object-cover">
          <Image src={aboutSide} alt="img"></Image>
        </div>
      </div>
      <div className="bg-blue-700 w-full px-8">
        <div className="pt-28 pb-20 mx-auto w-fit">
          <h3 className="text-lg lg:text-4xl text-white italic font-BlackItalic ">
            Welcome to red
          </h3>
        </div>
        <div className="max-w-[492px] mx-auto text-center text-white pb-28">
          <p>
            Where boldness meets passion, and style becomes your compass to
            self-expression. Join us, explore our collections, and be a part of
            our authentic fashion community.
          </p>
        </div>
      </div>
      <div className="bg-grayscale-20 text-blue-700">
        <div className="border-y-1 border-y-blue-700 text-left py-8 md:py-24 md:flex md:px-24 md:justify-between">
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
        <div className="flex px-8 md:px-24 text-xs">
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
          <div className="flex-1 py-6 pl-4 lg:flex lg:justify-center lg:items-center lg:pl-24">
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
            <ul className="flex justify-between py-6 border-b-1 px-8 md:px-24 border-b-blue-700 md:border-b-0 md:gap-10">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="py-4 px-8 md:pl-24">
            <p className="text-xs text-left">© 2023, Red</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
