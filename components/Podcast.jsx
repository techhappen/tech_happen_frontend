"use client";
import Image from "next/image";
import Carousel from "@itseasy21/react-elastic-carousel";

const getPodcast = async () => {
  const res = await fetch("http://localhost:4000/podcastData");

  return res.json();
}

export default async function Podcast() {

  const podcastData = await getPodcast();

  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Podcasts</span>
      </h1>
      <Carousel itemsToShow={1} initialActiveIndex={3}>
        <br />
        {podcastData.map((podcast) => {
          return (
            <div className="w-full flex border-2 border-[#000775] shadow-2xl shadow-black">
              <div>
                <Image src={podcast.image} width={100} height={100} />
              </div>

              <div>{podcast.title}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
