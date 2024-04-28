"use client";
import Image from "next/image";
// import Carousel from "@itseasy21/react-elastic-carousel";
import Loading from "@/app/loading";
import { Suspense } from "react";

// const getPodcast = async () => {
//   const res = await fetch("http://localhost:4000/podcastData");

//   return res.json();
// }

export default async function Podcast() {


  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Podcasts</span>
      </h1>
      
      <Suspense fallback={<Loading />}>
              <div className="w-[520px] h-[174px] flex border rounded-xl active:border-[#000775] shadow-sm active:shadow-lg shadow-[#aba4a4] active:shadow-[#00087586] p-3 gap-3">
                  <Image src="/assets/images/podcast-1.svg" alt="podcast" width={142} height={142} className="rounded-sm" />

                <div className="p-1 justify-evenly">
                  <h2 className="text-lg">Rasing awareness regarding Web 3 in Nigeria </h2>
                  <div className="text-[#AFAFAF] text-sm">
                    <p>Host: Giwa Gold</p>
                    <p>Guest(s): Joe Ken</p>
                  </div>
                  <input type="range" className="bg-[#000775] text-[#000775]" />
                </div>
                <div className=" justify-between">
                  <Image src="/assets/icons/play.svg" alt="play" height={33} width={31} className="cursor-pointer"  />
                  <div className="text-[#AFAFAF] text-sm flex">
                    <Image src="/assets/icons/headphone.svg" alt="play" height={14} width={14}  />
                    <p>1425</p>
                  </div>
                </div>
              </div>
      </Suspense>
    </div>
  );
}
