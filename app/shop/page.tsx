'use client';

import Icon from '@/components/Icon';
import chevronDown from '@/public/assets/icons/icons/chevron-down.svg';
import products from '@/public/assets/shopImages/products';
import {
  Button as AriaButton,
  ListBox,
  Label,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  Input,
  TextField,
} from 'react-aria-components';
import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import Header  from '@/components/Header';

const page = () => {
  const [selectedValue, setSelectedValue] = useState('Whatever');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleProducts, setVisibleProducts] = useState(16);

  const selectItems = {
    whatever: 'Whatever',
    newest: 'Newest',
    lowestPrice: 'Lowest price',
    highestPrice: 'Highest price',
    discount: 'Discount',
  };
  console.log(products.productsItems.slice(0, visibleProducts).length);
  return (
    <main className="">
      <Header theme="white" />
      <div className="mt-28 md:mt-40 mx-8 lg:mx-24 sm:flex sm:justify-between sm:mb-40">
        <div className="text-2xl lg:text-6xl font-BlackItalic italic text-blue-700 mb-8 sm:mb-0">
          <h1>Shop</h1>
        </div>
        <Select className="" onOpenChange={setIsOpen} isOpen={isOpen}>
          <AriaButton
            aria-label="menu"
            className="text-grayscale-400 outline-none color-grayscale-400"
          >
            <div className={`flex gap-2 ${isOpen ? 'text-black' : ''}`}>
              <Label>Sort by</Label>
              <Icon
                src={chevronDown}
                alt="svg"
                className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
              {Object.values(selectItems).map((item, key) => {
                const capitalItem = item[0].toUpperCase() + item.slice(1);
                return (
                  <ListBoxItem
                    key={key}
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 mx-8 lg:mx-24 mb-40">
        {products.productsItems.map((product) => {
          return product.colors.map((color, key) => {
            return (
              <div
                key={key}
                className="flex flex-col items-center cursor-pointer group "
              >
                <div className="relative">
                  <Image
                    src={`${products.imgPath}${color.img}.png`}
                    alt={`${product.name} - ${color.color}`}
                    height={400}
                    width={400}
                  />
                  <div className="absolute top-0 -z-20 w-full h-full  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={`${products.imgPath}background.png`}
                      alt={`background`}
                      height={400}
                      width={400}
                    />
                  </div>
                  {color.discount > 0 && (
                    <div className="absolute bottom-2 right-2 bg-red-700 text-white text-xs px-1  sm:py-1.5 sm:px-4 rounded-full">
                      -{color.discount}%
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-start items-center sm:flex-row sm:justify-between w-full">
                  <div className="flex items-start h-full">
                    <p>{product.name}</p>
                  </div>
                  <div>
                    <p className={color.discount > 0 ? 'text-red-700' : ''}>
                      €{color.price * (1 - color.discount / 100)}
                    </p>
                    {color.discount > 0 && (
                      <p className="text-gray-400 line-through">
                        €{color.price}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex justify-center sm:justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 mt-4">
                  {product.colors.map((color, key) => {
                    return (
                      <div key={key}>
                        <Image
                          src={`${products.imgPath}logo${color.color}.png`}
                          alt="logo"
                          height={40}
                          width={40}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          });
        })}
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
