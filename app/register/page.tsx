'use client';

// External packages
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

// Assets
import ImageAuthentication from '@/public/assets/images/authentication.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-21 md:flex md:px-0 lg:px-0">
        <div className="hidden w-1/2 md:block">
          <Image
            height={816}
            width={720}
            src={ImageAuthentication}
            alt="authentication image"
          />
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <div className="py-8 md:max-w-96 md:px-4">
            <h2 className="mb-8 text-xl font-black italic text-blue-700 lg:mb-16 lg:text-3xl">
              Hey gorgeous , welcome to red
            </h2>
            <div className="gap-6 md:flex">
              <Input label="First name" className="md:w-1/2"/>
              <Input label="Last name" className="md:w-1/2"/>
            </div>
            <Input label="Email" />
            <Input label="Password" />
            <Input label="Confirm password" />
            <Button className="w-full py-4">Register</Button>
            <p className="pt-16 text-grayscale-400">
              Already red? No worrier, just{' '}
              <Link
                className="text-blue-700 underline underline-offset-4"
                href={'/log-in'}
              >
                log in.
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
