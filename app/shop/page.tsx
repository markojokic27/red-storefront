// External packages
import Image from 'next/image';

// Components
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Footer } from '@/components/Footer';
import { Tag } from '@/components/Tag';
import { SelectShopCategory } from '@/components/SelectShopCategory';

// Assets
import ImageProduct from '@/public/assets/shopImages/bag2blue.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-28 md:mb-40 md:mt-40">
        <LayoutRow>
          <LayoutColumn span={12} className="sm:flex sm:justify-between">
            <div className="text-2xl font-black italic text-blue-700 lg:text-6xl">
              <h1>Shop</h1>
            </div>
            <SelectShopCategory />
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Layout className="mb-40">
        <LayoutRow>
          {[...Array(16)].map((_, index) => (
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
