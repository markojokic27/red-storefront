import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import { LinkAsButton } from '@/components/LinkAsButton';
import { Layout, LayoutColumn } from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';

import HeaderImage from '@/public/assets/images/header.png';
import BagCard from '@/public/assets/images/bagCard.png';
import TshirtCard2 from '@/public/assets/images/TshirtCard2.png';
import TshirtCard from '@/public/assets/images/TshirtCard.png';
import products from '@/public/assets/shopImages/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Red shop',
  description: 'Red shop',
};

export default function Page() {
  return (
    <main className="h-screen text-center">
      <Header />
      <div className="-z-10 flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
        <Image
          alt="header"
          src={HeaderImage}
          className="absolute -z-10 h-full w-full object-cover"
        ></Image>
        <h1 className="mt-12 w-full px-4 text-xl font-black italic text-white lg:mt-20 lg:text-8xl">
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
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-8 mb-8 mt-20 text-left font-black italic text-blue-700 lg:mx-24 lg:mb-16 lg:mt-40">
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
                <p className="absolute left-8 top-2 text-xs font-light text-white lg:left-12 lg:top-8 lg:text-lg">
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
                <p className="absolute left-8 top-2 text-xs font-light text-white lg:left-12 lg:top-8 lg:text-lg">
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
                <p className="absolute left-8 top-2 text-left text-xs font-light text-white lg:left-10 lg:top-8 lg:text-lg">
                  Collectors essentials
                </p>
              </Link>
            </LayoutColumn>
          </Layout>
        </div>
        <div className="mx-8 mb-11 mt-20 flex flex-wrap text-left align-middle text-md font-black italic text-blue-700 lg:mx-24 lg:mt-40 lg:text-xl">
          <h3>The beloved.</h3>
          <h3 className="text-grayscale-400">
            Catch yours before they sell out.
          </h3>
          <Button
            colorScheme="blue"
            variant="outline"
            className="mx-auto mt-4 sm:mt-0 md:ml-auto md:mr-0"
            
          >
            Shop all
          </Button>
        </div>
        <div className="mx-8 mb-20 lg:mx-24 lg:mb-40">
          <Layout>
            <LayoutColumn
              span={12}
              smSpan={6}
              mdSpan={3}
              className="flex w-full flex-col items-center"
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
              className="flex w-full flex-col items-center"
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
              className="flex w-full flex-col items-center"
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
              className="flex w-full flex-col items-center"
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
