// External packages
import Image from 'next/image';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';

// Assets
import aboutBag from '@/public/assets/images/aboutBag.png';
import HeaderImage from '@/public/assets/images/headerAbout.png';
import aboutSide from '@/public/assets/images/aboutSide.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="h-screen w-full justify-center overflow-hidden bg-black">
        <Image
          alt="header image"
          src={HeaderImage}
          className="absolute h-full w-full object-cover"
        />
        <Layout className="text-white">
          <LayoutRow className="h-full">
            <LayoutColumn span={12} smSpan={6} lgSpan={5}>
              <h1 className="mb-4 mt-16 text-xl font-black italic sm:mb-12 sm:mt-20 md:mt-32 lg:text-4xl xl:mt-44">
                The world of red
              </h1>
              <div className="text-base">
                <p className="mb-4">
                  Welcome to Red, where style meets substance. Red is not just a
                  street fashion brand; it's an attitude, a movement, and a way
                  of life. Our passion lies in creating cool, youthful, and
                  chill designs that resonate with the free spirits of today.
                </p>
                <p className="mb-4">
                  But it doesn't stop there; Red is more than just a brand; it's
                  a philosophy that cherishes slow fashion and sustainability.
                  We are committed to producing fashion with love and care,
                  staying true to our core values of environmental
                  responsibility and ethical practices.
                </p>
                <p className="md:text-md">
                  Embrace the bold and step into the world of Red, where fashion
                  is not just an outfit but an expression of authenticity.
                </p>
              </div>
            </LayoutColumn>
          </LayoutRow>
        </Layout>
      </div>
      <Layout className="mb-40">
        <LayoutRow>
          <LayoutColumn>
            <h2 className="mb-16 mt-24 text-lg font-black italic text-blue-700 lg:text-4xl">
              Breaking Boundaries <br /> Unisex Styles for All
            </h2>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="md:flex-row-reverse">
          <LayoutColumn mdSpan={6} lgSpan={5} lgOffset={1}>
            <p className="mb-10 xl:mb-40">
              At Red, we believe fashion should know no boundaries. Our designs
              break free from traditional gender norms, offering unisex styles
              that empower everyone to express themselves without limitations.
              Our collections are thoughtfully crafted, celebrating diversity
              and individuality. Whether you're rocking the city streets or
              dancing under the stars, our unisex streetwear is made to fit your
              vibe effortlessly.
            </p>
            <p className="mb-10 text-md md:mb-0">
              Red is more than just a brand; it's a community that embraces
              uniqueness, and we invite you to join us in celebrating fashion
              that knows no boundaries.
            </p>
          </LayoutColumn>
          <LayoutColumn mdSpan={6}>
            <Image src={aboutBag} alt="bag image" />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <div className="w-full overflow-hidden">
        <Layout className="relative md:pb-32">
          <LayoutRow>
            <LayoutColumn mdSpan={6} lgSpan={5}>
              <h3 className="mb-12 text-lg font-black italic text-blue-700 lg:text-4xl">
                Slow Fashion <br /> Made with Love
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
              <p className="text-md">
                With Red, you can be confident that your fashion statement goes
                beyond aesthetics; it's a testament to your commitment to
                sustainability and the wellbeing of our planet. Embrace slow
                fashion, celebrate individuality, and discover the magic of Red
                streetwear.
              </p>
            </LayoutColumn>
            <div className="static z-30 -mb-6 ml-auto max-w-[400px] md:absolute md:-right-1/4 md:top-0 lg:top-16 lg:max-w-[500px] xl:max-w-[750px]">
              <Image src={aboutSide} alt="side image" />
            </div>
          </LayoutRow>
        </Layout>
        <div className="w-full bg-blue-700 px-8 text-center text-white">
          <h3 className="mb-12 pt-28 text-lg font-black italic lg:text-4xl">
            Welcome to red
          </h3>
          <p className="mx-auto max-w-[492px] pb-32 text-md">
            Where boldness meets passion, and style becomes your compass to
            self-expression. Join us, explore our collections, and be a part of
            our authentic fashion community.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
