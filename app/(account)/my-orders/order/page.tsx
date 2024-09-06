// External packages
import Image from 'next/image';

// Components
import { Tag } from '@/components/Tag';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { MyOrderDialogs } from '@/components/account/MyOrderDialogs';

// Assets
import ImageOrder from '@/public/assets/images/MyOrder.png';

export default function Page() {
  return (
    <div className="mb-20 lg:mb-16 lg:mt-24">
      <div className="mb-6 mt-16 flex items-end gap-6 leading-none">
        <h2 className="text-lg font-black italic text-blue-700 lg:text-xl">
          Order
        </h2>
        <p className="text-md lg:text-lg">00000000001</p>
      </div>
      <div className="xl:min-w-176 mb-4 flex flex-col items-center rounded-sm border p-4 md:block">
        <div className="mb-4 flex gap-2">
          <p className="text-grayscale-400">Estimate delivery</p>
          <p>1 — 3 Jul, 2023</p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-end">
          <div className="mb-4 flex flex-col items-center md:mb-0 md:flex-row">
            <Tag
              colorScheme="blue"
              className="border border-blue-700 px-4 py-1.5"
            >
              <div className="flex items-center gap-2">
                <Icon name="package" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Packing
                </p>
              </div>
            </Tag>
            <hr className="h-4 border-r border-blue-700 md:h-0 md:w-4 md:border-t" />
            <Tag
              colorScheme="blue"
              className="border border-blue-700 px-4 py-1.5"
            >
              <div className="flex items-center gap-2">
                <Icon name="truck" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Delivering
                </p>
              </div>
            </Tag>
            <hr className="h-4 border-r border-blue-700 md:h-0 md:w-4 md:border-t" />
            <Tag
              colorScheme="blue"
              className="border border-blue-700 px-4 py-1.5"
            >
              <div className="flex items-center gap-2">
                <Icon name="check" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Delivered
                </p>
              </div>
            </Tag>
          </div>
          <div className="md:ml-auto">
            <Button size="sm" variant="outline" className="py-3">
              Check Status
            </Button>
          </div>
        </div>
      </div>
      <div className="xl:min-w-176 mb-4 flex flex-col items-center rounded-sm border p-4 md:flex-row">
        <Icon name="calendar" className="mb-4 h-4 w-4 md:mb-0" />
        <p className="mb-4 leading-none text-grayscale-400 md:mb-0 md:ml-4">
          Order date
        </p>
        <p className="md:ml-auto">29 June, 2023</p>
      </div>
      <div className="xl:min-w-176 mb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center rounded-sm border p-4 md:flex-1 md:flex-row md:items-start">
          <Icon name="map-pin" className="h-4 w-4" />
          <p className="text-grayscale-400 md:ml-4">
            Delivery <br className="hidden md:block" /> address
          </p>
          <div className="text-center md:ml-auto md:text-right">
            <p>Jovana Jerimic</p>
            <p>Duvanjs 3</p>
            <p>10000 Zagreb</p>
            <p>Croata</p>
            <p>+385 226 2266</p>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-sm border p-4 md:flex-1 md:flex-row md:items-start">
          <Icon name="receipt" className="h-4 w-4" />
          <p className="text-grayscale-400 md:ml-4">
            Billing <br className="hidden md:block" /> address
          </p>
          <div className="text-center md:ml-auto md:text-right">
            <p>Jovana Jerimic</p>
            <p>Duvanjs 3</p>
            <p>10000 Zagreb</p>
            <p>Croata</p>
            <p>+385 226 2266</p>
          </div>
        </div>
      </div>

      <div className="xl:min-w-176 mb-4 flex flex-col items-center rounded-sm border px-1 py-4">
        <div className="flex w-full flex-col items-center rounded-sm p-2 md:flex-row md:items-stretch">
          <div>
            <Image
              src={ImageOrder}
              alt="Order image"
              height={200}
              width={150}
            />
          </div>
          <div className="flex w-full flex-col justify-between md:ml-8">
            <div>
              <div className="flex flex-col items-center md:items-start">
                <p>Sweat absorbent</p>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Color: </p>
                  <p>White</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Size: </p>
                  <p>S</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Quantity: </p>
                  <p>1</p>
                </div>
                <p>€30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 w-full px-2">
          <hr className="w-full px-2" />
        </div>
        <div className="flex w-full flex-col items-center rounded-sm bg-grayscale-30 p-2 md:flex-row md:items-stretch">
          <div>
            <Image
              src={ImageOrder}
              alt="Order image"
              height={200}
              width={150}
            />
          </div>
          <div className="flex w-full flex-col justify-between md:ml-8">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col items-center md:items-start">
                <p>Sweat absorbent</p>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Color: </p>
                  <p>White</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Size: </p>
                  <p>L</p>
                </div>
              </div>
              <Tag colorScheme="yellow" className="px-4 py-1.5">
                <p className="text-2xs leading-none text-grayscale-600">
                  Returned
                </p>
              </Tag>
            </div>
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Quantity: </p>
                  <p>1</p>
                </div>
                <p>€30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 w-full px-2">
          <hr className="w-full px-2" />
        </div>
        <div className="flex w-full flex-col items-center rounded-sm p-2 md:flex-row md:items-stretch">
          <div>
            <Image
              src={ImageOrder}
              alt="Order image"
              height={200}
              width={150}
            />
          </div>
          <div className="flex w-full flex-col justify-between md:ml-8">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col items-center md:items-start">
                <p>Sweat absorbent</p>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Color: </p>
                  <p>White</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Size: </p>
                  <p>XL</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Quantity: </p>
                  <p>1</p>
                </div>
                <p>€30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 w-full px-2">
          <hr className="w-full px-2" />
        </div>
        <div className="flex w-full flex-col items-center rounded-sm bg-grayscale-30 p-2 md:flex-row md:items-stretch">
          <div>
            <Image
              src={ImageOrder}
              alt="Order image"
              height={200}
              width={150}
            />
          </div>
          <div className="flex w-full flex-col justify-between md:ml-8">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col items-center md:items-start">
                <p>Sweat absorbent</p>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Color: </p>
                  <p>White</p>
                </div>
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Size: </p>
                  <p>M</p>
                </div>
              </div>
              <Tag colorScheme="yellow" className="px-4 py-1.5">
                <p className="text-2xs leading-none text-grayscale-600">
                  Returned
                </p>
              </Tag>
            </div>
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex gap-1 text-xs">
                  <p className="text-grayscale-400">Quantity: </p>
                  <p>1</p>
                </div>
                <p>€30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:min-w-176 mb-4 flex flex-col items-center rounded-sm border px-4 py-5 md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="mb-4 flex flex-col items-center gap-4 md:flex-row">
            <Icon name="credit-card" />
            <p className="text-grayscale-400">Payment</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start md:gap-4">
            <Icon name="visa-card" className="w-8" />
            <div className="mb-2 text-center md:mb-0 md:text-left">
              <p>Jovana Jerimic</p>
              <p>**** 0002</p>
              <p>Exp: 04/26</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:min-w-64">
          <div className="flex items-center justify-between">
            <p className="text-grayscale-400">Subtotal</p>
            <p>€120</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-grayscale-400">Shipping</p>
            <p>€15</p>
          </div>
          <div className="flex items-center justify-between text-md">
            <p>Total</p>
            <p>€120</p>
          </div>
          <p className="text-xs text-grayscale-400">Including 11.25 tax</p>
        </div>
      </div>
      <div className="xl:min-w-176 mb-4 flex flex-col items-center rounded-sm border px-4 py-5 md:items-start">
        <div className="mb-4 flex flex-col items-center gap-4 md:mb-8 md:flex-row">
          <Icon name="undo" />
          <p className="text-grayscale-400">Return</p>
        </div>
        <div className="flex w-full flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left">
          <p className="mb-4 text-xs text-grayscale-500 md:mb-0 md:max-w-96">
            Fit not right or it doesn’t go with your ascetic? No worries, we
            have 30 day return policy.
          </p>
          <MyOrderDialogs />
        </div>
      </div>
    </div>
  );
}
