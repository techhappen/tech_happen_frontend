"use client";

import Image from "next/image";
import Carousel from "@itseasy21/react-elastic-carousel";

const Header = () => {
  return (
    <header className="mx-6">
      <section className="mt-5 hidden md:grid grid-rows-2 grid-flow-col">
        <div className="relative row-span-2">
          <Image
            src="/assets/images/cyber.svg"
            alt="logo"
            width={900}
            height={100}
            className="rounded-t-3xl w-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/images/codingDemo.svg"
            alt="logo"
            width={900}
            height={100}
            className="rounded-t-3xl w-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/images/snowDemo.svg"
            alt="logo"
            width={900}
            height={100}
            className="rounded-t-3xl w-full"
          />
        </div>
      </section>
      <section className="mt-5 md:hidden">
        <Carousel
          showArrows={false}
          enableAutoPlay
          autoPlaySpeed={1000}
        >
          <div className="relative row-span-2">
            <Image
              src="/assets/images/cyber.svg"
              alt="logo"
              width={900}
              height={100}
              className="rounded-t-3xl w-full"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/images/codingDemo.svg"
              alt="logo"
              width={900}
              height={100}
              className="rounded-t-3xl w-full"
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/images/snowDemo.svg"
              alt="logo"
              width={900}
              height={100}
              className="rounded-t-3xl w-full"
            />
          </div>
        </Carousel>
      </section>
    </header>
  );
};

export default Header;
