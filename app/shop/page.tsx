'use client';
import Logo from '@/public/assets/icons/Red_Logo.svg';
import Search from '@/public/assets/icons/icons/search.svg';
import User from '@/public/assets/icons/icons/user.svg';
import Bag from '@/public/assets/icons/icons/Bag.svg';
import Menu from '@/public/assets/icons/icons/menu.svg';
import Icon from '@/components/Icon';
import chevronDown from '@/public/assets/icons/icons/chevron-down.svg';
import {
  Button as AriaButton,
  ListBox,
  Label,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/Button';
import { Input, TextField } from 'react-aria-components';
const page = () => {
  const [bgColor, setBgColor] = useState('white');
  const [selectedValue, setSelectedValue] = useState('Whatever');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectItems = {
    whatever: 'Whatever',
    newest: 'Newest',
    lowestPrice: 'Lowest price',
    highestPrice: 'Highest price',
    discount: 'Discount',
  };

  return (
    <main className="">
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
      <div className="flex justify-between mt-40 mx-8 lg:mx-24 mb-40">
        <div className="text-xl lg:text-6xl font-BlackItalic italic text-blue-700">
          <h1>Shop</h1>
        </div>
        <Select className="" onOpenChange={setIsOpen} isOpen={isOpen}>
          <AriaButton className="text-grayscale-400 outline-none">
            <div className={`flex gap-2 ${isOpen ? 'text-black' : ''}`}>
              <Label>Sort by</Label>
              <Icon
                src={chevronDown}
                alt="svg"
                className={` transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <SelectValue
              className={`font-BlackItalic italic ${isOpen ? 'text-black' : ''}`}
            >
              {selectedValue}
            </SelectValue>
          </AriaButton>
          <Popover
            className={`border border-blue-700 bg-white rounded-sm w-60 flex gap-5 mr-5 lg:mr-[82px] cursor-pointer outline-none transition-[opacity] duration-500 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <ListBox className={`w-full outline-none `}>
              {Object.values(selectItems).map((item) => {
                const capitalItem = item[0].toUpperCase() + item.slice(1);
                return (
                  <ListBoxItem
                    key={item}
                    onAction={() => {
                      setSelectedValue(capitalItem);
                      setIsOpen(false);
                    }}
                    className={`border-none outline-none py-5 px-4 ${capitalItem === selectedValue ? 'text-blue-700 font-BlackItalic italic' : ''}`}
                  >
                    {capitalItem}
                  </ListBoxItem>
                );
              })}
            </ListBox>
          </Popover>
        </Select>
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
