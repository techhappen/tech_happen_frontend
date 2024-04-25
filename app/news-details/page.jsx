import Ads from "@/components/Ads";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";

export default function BlogDetails({ blogsData }) {
  return (
    <main className="mx-8">
      <section className="relative mb-3" key={blogsData.id}>
        <Image
          src={blogsData.blogImage}
          alt="blogImage"
          width={1080}
          height={508}
          quality={75}
          className="border rounded-xl w-full"
        />
        <span className=" flex absolute top-5 right-6 bg-white py-1 px-2 rounded-full">
          <Image
            src="/assets/icons/global.svg"
            className="mr-1 w-auto h-auto"
            alt="arrow"
            width={15}
            height={10}
          />
          <h2 className="text-xs">{blogsData.country}</h2>
        </span>

        <div className="card w-[311px] md:w-[668px] p-3 md:p-7 absolute bottom-0 bg-white">
          <span className="bg-[#FFE2FF] text-sm font-normal text-[#800080] p-2 rounded-md ">
            {blogsData.blogType}
          </span>
          <p className="mt-3 leading-snug md:text-xl font-semibold">
            {blogsData.blogHead}
          </p>

          <div className="my-3 flex justify-between">
            <div className="flex items-center">
              <Image
                src={blogsData.authorImage}
                alt="authorImage"
                width={40}
                height={40}
              />
              <p className="flex flex-col ml-1 text-sm text-[#898989]">
                <span>{blogsData.authorName}</span>
                <span> {blogsData.date}</span>
              </p>
            </div>

            <div className="items-end my-auto text-[#898989]">
              <span className="text-xs">{blogsData.read}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:flex">
        <div className="md:w-[668px] p-3">
          <p>{blogsData.blogContent}</p>
          <Ads />
          <p>{blogsData.blogContent2}</p>
          <i className="my-5 text-[#898989]">
            Written and Published on {blogsData.date}{" "}
          </i>
        </div>
        <div className="hidden lg:block">
          <NewsLetter />
        </div>
      </section>
    </main>
  );
}
