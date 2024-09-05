// External packages
import Image from 'next/image';

// Components
import { Tag } from '@/components/Tag';
import { Icon } from '@/components/Icon';
import { LinkAsButton } from '@/components/LinkAsButton';

// Assets
import ImageOrder from '@/public/assets/images/Order.png';

export default function Page() {
  return (
    <div className="mb-20">
      <h2 className="mb-8 mt-22 text-lg font-black italic text-blue-700 lg:mb-16 lg:mt-24 lg:text-xl">
        My orders
      </h2>
      <div className="xl:min-w-176 mb-4 rounded-sm border p-4">
        <div className="mb-8 flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
          <div className="mb-4">
            <div className="flex text-md">
              <p className="mr-2 text-blue-700">Order: </p>
              <p>00000000004</p>
            </div>
            <div className="flex text-xs">
              <p className="mr-2 text-grayscale-400">Order date: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div>
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="mb-4 flex flex-col items-center gap-2 sm:mb-0 sm:flex-row">
            <Tag colorScheme="blue" className="px-4 py-1.5">
              <div className="flex items-center gap-2">
                <Icon name="package" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Packing
                </p>
              </div>
            </Tag>
            <div className="flex gap-1 text-2xs">
              <p className="text-grayscale-400">Estimate deliveri: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div>
            <LinkAsButton href="/my-orders/order" variant="outline" size="sm">
              Check status
            </LinkAsButton>
          </div>
        </div>
      </div>

      <div className="xl:min-w-176 mb-4 w-full rounded-sm border p-4">
        <div className="mb-8 flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
          <div className="mb-4">
            <div className="flex text-md">
              <p className="mr-2 text-blue-700">Order: </p>
              <p>00000000003</p>
            </div>
            <div className="flex text-xs">
              <p className="mr-2 text-grayscale-400">Order date: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="mb-4 flex flex-col items-center gap-2 sm:mb-0 sm:flex-row">
            <Tag colorScheme="blue" className="px-4 py-1.5">
              <div className="flex items-center gap-2">
                <Icon name="truck" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Delivering
                </p>
              </div>
            </Tag>
            <div className="flex gap-1 text-2xs">
              <p className="text-grayscale-400">Estimate deliveri: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div>
            <LinkAsButton href="/my-orders/order" variant="outline" size="sm">
              Check status
            </LinkAsButton>
          </div>
        </div>
      </div>

      <div className="xl:min-w-176 mb-4 w-full rounded-sm border p-4">
        <div className="mb-8 flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
          <div className="mb-4">
            <div className="flex text-md">
              <p className="mr-2 text-blue-700">Order: </p>
              <p>00000000002</p>
            </div>
            <div className="flex text-xs">
              <p className="mr-2 text-grayscale-400">Order date: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="mb-4 flex flex-col items-center gap-2 sm:mb-0 sm:flex-row">
            <Tag colorScheme="blue" className="px-4 py-1.5">
              <div className="flex items-center gap-2">
                <Icon name="check" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Delivered
                </p>
              </div>
            </Tag>
            <div className="flex gap-1 text-2xs">
              <p className="text-grayscale-400">Estimate deliveri: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div>
            <LinkAsButton href="/my-orders/order" variant="outline" size="sm">
              Check status
            </LinkAsButton>
          </div>
        </div>
      </div>
      <div className="xl:min-w-176 mb-4 w-full rounded-sm border p-4">
        <div className="mb-8 flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
          <div className="mb-4">
            <div className="flex text-md">
              <p className="mr-2 text-blue-700">Order: </p>
              <p>00000000001</p>
            </div>
            <div className="flex text-xs">
              <p className="mr-2 text-grayscale-400">Order date: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <Image
              src={ImageOrder}
              alt="Order image"
              height={100}
              width={75}
              className="rounded-sm"
            />
            <div className="relative">
              <Image
                src={ImageOrder}
                alt="Order image"
                height={100}
                width={75}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-sm bg-black text-xl text-white opacity-30">
                +4
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="mb-4 flex flex-col items-center gap-2 sm:mb-0 sm:flex-row">
            <Tag colorScheme="blue" className="px-4 py-1.5">
              <div className="flex items-center gap-2">
                <Icon name="check" className="h-3 w-3" />
                <p className="text-2xs leading-none text-grayscale-600">
                  Delivered
                </p>
              </div>
            </Tag>
            <Tag
              colorScheme="yellow"
              className="px-4 py-1.5 text-2xs leading-none text-grayscale-600"
            >
              Povrat
            </Tag>
            <div className="flex gap-1 text-2xs">
              <p className="text-grayscale-400">Estimate deliveri: </p>
              <p>29 June 2023</p>
            </div>
          </div>
          <div>
            <LinkAsButton href="/my-orders/order" variant="outline" size="sm">
              Check status
            </LinkAsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
