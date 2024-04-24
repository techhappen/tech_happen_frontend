import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-2 p-6 lg:px-28 bg-gradient-to-r from-[#FFFFFF] to-[#D3D3FB]">
      <div className="md:flex flex-row-reverse justify-between">
        <div className="block md:flex justify-between w-full">
          <Image src="/assets/images/logo.svg" alt="image" height={68} width={180} className="md:m-auto w-auto h-auto" />
          <div className="flex bg-white w-[250px] h-[40px] border rounded-3xl px-[20px] py-[8px] my-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
            <button>
              <Image
                src="/assets/icons/searchIcon.svg"
                alt="image" height={24}
                width={24}
              />
            </button>
          </div>
        </div>
        <div className="my-8">
          <p className="my-2 md:hidden">Connect with us</p>
          <div className="flex justify-between w-40">
            <a href="#"><Image src="/assets/icons/facebookIcon.svg" alt="image" height={23} width={23} className="hover:animate-bounce" /></a>
            <a href="#"><Image src="/assets/icons/twitterIcon.svg" alt="image" height={23} width={23} className="hover:animate-bounce" /></a>
            <a href="#"><Image src="/assets/icons/linkedinIcon.svg" alt="image" height={23} width={23} className="hover:animate-bounce" /></a>
            <a href="#"><Image src="/assets/icons/youtubeIcon.svg" alt="image" height={23} width={23} className="hover:animate-bounce" /></a>
            <a href="#"><Image src="/assets/icons/instagramIcon.svg" alt="image" height={21} width={21} className="hover:animate-bounce"
            /></a>
          </div>
        </div>
      </div>
      <hr className="my-2 md:my-8" />
      <div className="h-[36px] md:w-[500px] mx-auto">
        <ul className="md:flex justify-between">
          <li className="mb-2 hover:text-[#003366]">
            <a href="#">About TechHappen</a>
          </li>
          <li className="mb-2 hover:text-[#003366]">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="mb-2 hover:text-[#003366]">
            <a href="#">Terms of Service</a>
          </li>
          <li className="hover:text-[#003366]">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <p className="mt-28 md:mt-8 text-center">
        Copyright © 2024 <a href="https://techhappen.com" className="hover:text-[#003366]">TecHappen.com</a>. All rights reserved
      </p>
    </div>
  );
}
