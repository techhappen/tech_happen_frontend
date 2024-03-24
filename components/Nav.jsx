import Image from "next/image";

const Nav = () => {
  return (
    <nav className="px-6 py-3 flex justify-between border-b-2 border-[#DDDDDD]">
      <div
        className="bg-[#FAFAFA] p-2 rounded-full border-2 border-[#EEEEEE]"
      >
        <Image src="/assets/icons/menu.svg" width={20} height={20} />
      </div>
      <div>
        <Image src="/assets/images/logo.svg" width={110} height={40} />
      </div>
      <div className="bg-[#FAFAFA]  p-2 rounded-full border-2 border-[#EEEEEE]">
        <Image src="/assets/icons/search.svg" width={20} height={20} />
      </div>
    </nav>
  );
};

export default Nav;
