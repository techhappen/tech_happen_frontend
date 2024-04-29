"use client";
import Image from "next/image";
import Carousel from "@itseasy21/react-elastic-carousel";
import Loading from "@/app/loading";
import { Suspense } from "react";

const getPodcast = async () => {
  const res = await fetch("http://localhost:4000/podcastData", {
    next: {
      revalidate: 1
    }
  });

  return res.json();
}

export default async function RelatedPodcast() {

  const podcastData = await getPodcast();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 0 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 0  },
    { width: 1750, itemsToShow: 3, itemsToScroll: 0  }
  ]


  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Related</span> Podcast
      </h1>
      
      <Suspense fallback={<Loading />}>
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000} showArrows={false}  >
            {podcastData.map( (podcast) => (
                  <div className="h-[174px] flex border rounded-xl group group-active:border-[#000775] shadow-sm active:shadow-lg shadow-[#aba4a4] active:shadow-[#00087586] p-3 gap-3" key={podcast.id} >
                      <Image src={podcast.image} alt="podcast" width={100} height={100} className="rounded-sm lg:w-[142px] lg:h-[142px]" />

                    <div className="grid grid-flow-row gap-1">
                      <h2 className="text-lg">{podcast.title}</h2>

                      <div className="text-[#AFAFAF] text-sm">
                        <p>Host: {podcast.host}</p>
                        <p>Guest(s): {podcast.guest}</p>
                      </div>

                      <audio src={podcast.sound} controls={true} className="w-full" />
                    </div>
                  </div>
            ))}
        </Carousel>
      </Suspense>
    </div>
  );
}