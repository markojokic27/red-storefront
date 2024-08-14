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
} from 'react-aria-components';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Layout, LayoutColumn } from '@/components/Layout';
import Footer from '@/components/Footer';
import ChevronDown from '@/components/Icons/ChevronDown';

import products from '@/public/assets/shopImages/products';

export default function Page() {
  const [selectedValue, setSelectedValue] = React.useState('Whatever');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const selectItems = {
    whatever: 'Whatever',
    newest: 'Newest',
    lowestPrice: 'Lowest price',
    highestPrice: 'Highest price',
    discount: 'Discount',
  };
  return (
    <main className="">
      <Header theme="white" />
      <div className="mx-auto mt-28 max-w-[1440px] px-8 sm:flex sm:justify-between md:mb-40 md:mt-40 lg:px-24">
        <div className="text-2xl font-black italic text-blue-700 lg:text-6xl">
          <h1>Shop</h1>
        </div>
        <Select className="" onOpenChange={setIsOpen} isOpen={isOpen}>
          <AriaButton
            aria-label="menu"
            className="color-grayscale-400 text-grayscale-400 outline-none"
          >
            <div className={`flex gap-2 ${isOpen ? 'text-black' : ''}`}>
              <Label>Sort by</Label>
              <ChevronDown
                colorScheme={isOpen ? 'black' : 'gray'}
                className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <SelectValue
              className={`font-black italic ${isOpen ? 'text-black' : ''}`}
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
                    className={`border-none px-4 py-5 outline-none ${capitalItem === selectedValue ? 'font-black italic text-blue-700' : ''}`}
                  >
                    {capitalItem}
                  </ListBoxItem>
                );
              })}
            </ListBox>
          </Popover>
        </Select>
      </div>

      <div className="mx-auto mb-40 max-w-[1440px] px-8 lg:px-24">
        <Layout>
          {products.productsItems.map((product) => {
            return product.colors.map((color, key) => {
              return (
                <LayoutColumn span={6} mdSpan={3} key={key}>
                  <ProductCard
                    cardKey={key}
                    product={product}
                    color={color}
                    imgPath={products.imgPath}
                  />
                </LayoutColumn>
              );
            });
          })}
        </Layout>
      </div>
      <Footer />
    </main>
  );
}
