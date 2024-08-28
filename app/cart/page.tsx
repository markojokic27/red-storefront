// External packages
import Image from 'next/image';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { CartProductCard } from '@/components/CartProductCard';
import { Tag } from '@/components/Tag';
import { LinkAsButton } from '@/components/LinkAsButton';

// Assets
import ImageOrder from '@/public/assets/images/OrderCard.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mb-24 mt-44 md:mb-40">
        <LayoutRow>
          <LayoutColumn span={12} lgSpan={9}>
            <h1 className="mb-8 text-xl font-black text-blue-700 lg:mb-16 lg:text-4xl">
              Your shopping bag (3)
            </h1>
            <CartProductCard
              image={
                <Image
                  src={ImageOrder}
                  alt="Product image"
                  width={100}
                  height={100}
                />
              }
              tag={<Tag>-50%</Tag>}
            />
            <CartProductCard
              image={
                <Image
                  src={ImageOrder}
                  alt="Product image"
                  width={100}
                  height={100}
                />
              }
              tag={<Tag>-50%</Tag>}
            />
            <CartProductCard
              image={
                <Image
                  src={ImageOrder}
                  alt="Product image"
                  width={100}
                  height={100}
                />
              }
              tag={<Tag>-50%</Tag>}
            />
          </LayoutColumn>
          <LayoutColumn span={12} lgSpan={3}>
            <div className="mb-4 mt-12 flex justify-between">
              <p className="text-grayscale-400">Subtotal:</p>
              <p>€225</p>
            </div>
            <div className="flex justify-between border-b pb-6">
              <p className="text-grayscale-400">Shipping:</p>
              <p>Free</p>
            </div>
            <div className="mt-6 flex justify-between">
              <p className="text-lg font-black">Total:</p>
              <p className="text-lg font-black">€225</p>
            </div>
            <LinkAsButton
              href={'/checkout'}
              className="mt-10 w-full py-4 md:px-6"
            >
              Proceed to checkout
            </LinkAsButton>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
