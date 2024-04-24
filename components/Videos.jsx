// "use client";

import Image from "next/image";

const getVideo = async () => {
  const res = await fetch("http://localhost:4000/videoData", {
    next: {
      revalidate: 1
    }
  });

  return res.json();
}

export default async function Videos() {

  const videoData = await getVideo();

  return (
    <div className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Videos</span>
      </h1>
      <div>
        {videoData.map((video) => {
          return (
            <div key={video.id} className=" mx-4">
              <div className="mb-3 relative">
                <iframe
                  className="h-[300px] md:h-[550px] w-full"
                  src={video.videoLink}
                  title="Tech Happen"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="bg-[#FFEEEE] flex justify-center border-r-2 gap-[10px] md:mx-[100px] p-[16px] animate-pulse">
                <Image src={video.icon} alt="video" height={28} width={28} className="w-auto h-auto" />
                <a
                  className="text-[#FF0000] font-[400px]"
                  href={video.profileLink}
                  target="_blank"
                >
                  {video.text}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
