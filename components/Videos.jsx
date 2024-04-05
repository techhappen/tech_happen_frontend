"use client";

import Image from "next/image";

export default function Videos() {
  const VideoData = [
    {
      id: 1,
      videoFrame: "/assets/videos/videoFrame.svg",
      playButtonText: "Click to Watch",
      linkText: "Subscribe to our Youtube Channel",
      link: "https://youtube.com",
      icon: "/assets/images/youtube.svg",
      playButton: "/assets/images/play-button.svg",
    },
  ];

  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Videos</span>
      </h1>
      <div>
        {VideoData.map((video) => {
          return (
            <div key={video.id} className=" mx-4">
              <div className="mb-3 relative">
                <iframe
                  className="h-[300px] md:h-[550px] w-full"
                  src="https://www.youtube.com/embed/14doMbWPa7I?si=umlV4op25bzVDof1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                {/* <Image
                  src={video.videoFrame}
                  height={550}
                  width={1024}
                  className="bg-cover"
                /> */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={video.playButton}
                    height={70}
                    width={70}
                    className="m-3"
                  />
                  <p className="text-center text-white">{video.playButtonText}</p>
                </div> */}
              </div>

              <div className="bg-[#FFEEEE] flex justify-center border-r-2 gap-[10px] md:mx-[100px] p-[16px]">
                <Image src={video.icon} height={28} width={28} className="" />
                <a
                  className="text-[#FF0000] font-[400px]"
                  href={video.link}
                  target="_blank"
                >
                  {video.linkText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
