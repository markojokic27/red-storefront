'use client';

// External packages
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

// Components
import { Icon } from '@/components/Icon';

export const SelectShopCategory: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ({ className, ...rest }) => {
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
    <Select className="" onOpenChange={setIsOpen} isOpen={isOpen}>
      <AriaButton
        aria-label="menu"
        className="color-grayscale-400 text-grayscale-400 outline-none"
      >
        <div className={`flex gap-2 ${isOpen ? 'text-black' : ''}`}>
          <Label>Sort by</Label>
          <Icon
            name="chevron"
            color={isOpen ? 'black' : 'gray'}
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
            return (
              <ListBoxItem
                key={key}
                onAction={() => {
                  setSelectedValue(item);
                  setIsOpen(false);
                }}
                className={`border-none px-4 py-5 outline-none ${item === selectedValue ? 'font-black italic text-blue-700' : ''}`}
              >
                {item}
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </Select>
  );
};
