// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { LinkAsButton } from '@/components/LinkAsButton';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mb-52 mt-44">
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={3} lgSpan={6}>
            <h1 className="mb-16 text-xl font-black text-blue-700 lg:text-4xl">
              Thank you for your order!
            </h1>
            <p className="mb-6 text-md">
              Thank you for your purchase! We are pleased to confirm that your
              order has been successfully placed and will be processed shortly.
            </p>
            <p className="mb-16 text-md">
              We have sent you the receipt and order details via <b>e-mail</b>.
            </p>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn span={12} lgOffset={3} lgSpan={2} className="mb-16">
            <p>Your order number is:</p>
            <b>100002</b>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={2} lgSpan={2} className="mb-16">
            <p>Shipment expected:</p>
            <b>7 Aug - 8 Aug</b>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className='text-grayscale-600'>
          <LayoutColumn span={12} lgOffset={3} lgSpan={3} className="mb-16">
            <p>Shipping adress:</p>
            <p>Jovana Jerimic</p>
            <p>Duvanjs 3, 10000 Zagreb, Croatia</p>
            <p>+385 226 2266</p>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={1} lgSpan={2} className="mb-16">
            <p>Payment:</p>
            <p>Jovana Jerimic</p>
            <p>**** **** **** 1111</p>
            <p>Exp: 05/26</p>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={3} lgSpan={6}>
            <LinkAsButton href={'/'} className='w-full py-4'>Go back to home page</LinkAsButton>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
