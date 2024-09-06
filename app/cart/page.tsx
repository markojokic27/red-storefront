// External packages
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Tag } from '@/components/Tag';
import { LinkAsButton } from '@/components/LinkAsButton';
import { Icon } from '@/components/Icon';
import { Counter } from '@/components/cart/Counter';

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

const CartProductCard: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    tag?: React.ReactNode;
    image: React.ReactNode;
  }
> = ({ tag, image, className, ...rest }) => {
  //const [quantity, setQuantity] = React.useState(1);
  return (
    <div
      {...rest}
      className={twMerge(
        'flex justify-start gap-3 border-t py-8 md:py-10',
        className
      )}
    >
      <div className="relative min-w-24">
        {image}
        {tag && <div className="absolute bottom-2 right-2 text-xs">{tag}</div>}
      </div>
      <div className="w-full">
        <div className="mb-6 w-full justify-between md:flex lg:mb-10">
          <div>
            <h3 className="text-sm font-black md:text-md">Fresh tote</h3>
            <p className="pt-1 text-2xs text-grayscale-400 md:text-base">
              White
            </p>
          </div>
          <div className="flex gap-2 md:block">
            <p className="text-xs font-bold text-red-700 md:text-md">€15</p>
            <p className="text-xs text-gray-400 line-through md:text-md">€35</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Counter value={1} />
          <div className="hover:cursor-pointer hover:text-blue-700">
            <Icon name="trash" />
          </div>
        </div>
      </div>
    </div>
  );
};
