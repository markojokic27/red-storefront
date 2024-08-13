'use client';
import * as React from 'react';

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
import Icon from '@/components/Icon';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

import chevronDown from '@/public/assets/icons/icons/chevron-down.svg';
import products from '@/public/assets/shopImages/products';

export default function Page() {
  const [selectedValue, setSelectedValue] = React.useState('Whatever');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [visibleProducts, setVisibleProducts] = React.useState(16);

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
      <div className="mx-8 mt-28 sm:mb-40 sm:flex sm:justify-between md:mt-40 lg:mx-24">
        <div className="mb-8 text-2xl font-BlackItalic italic text-blue-700 sm:mb-0 lg:text-6xl">
          <h1>Shop</h1>
        </div>
        <Select className="" onOpenChange={setIsOpen} isOpen={isOpen}>
          <AriaButton
            aria-label="menu"
            className="color-grayscale-400 text-grayscale-400 outline-none"
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
            className={`mr-5 flex w-60 cursor-pointer gap-5 rounded-sm border border-blue-700 bg-white outline-none transition-[opacity] duration-500 ease-in-out lg:mr-[82px] ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <ListBox className={`w-full outline-none`}>
              {Object.values(selectItems).map((item, key) => {
                const capitalItem = item[0].toUpperCase() + item.slice(1);
                return (
                  <ListBoxItem
                    key={key}
                    onAction={() => {
                      setSelectedValue(capitalItem);
                      setIsOpen(false);
                    }}
                    className={`border-none px-4 py-5 outline-none ${capitalItem === selectedValue ? 'font-BlackItalic italic text-blue-700' : ''}`}
                  >
                    {capitalItem}
                  </ListBoxItem>
                );
              })}
            </ListBox>
          </Popover>
        </Select>
      </div>

      <div className="mx-8 mb-40 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 lg:mx-24 lg:grid-cols-4 lg:gap-12">
        {products.productsItems.map((product) => {
          return product.colors.map((color, key) => {
            return (
              <ProductCard
                key={key}
                product={product}
                color={color}
                imgPath={products.imgPath}
              />
            );
          });
        })}
      </div>
    </main>
  );
}
