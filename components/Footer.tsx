'use client';
import { TextField, Input } from 'react-aria-components';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-grayscale-20 text-blue-700">
      <div className="border-y-1 border-y-blue-700 py-8 text-left md:flex md:justify-between md:px-24 md:py-24">
        <div className="max-w-xl px-8 md:px-0">
          <h3 className="mb-4 text-md font-black uppercase italic md:-mr-48 md:mb-6 md:text-lg lg:mr-0">
            Don't be shy. we know you want those discount coupons.
          </h3>
          <p className="mb-8 text-sm md:mb-0">
            We will also send you our latest drops and news.
          </p>
        </div>
        <div className="w-full justify-end px-8 md:flex md:w-auto md:items-end md:px-0">
          <TextField className="mb-6 max-w-80 md:mb-0 md:min-w-80">
            <Input
              placeholder="Your email"
              className="w-full border-1 border-blue-700 px-2 py-3 text-sm"
            ></Input>
          </TextField>
          <Button
            size="sm"
            className="border-1 py-3 text-sm md:ml-4"
            onClick={() => console.log('hello world')}
          >
            Suscribe
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap px-8 text-xs md:px-24">
        <div className="flex-1 items-center py-6 pr-4 text-left lg:flex">
          <p className="text-xs font-black uppercase lg:max-w-48 lg:text-lg">
            Nothing is green here
          </p>
        </div>
        <div className="flex-1 border-x-1 border-x-blue-700 px-4 py-6 lg:flex lg:items-center lg:justify-center">
          <ul className="flex flex-col gap-6 text-left lg:flex-row">
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
        <div className="flex-1 py-6 pl-4 lg:flex lg:items-center lg:justify-center lg:pl-24">
          <ul className="flex w-full flex-col gap-6 text-left lg:flex-row lg:justify-between lg:gap-0">
            <li>
              <Link href={''}>Instagram</Link>
            </li>
            <li>
              <Link href={''}>TikTok</Link>
            </li>
            <li>
              <Link href={''}>Pinterest</Link>
            </li>
            <li>
              <Link href={''}>Facebook</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="items-center border-t-1 border-t-blue-700 text-xs md:flex md:flex-row-reverse md:justify-between">
        <div>
          <ul className="flex justify-between border-b-1 border-b-blue-700 px-8 py-6 md:gap-10 md:border-b-0 md:px-24">
            <li>
              <Link href={''}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={''}>Cookie Policy</Link>
            </li>
            <li>
              <Link href={''}>Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="px-8 py-4 md:pl-24">
          <p className="text-left text-xs">© 2023, Red</p>
        </div>
      </div>
    </div>
  );
}
