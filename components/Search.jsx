"use client"

import Image from "next/image";
import { useState } from "react";


export default function Search({ setGetSearch }) {

  const [search, setSearch] = useState("")

  const handleSearchButton = () => {
    setGetSearch(search);

    setSearch("")
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }


  return (
    <div className="flex justify-between bg-white w-full h-[40px] border rounded-3xl px-[20px] py-[8px]">
      <input
        onChange={handleSearch}
        value={search}
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full"
      />
      <button onClick={handleSearchButton} >
        <Image
          src="/assets/icons/searchIcon.svg"
          alt="search"
          height={24}
          width={24}
        />
      </button>
    </div>
  );
}
