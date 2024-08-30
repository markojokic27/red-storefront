// External packages
import Image from 'next/image';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { ShopProductCard } from '@/components/ShopProductCard';
import { Tag } from '@/components/Tag';

// Assets
import ImageProduct1 from '@/public/assets/images/productSingle1.png';
import ImageProduct2 from '@/public/assets/images/productSingle2.png';
import TshirtCard2 from '@/public/assets/images/TshirtCard2.png';
import TshirtCard from '@/public/assets/images/TshirtCard.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mb-40 mt-36">
        <LayoutRow className="md:flex-row-reverse">
          <LayoutColumn span={12} mdSpan={6} className="relative md:pl-20">
            <ShopProductCard
              name="Fresh T First"
              originalPrice="€30"
              description={
                <p>
                  Wet summer mate
                  <br />
                  Anti-draft in winter
                  <br />
                  100% cotton basic t-shirt
                  <br />
                  Wash smart - description on the label
                </p>
              }
              price="€15"
              tag={<Tag>-50%</Tag>}
              className="md:sticky md:top-36"
            />
          </LayoutColumn>
          <LayoutColumn
            span={12}
            mdSpan={6}
            className="flex flex-col items-center"
          >
            <Image
              src={ImageProduct1}
              alt="Product image 1"
              width={600}
              height={800}
            />
            <Image
              src={ImageProduct2}
              alt="Product image 2"
              width={600}
              height={800}
            />
            <Image
              src={TshirtCard}
              alt="Product image 3"
              width={600}
              height={800}
            />
            <Image
              src={TshirtCard2}
              alt="Product image 4"
              width={600}
              height={800}
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
