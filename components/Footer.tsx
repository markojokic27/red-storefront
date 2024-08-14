"use client";
import { TextField, Input } from 'react-aria-components';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-grayscale-20 text-blue-700">
      <div className="border-y-1 border-y-blue-700 text-left py-8 md:py-24 md:flex md:px-24 md:justify-between">
        <div className="px-8 md:px-0 max-w-xl">
          <h3 className="uppercase  font-black italic md:-mr-48 lg:mr-0 text-md md:text-lg mb-4 md:mb-6">
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
      <div className="flex flex-wrap px-8 md:px-24 text-xs">
        <div className="flex-1 py-6 pr-4 text-left lg:flex items-center">
          <p className="text-xs uppercase font-black lg:text-lg lg:max-w-48">
            Nothing is green here
          </p>
        </div>
        <div className="flex-1 border-x-1 border-x-blue-700 py-6 px-4 lg:flex lg:justify-center lg:items-center">
          <ul className="text-left flex flex-col gap-6 lg:flex-row ">
            <li>
              <Link href={''}>FAQ</Link>
            </li>
            <li>
              <Link href={''}>Help</Link>
            </li>
            <li>
              <Link href={''}>Delivery</Link>
            </li>
            <li>
              <Link href={''}>Returns</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 py-6 pl-4 lg:flex lg:justify-center lg:items-center lg:pl-24">
          <ul className="text-left flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between w-full">
            <li><Link href={''}>Instagram</Link></li>
            <li><Link href={''}>TikTok</Link></li>
            <li><Link href={''}>Pinterest</Link></li>
            <li><Link href={''}>Facebook</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t-1 border-t-blue-700 text-xs md:flex md:flex-row-reverse md:justify-between items-center">
        <div>
          <ul className="flex justify-between py-6 border-b-1 px-8 md:px-24 border-b-blue-700 md:border-b-0 md:gap-10">
            <li><Link href={''}>Privacy Policy</Link></li>
            <li><Link href={''}>Cookie Policy</Link></li>
            <li><Link href={''}>Terms of Use</Link></li>
          </ul>
        </div>
        <div className="py-4 px-8 md:pl-24">
          <p className="text-xs text-left">© 2023, Red</p>
        </div>
      </div>
    </div>
  );
}
