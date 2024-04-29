"use client";

import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { useState, useEffect } from "react";

const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setDisplayMenu(true);
  };

  const handleCancleMenu = () => {
    setDisplayMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-6 py-5 flex justify-between border-b-2 border-[#DDDDDD] fixed top-0 w-full md:px-[50px] z-50 ${
          scrolled ? "page-transition bg-gradient-to-r from-[#e7f3fff4] to-[#fffffff2]" : ""
        }`}
      >
        <div className="hidden md:flex mt-2 justify-between w-40">
          <a href="#" target="_blank">
            <Image
              src="/assets/icons/facebookIcon.svg"
              alt="icon"
              height={23}
              width={23}
              className="hover:animate-bounce"
            />
          </a>
          <a href="https://x.com/techappen_ng" target="_blank">
            <Image
              src="/assets/icons/twitterIcon.svg"
              alt="icon"
              height={23}
              width={23}
              className="hover:animate-bounce"
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src="/assets/icons/linkedinIcon.svg"
              alt="icon"
              height={23}
              width={23}
              className="hover:animate-bounce"
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src="/assets/icons/youtubeIcon.svg"
              alt="icon"
              height={23}
              width={23}
              className="hover:animate-bounce"
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src="/assets/icons/instagramIcon.svg"
              alt="icon"
              height={21}
              width={21}
              className="hover:animate-bounce"
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMenu}
            className={`${displayMenu ? "hidden" : "block"}`}
          >
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={40}
              height={40}
            />
          </button>
          <button
            onClick={handleCancleMenu}
            className={`${displayMenu ? "block -rotate-90" : "hidden"}`}
          >
            <Image src="/assets/images/Cancel.svg" alt="cancle" height={40} width={40} />
          </button>
        </div>
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={110}
            height={40}
            className="h-auto w-auto"
          />
        </div>
        
        <Link href="http://localhost:3000/search-result" >
          <div className="bg-[#FAFAFA] w-[46px] p-2 rounded-full border-2 border-[#EEEEEE]">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={30}
              height={30}
            />
          </div>
        </Link>
      </nav>
      {displayMenu && (
        <NavMobile setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      )}
    </>
  );
};

export default Nav;
