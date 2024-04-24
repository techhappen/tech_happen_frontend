import Image from "next/image";

export default function NavMobile({displayMenu}) {
  


  return (
    <div className=" bg-red-500 w-full">
      <nav
        className={`${displayMenu ? "page-transition" : ''} w-[280px] h-full bg-gradient-to-r from-[#E7F3FF] to-[#FFFFFF] p-3 fixed z-50 md:hidden`}
      >
        <div className="my-3">
          <h1 className="text-xl my-8">
            <span className="border-b-4 border-[#FFA500]">Follow</span> us on
            our Social handles
          </h1>
          <a
            href="#"
            className="group flex my-5 hover:text-[#003366] transition duration-500"
          >
            <Image
              src="/assets/icons/facebookIcon.svg"
              height={23}
              width={23}
              className="group-hover:animate-bounce"
            />
            <p className="ms-2">Facebook</p>
          </a>
          <a
            href="#"
            className="group flex my-5 hover:text-[#003366] transition duration-500"
          >
            <Image
              src="/assets/icons/twitterIcon.svg"
              height={23}
              width={23}
              className="group-hover:animate-bounce"
            />
            <p className="ms-2">X (Twitter)</p>
          </a>
          <a
            href="#"
            className="group flex my-5 hover:text-[#003366] transition duration-500"
          >
            <Image
              src="/assets/icons/linkedinIcon.svg"
              height={23}
              width={23}
              className="group-hover:animate-bounce"
            />
            <p className="ms-2">LinkedIn</p>
          </a>
          <a
            href="#"
            className="group flex my-5 hover:text-[#003366] transition duration-500"
          >
            <Image
              src="/assets/icons/youtubeIcon.svg"
              height={23}
              width={23}
              className="group-hover:animate-bounce"
            />
            <p className="ms-2">Youtube</p>
          </a>
          <a
            href="#"
            className="group flex my-5 hover:text-[#003366] transition duration-500"
          >
            <Image
              src="/assets/icons/instagramIcon.svg"
              height={23}
              width={23}
              className="group-hover:animate-bounce"
            />
            <p className="ms-2">Instagram</p>
          </a>
        </div>
      </nav>
    </div>
  );
}
