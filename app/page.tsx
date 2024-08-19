// External packages
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import { LinkAsButton } from '@/components/LinkAsButton';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { NavigationCard } from '@/components/NavigationCard';
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
          alt="header image"
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
      <Layout>
        <div className="mb-8 mt-20 text-left font-black italic text-blue-700 lg:mb-16 lg:mt-40">
          <LayoutRow>
            <LayoutColumn span={12} smSpan={7}>
              <h2 className="text-md lg:text-xl">
                Embrace the laid-back allure of street fashion, radiating cool
                vibes and a dash of chill.
              </h2>
            </LayoutColumn>
          </LayoutRow>
        </div>
      </Layout>

      <Layout>
        <LayoutRow>
          <LayoutColumn span={12} smSpan={4} className="mb-8 sm:mb-0">
            <Link href={''}>
              <NavigationCard
                label="Fresh new drops"
                image={<Image src={BagCard} alt="Navigation card image" />}
              ></NavigationCard>
            </Link>
          </LayoutColumn>
          <LayoutColumn span={12} smSpan={4} className="relative mb-8 sm:mb-0">
            <Link href={''}>
              <NavigationCard
                label="Matz digs red"
                image={<Image src={TshirtCard} alt="Navigation card image"></Image>}
              ></NavigationCard>
            </Link>
          </LayoutColumn>
          <LayoutColumn span={12} smSpan={4} className="relative">
            <Link href={''}>
              <NavigationCard
                label="Collectors essentials"
                image={<Image src={TshirtCard2} alt="Navigation card image"></Image>}
              ></NavigationCard>
            </Link>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout className="mb-11 mt-20 flex flex-wrap text-left align-middle text-md font-black italic text-blue-700 lg:mt-40 lg:text-xl">
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
      </Layout>
      <Layout className="mb-20 lg:mb-40">
        <LayoutRow>
          {[...Array(4)].map((_, index) => (
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
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
