"use client";
import Logo from "@/public/assets/icons/Red_Logo.svg";
import Search from "@/public/assets/icons/icons/search.svg";
import User from "@/public/assets/icons/icons/user.svg";
import Bag from "@/public/assets/icons/icons/Bag.svg";
import Menu from "@/public/assets/icons/icons/menu.svg";
import Icon from "@/components/Icon";
import HeaderImage from "@/public/assets/images/header.png";
import Image from "next/image";
import Button from "@/components/Button";
import BagCard from "@/public/assets/images/bagCard.png";
import TshirtCard2 from "@/public/assets/images/TshirtCard2.png";
import TshirtCard from "@/public/assets/images/TshirtCard.png";

export default function Home() {
  return (
    <main className="h-screen text-center">
      <div className="fixed w-full bg-transparent z-50">
        <div className="py-6 px-8 lg:px-24 max-w-90 flex justify-start">
          <Icon
            src={Logo}
            alt="logo"
            className="mr-28 w-16 lg:w-24"
            colorScheme="white"
          />
          <div className="hidden lg:flex text-white">
            <a href="" className="self-center mr-8 ">
              Shop
            </a>
            <a href="" className="self-center mr-8">
              About
            </a>
          </div>
          <div className="ml-auto gap-8 flex items-center">
            <Icon
              src={Search}
              alt="search"
              colorScheme="white"
              className="hidden lg:block"
            />
            <div className="text-white hidden lg:flex uppercase">
              hr
              <hr className="h-6 mx-2 border-0 w-px bg-white" />
              eur
            </div>
            <Icon
              src={User}
              alt="user"
              colorScheme="white"
              className="hidden lg:block"
            />
            <Icon src={Bag} alt="bag" colorScheme="white" />
            <Icon src={Menu} alt="menu" colorScheme="white" />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] -z-10 justify-center overflow-hidden">
        <Image
          alt="header"
          src={HeaderImage}
          className="object-cover absolute -z-10 h-full w-full"
        ></Image>
        <h1 className="mt-96 mx-auto w-full px-4 text-xl lg:text-8xl font-BlackItalic italic text-white">
          Crystal and shine with red
        </h1>
        <Button
          size="responsive"
          variant="outline"
          colorScheme="white"
          className="mx-auto mt-7 lg:mt-12"
        >
          Shop now
        </Button>
      </div>
      <div className="mx-8 lg:mx-24 text-left font-BlackItalic italic text-blue-700 ">
        <h2 className="text-md mt-20 mb-8 lg:text-xl lg:mt-40 lg:mb-16 lg:max-w-xl">
          Embrace the laid-back allure of street fashion, radiating cool vibes
          and a dash of chill.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row mx-auto px-8 lg:px-24 gap-8 lg:16">
        <div className="flex-1  relative">
          <Image src={BagCard} alt="img"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
            Fresh new drops
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={TshirtCard} alt="img"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
          Matz digs red
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={TshirtCard2} alt="img" className="object-cover"></Image>
          <p className="absolute top-2 left-2 lg:top-8 lg:left-8 text-white font-light text-xs lg:text-lg">
          Collectors essentials
          </p>
        </div>
      </div>
      <div className="flex flex-wrap align-middle mx-8 lg:mx-24 mt-20 lg:mt-40 mb-11 text-md lg:text-xl text-left font-BlackItalic italic text-blue-700 ">
        <h3>The beloved.</h3>
        <h3 className="text-grayscale-400">Catch yours before they sell out.</h3>
        <Button colorScheme="blue" variant="outline" className="ml-auto">Shop all</Button>
      </div>
      <div>
        a
      </div>
    </main>
  );
}
