"use client"

import Image from "next/image";
import { useState } from "react";


export default function Search({ setGetSearch }) {

  const [search, setSearch] = useState("")

  const handleSearchButton = (event) => {
    event.preventDefault();
    setGetSearch(search);

    setSearch("")
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }


  return (
    <div>
      <form className="flex my-3 mx-auto justify-between bg-white w-full md:w-7/12 h-[40px] overflow-hidden border rounded-3xl ps-[20px]">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for blog"
          className="bg-transparent outline-none w-full"
        />
        <button type="submit" onClick={handleSearchButton} className="bg-[#000775] w-20 px-6" >
          <Image
            src="/assets/icons/searchIcon.svg"
            alt="search"
            height={24}
            width={24}
          />
        </button>
      </form>
    </div>
  );
}
