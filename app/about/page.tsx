'use client';

import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Layout } from '@/components/Layout';
import LayoutColumn from '@/components/LayoutColumn';

import aboutBag from '@/public/assets/images/aboutBag.png';
import HeaderImage from '@/public/assets/images/headerAbout.png';
import aboutSide from '@/public/assets/images/aboutSide.png';

export default function Page() {
  return (
    <main className="">
      <Header />
      <div className="-z-10 h-[100vh] w-full justify-center overflow-hidden">
        <Image
          alt="header"
          src={HeaderImage}
          className="absolute -z-10 h-full w-full object-cover"
        ></Image>
        <div className="mx-auto w-full max-w-[1440px] px-8 text-white lg:px-24">
          <Layout>
            <LayoutColumn span={12} smSpan={6} lgSpan={5}>
              <h1 className="mb-4 mt-16 text-xl font-BlackItalic italic sm:mb-12 sm:mt-20 md:mt-32 lg:mt-44 lg:text-4xl">
                The world of red
              </h1>
              <p className="mb-4 rounded bg-black bg-opacity-15 text-base backdrop-blur-sm">
                Welcome to Red, where style meets substance. Red is not just a
                street fashion brand; it's an attitude, a movement, and a way of
                life. Our passion lies in creating cool, youthful, and chill
                designs that resonate with the free spirits of today.
              </p>
              <p className="rounded bg-black bg-opacity-15 text-base backdrop-blur-sm">
                But it doesn't stop there; Red is more than just a brand; it's a
                philosophy that cherishes slow fashion and sustainability. We
                are committed to producing fashion with love and care, staying
                true to our core values of environmental responsibility and
                ethical practices.
              </p>
              <p className="mt-4 rounded bg-black bg-opacity-15 backdrop-blur-sm sm:mt-24 md:text-md xl:mt-44">
                Embrace the bold and step into the world of Red, where fashion
                is not just an outfit but an expression of authenticity.
              </p>
            </LayoutColumn>
          </Layout>
          
        </div>
      </div>
      <div className="mx-auto mb-40 max-w-[1440px] px-8 lg:px-24">
        <div>
          <h2 className="mb-16 mt-24 text-lg font-BlackItalic italic text-blue-700 lg:text-4xl">
            Breaking Boundaries <br /> Unisex Styles for All
          </h2>
        </div>
        <div className="mx-auto max-w-[1440px]">
          <Layout className="md:flex-row-reverse">
            <LayoutColumn mdSpan={6} lgSpan={5} lgOffset={1}>
              <p className="mb-10 xl:mb-40">
                At Red, we believe fashion should know no boundaries. Our
                designs break free from traditional gender norms, offering
                unisex styles that empower everyone to express themselves
                without limitations. Our collections are thoughtfully crafted,
                celebrating diversity and individuality. Whether you're rocking
                the city streets or dancing under the stars, our unisex
                streetwear is made to fit your vibe effortlessly.
              </p>
              <p className="mb-10 md:mb-0 text-md">
                Red is more than just a brand; it's a community that embraces
                uniqueness, and we invite you to join us in celebrating fashion
                that knows no boundaries.
              </p>
            </LayoutColumn>
            <LayoutColumn mdSpan={6}>
              <Image src={aboutBag} alt="img"></Image>
            </LayoutColumn>
          </Layout>
          
        </div>
      </div>
      <div className="relative w-full md:mb-32">
        <div className="z-20 mx-auto max-w-[1440px] px-8 lg:px-24">
          <Layout>
            <LayoutColumn mdSpan={6} lgSpan={5}>
              <h3 className="mb-12 text-lg font-BlackItalic italic text-blue-700 lg:text-4xl">
                Slow Fashion Made with Love
              </h3>
              <p className="mb-4">
                In a world of fast fashion, Red stands out as a beacon of
                conscious style. We are committed to breaking away from the
                relentless churn of trends and instead focus on producing
                timeless pieces that withstand the test of time.
              </p>
              <p className="mb-10 lg:mb-40">
                Each garment is carefully curated, from design conception to
                production, with love and care. We believe that fashion should
                not only make you look good but also make you feel good about
                your choices.
              </p>
              <p className='text-md'>
                With Red, you can be confident that your fashion statement goes
                beyond aesthetics; it's a testament to your commitment to
                sustainability and the wellbeing of our planet. Embrace slow
                fashion, celebrate individuality, and discover the magic of Red
                streetwear.
              </p>
            </LayoutColumn>
          </Layout>
        </div>
        <div className="static z-10 -mb-6 ml-auto max-w-[400px] md:absolute md:right-0 md:top-0 lg:max-w-[500px] xl:max-w-[650px]">
          <Image src={aboutSide} alt="img"></Image>
        </div>
      </div>
      <div className="w-full bg-blue-700 px-8 text-center text-white">
        <h3 className="mb-12 pt-28 text-lg font-BlackItalic italic lg:text-4xl">
          Welcome to red
        </h3>
        <p className="mx-auto max-w-[492px] pb-32 text-md">
          Where boldness meets passion, and style becomes your compass to
          self-expression. Join us, explore our collections, and be a part of
          our authentic fashion community.
        </p>
      </div>
      <Footer />
    </main>
  );
}
