'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LinkAsButton } from '@/components/LinkAsButton';
import { Layout } from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import LayoutColumn from '@/components/LayoutColumn';

import HeaderImage from '@/public/assets/images/header.png';
import BagCard from '@/public/assets/images/bagCard.png';
import TshirtCard2 from '@/public/assets/images/TshirtCard2.png';
import TshirtCard from '@/public/assets/images/TshirtCard.png';
import products from '@/public/assets/shopImages/products';
import ProductCard from '@/components/ProductCard';

export default function Page() {
  return (
    <main className="h-screen text-center">
      <Header />
      <div className="w-full h-[100vh] -z-10 overflow-hidden flex flex-col items-center justify-center">
        <Image
          alt="header"
          src={HeaderImage}
          className="object-cover absolute -z-10 h-full w-full"
        ></Image>
        <h1 className="w-full px-4 text-xl lg:text-8xl font-BlackItalic italic text-white mt-12 lg:mt-20">
          Crystal and shine with red
        </h1>
        <LinkAsButton
          size="responsive"
          variant="outline"
          colorScheme="white"
          className="mx-auto mt-7 lg:mt-12"
          href="/shop"
        >
          Shop now
        </LinkAsButton>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-8 lg:mx-24 text-left font-BlackItalic italic text-blue-700 mt-20 mb-8 lg:mt-40 lg:mb-16">
          <Layout>
            <LayoutColumn span={12} smSpan={7}>
              <h2 className="text-md lg:text-xl">
                Embrace the laid-back allure of street fashion, radiating cool
                vibes and a dash of chill.
              </h2>
            </LayoutColumn>
          </Layout>
        </div>

        <div className="mx-8 lg:mx-24">
          <Layout>
            <LayoutColumn
              span={12}
              smSpan={4}
              className="relative mb-8 sm:mb-0"
            >
              <Link href={''}>
                <Image src={BagCard} alt="img"></Image>
                <p className="absolute top-2 left-8 lg:top-8 lg:left-12 text-white font-light text-xs lg:text-lg">
                  Fresh new drops
                </p>
              </Link>
            </LayoutColumn>
            <LayoutColumn
              span={12}
              smSpan={4}
              className="relative mb-8 sm:mb-0"
            >
              <Link href={''}>
                <Image src={TshirtCard} alt="img"></Image>
                <p className="absolute top-2 left-8 lg:top-8 lg:left-12 text-white font-light text-xs lg:text-lg">
                  Matz digs red
                </p>
              </Link>
            </LayoutColumn>
            <LayoutColumn span={12} smSpan={4} className="relative">
              <Link href={''}>
                <Image
                  src={TshirtCard2}
                  alt="img"
                  className="object-cover"
                ></Image>
                <p className="absolute top-2 left-8 lg:top-8 lg:left-10 text-white font-light text-xs lg:text-lg text-left">
                  Collectors essentials
                </p>
              </Link>
            </LayoutColumn>
          </Layout>
        </div>
        <div className="flex flex-wrap  align-middle mx-8 lg:mx-24 mt-20 lg:mt-40 mb-11 text-md lg:text-xl text-left font-BlackItalic italic text-blue-700 ">
          <h3>The beloved.</h3>
          <h3 className="text-grayscale-400">
            Catch yours before they sell out.
          </h3>
          <Button
            colorScheme="blue"
            variant="outline"
            className="mx-auto mt-4 sm:mt-0 md:mr-0 md:ml-auto"
          >
            Shop all
          </Button>
        </div>
        <div className="mx-8 lg:mx-24 mb-20 lg:mb-40">
          <Layout>
            <LayoutColumn
              span={12}
              smSpan={6}
              mdSpan={3}
              className="flex flex-col items-center w-full"
            >
              <ProductCard
                imgPath={products.imgPath}
                product={products.productsItems[2]}
                color={products.productsItems[2].colors[1]}
              />
            </LayoutColumn>
            <LayoutColumn
              span={12}
              smSpan={6}
              mdSpan={3}
              className="flex flex-col items-center w-full"
            >
              <ProductCard
                imgPath={products.imgPath}
                product={products.productsItems[2]}
                color={products.productsItems[2].colors[2]}
              />
            </LayoutColumn>
            <LayoutColumn
              span={12}
              smSpan={6}
              mdSpan={3}
              className="flex flex-col items-center w-full"
            >
              <ProductCard
                imgPath={products.imgPath}
                product={products.productsItems[9]}
                color={products.productsItems[9].colors[0]}
              />
            </LayoutColumn>
            <LayoutColumn
              span={12}
              smSpan={6}
              mdSpan={3}
              className="flex flex-col items-center w-full"
            >
              <ProductCard
                imgPath={products.imgPath}
                product={products.productsItems[0]}
                color={products.productsItems[0].colors[1]}
              />
            </LayoutColumn>
          </Layout>
        </div>
      </div>
      <Footer />
    </main>
  );
}
