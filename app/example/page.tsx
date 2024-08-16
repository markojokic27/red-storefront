import React from 'react';
import { Layout, LayoutColumn } from '@/components/Layout';


export default function Page() {
  return (
    <div className="px-8 lg:px-24 ">
      <div className=' -mx-6 flex'>
        <div className='px-6 w-column-4 lg:w-column-3'>
          <p className='bg-red-500'>asasasasas</p>
        </div>
        <div className='px-6 w-column-4 lg:w-column-3'>
          <p className='bg-red-500'>asasasasas</p>
        </div>
        <div className='px-6 w-column-4 lg:w-column-6'>
          <p className='bg-red-500'>asasasasas</p>
        </div>

      </div>
      {/* <Layout>
        <LayoutColumn span={4} mdSpan={1} lgSpan={3}>
          <p className="bg-gray-400">aaa</p>
        </LayoutColumn>
        <LayoutColumn span={4} mdSpan={1} lgSpan={3}>
          <p className="bg-gray-400">bbb</p>
        </LayoutColumn>
        <LayoutColumn span={4} mdSpan={2} lgSpan={6}>
          <p className="bg-gray-400">ccc</p>
        </LayoutColumn>
      </Layout> */}

      <div className="flex flex-wrap -mx-6">
        <div className=" w-[33.33333333333333%] ml-[0%]  md:w-[8.333333333333332%]  lg:w-[25%]  px-6">
          <p className="bg-gray-400">aaa</p>
        </div>
        <div className=" w-[33.33333333333333%] ml-[0%]  md:w-[8.333333333333332%]  lg:w-[25%]  px-6">
          <p className="bg-gray-400">bbb</p>
        </div>
        <div className=" w-[33.33333333333333%] ml-[0%]  md:w-[16.666666666666664%]  lg:w-[50%]  px-6">
          <p className="bg-gray-400">ccc</p>
        </div>
      </div>

      {/* <Layout>
        <LayoutColumn span={4} offset={4} mdSpan={8}>
          <p className="bg-gray-400">aaa</p>
        </LayoutColumn>
      </Layout>
      <div className='w-[33.333333333333333333333333%] ml-[66.666666666666666%] bg-red-200 h-10'></div>
      <Layout>
        <LayoutColumn span={4} offset={4} mdSpan={8}>
          <p className="bg-gray-400">aaa</p>
        </LayoutColumn>
      </Layout>

      <Layout>
        <LayoutColumn span={3} offset={9} mdSpan={2}>
          <p className='bg-black'>a</p>
        </LayoutColumn>
      </Layout> */}
    </div>
  );
}
