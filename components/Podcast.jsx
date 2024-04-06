"use client";
import Image from "next/image";
import Carousel from "@itseasy21/react-elastic-carousel";

const PodcastData = [
  {
    title: "Rasing awareness regarding Web 3 in Nigeria ",
    host: "Giwa Gold",
    guest: "joe ken",
    image: "/assets/images/podcastimage.svg",
  },
  {
    title: "podcast 2 ",
    host: "Giwa Gold",
    guest: "joe ken",
    image: "/assets/images/podcastimage.svg",
  },
  {
    title: "podcast 3 ",
    host: "Giwa Gold",
    guest: "joe ken",
    image: "/assets/images/podcastimage.svg",
  },
];

export default function Podcast() {
  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Podcasts</span>
      </h1>
      <Carousel itemsToShow={1} initialActiveIndex={3}>
        <br />
        {PodcastData.map((podcast) => {
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
