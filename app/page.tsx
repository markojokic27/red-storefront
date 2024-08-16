// External packages
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import { LinkAsButton } from '@/components/LinkAsButton';
import { Layout, LayoutColumn } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { Tag } from '@/components/Tag';

// Assets
import HeaderImage from '@/public/assets/images/header.png';
import BagCard from '@/public/assets/images/bagCard.png';
import TshirtCard2 from '@/public/assets/images/TshirtCard2.png';
import TshirtCard from '@/public/assets/images/TshirtCard.png';
import ImageProduct from '@/public/assets/shopImages/bag2blue.png';

export const metadata: Metadata = {
  title: 'Red shop',
  description: 'Red shop',
};

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden px-8 text-center text-white lg:px-24">
        <Image
          alt="header"
          src={HeaderImage}
          className="absolute h-full w-full object-cover"
        />
        <div className="relative">
          <h1 className="mt-12 text-xl font-black italic lg:mt-20 lg:text-8xl">
            Crystal and shine with red
          </h1>
          <LinkAsButton
            size="sm"
            variant="outline"
            colorScheme="white"
            className="mx-auto mt-7 lg:mt-12"
            href="/shop"
          >
            Shop now
          </LinkAsButton>
        </div>
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
            <LayoutColumn span={12} smSpan={4} className="mb-8 sm:mb-0">
              <Link href={''} className="relative">
                <Image src={BagCard} alt="Tote bag" />
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
            {[...Array(3)].map((_, index) => (
              <LayoutColumn key={index} span={12} smSpan={6} mdSpan={3}>
                <ProductCard
                  image={
                    <Image
                      src={ImageProduct}
                      alt="Product image"
                      width={552}
                      height={736}
                      className="object-cover"
                    />
                  }
                  name="Name"
                  price="€30"
                  originalPrice="€60"
                  tag={<Tag>-50%</Tag>}
                />
              </LayoutColumn>
            ))}
          </Layout>
        </div>
      </div>
      <Footer />
    </>
  );
}
