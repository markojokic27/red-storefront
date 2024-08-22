// External packages
import React from 'react';
import { twMerge } from 'tailwind-merge';
import * as Accordion from '@radix-ui/react-accordion';

// Components
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export const EmailInput: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Accordion.Item
      value="item1"
      {...rest}
      className={twMerge('group w-full border-b', className)}
    >
      <Accordion.Trigger className="trigger h-full w-full  py-8 text-left group-data-[state=open]:font-black group-data-[state=open]:text-blue-700">
        1. Email
      </Accordion.Trigger>

      <Accordion.Content className="accordion-content">
        <Input placeholder='Email' floatLabel={true} className="mb-4"/>
        <div className='flex gap-2 mb-10 items-start'>
          <input type='checkbox' className='min-w-4 min-h-4 accent-black'/>
          <p className='text-2xs text-grayscale-400'>What to get news and offers? Ok, yes and some discounts. But only if you subscribe.</p>
        </div>
        <Button size="sm" className="py-3 mb-8">Next</Button>
      </Accordion.Content>
    </Accordion.Item>
  );
};
