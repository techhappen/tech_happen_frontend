"use client";

import Image from "next/image";
import { useState } from "react";

const Nav = () => {

  const [displayMenu, setDisplayMenu] = useState(true);

  const handleMenu = () => {
    setDisplayMenu(false);
  }

  const handleCancleMenu = () => {
    setDisplayMenu(true);
  }

  return (
    <>
      <nav className={!displayMenu ? `bg-white w-[280px] h-full bg-gradient-to-r from-[#E7F3FF] to-[#FFFFFF] p-3 absolute z-50 transition-all duration-300 block` : `bg-white w-[280px] h-full bg-gradient-to-r from-[#E7F3FF] to-[#FFFFFF] p-3 absolute z-50 hidden`}>
        <button className="ms-[200px]" onClick={handleCancleMenu}>
          <Image 
          src="/assets/images/Cancel.svg"
          height={40}
          width={40}
          />
        </button>
        <div className="my-3">
        <h1 className="text-xl my-8">
          <span className="border-b-4 border-[#FFA500]">Follow</span> us on our Social handles
        </h1>
          <a href="#" className="flex my-5 hover:text-[#003366] transition duration-500">
            <Image src="/assets/images/facebookIcon.svg" height={23} width={23} />
            <p className="ms-2">Facebook</p>
          </a>
          <a href="#" className="flex my-5 hover:text-[#003366] transition duration-500">
            <Image src="/assets/images/twitterIcon.svg" height={23} width={23} />
            <p className="ms-2">X (Twitter)</p>
          </a>
          <a href="#" className="flex my-5 hover:text-[#003366] transition duration-500">
            <Image src="/assets/images/linkedinIcon.svg" height={23} width={23} />
            <p className="ms-2">LinkedIn</p>
          </a>
          <a href="#" className="flex my-5 hover:text-[#003366] transition duration-500">
            <Image src="/assets/images/youtubeIcon.svg" height={23} width={23} />
            <p className="ms-2">Youtube</p>
          </a>
          <a href="#" className="flex my-5 hover:text-[#003366] transition duration-500">
            <Image
              src="/assets/images/instagramIcon.svg"
              height={23}
              width={23}
            />
            <p className="ms-2">Instagram</p>
          </a>
        </div>
      </nav>

      <nav className="px-6 py-3 flex justify-between border-b-2 border-[#DDDDDD]">
        <div className="hidden md:flex mt-2 justify-between w-40">
          <a href="#">
            <Image src="/assets/images/facebookIcon.svg" height={23} width={23} />
          </a>
          <a href="#">
            <Image src="/assets/images/twitterIcon.svg" height={23} width={23} />
          </a>
          <a href="#">
            <Image src="/assets/images/linkedinIcon.svg" height={23} width={23} />
          </a>
          <a href="#">
            <Image src="/assets/images/youtubeIcon.svg" height={23} width={23} />
          </a>
          <a href="#">
            <Image
              src="/assets/images/instagramIcon.svg"
              height={21}
              width={21}
            />
          </a>
        </div>
        <div className="bg-[#FAFAFA] md:hidden p-2 rounded-full border-2 border-[#EEEEEE]">
          <button onClick={handleMenu}>
            <Image src="/assets/icons/menu.svg" alt="menu" width={20} height={20} />
          </button>
        </div>
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={110}
            height={40}
          />
        </div>
        <div className="bg-[#FAFAFA] md:hidden  p-2 rounded-full border-2 border-[#EEEEEE]">
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
        <div className="hidden md:flex bg-white w-[250px] h-[40px] border rounded-3xl px-[20px] py-[8px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
          <button>
            <Image src="/assets/images/searchIcon.svg" height={24} width={24} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
