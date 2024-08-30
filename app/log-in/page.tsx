// External packages
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Header } from '@/components/Header';
import { Layout, LayoutRow, LayoutColumn } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

// Assets
import ImageAuthentication from '@/public/assets/images/authentication.png';

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-21">
        <LayoutRow>
          <LayoutColumn>
            <Image
              height={816}
              width={720}
              src={ImageAuthentication}
              alt="authentication image"
              className="fixed left-0 top-21 hidden h-auto w-1/2 object-cover md:block"
            />
          </LayoutColumn>
          <LayoutColumn
            mdSpan={5}
            mdOffset={7}
            className="md:flex md:justify-center"
          >
            <div className="py-8 md:max-w-96 md:px-4">
              <h2 className="mb-8 text-xl font-black italic text-blue-700 lg:mb-16 lg:text-3xl">
                Hey gorgeous , welcome back
              </h2>
              <Input label="Email" />
              <Input label="Password" />
              <Button className="w-full py-4">Log in</Button>
              <p className="pt-16 text-grayscale-400">
                Not red yet? Bro just{' '}
                <Link
                  className="text-blue-700 underline underline-offset-4"
                  href={'/register'}
                >
                  sign up.
                </Link>
              </p>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
