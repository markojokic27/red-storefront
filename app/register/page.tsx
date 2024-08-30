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
            <div className="py-8">
              <h2 className="mb-8 text-xl font-black italic text-blue-700 lg:mb-16 lg:text-3xl">
                Hey gorgeous , welcome to red
              </h2>
              <div className="gap-6 md:flex">
                <Input label="First name" className="md:w-1/2" />
                <Input label="Last name" className="md:w-1/2" />
              </div>
              <Input label="Email" />
              <Input label="Password" />
              <Input label="Confirm password" />
              <Button className="w-full py-4">Register</Button>
              <p className="pt-16 text-grayscale-400">
                Already red? No worrier, just{' '}
                <Link
                  className="text-blue-700 underline underline-offset-4"
                  href={'/log-in'}
                >
                  log in.
                </Link>
              </p>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
