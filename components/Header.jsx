"use client";

import Image from "next/image";
import Carousel from "@itseasy21/react-elastic-carousel";
import Link from "next/link";

const getBlogsHead = async () => {
  const res = await fetch("http://localhost:4000/blogsData", {
    next: {
      revalidate: 1,
    },
  });

  return res.json();
};

const Header = async () => {
  const blogsHead = await getBlogsHead();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 0, pagination: false },
    { width: 1450, itemsToShow: 3, itemsToScroll: 0, pagination: false  },
    { width: 1750, itemsToShow: 3, itemsToScroll: 0, pagination: false  }
  ]

  return (
    <header className="mx-6">
      <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={4000}>
        {/* <div className="md:grid grid-cols-2 grid-rows-2 grid-flow-col gap-4"> */}
          {blogsHead.slice(-3).map((blog) => (
            <section
              className="relative group m-2 hover:bg-slate-50 rounded-3xl overflow-hidden"
              key={blog.id}
            >
              <Link href={`/news-details/${blog.id}`}>
                <Image
                  src={blog.blogImage}
                  alt="blogImage"
                  priority
                  width={420}
                  height={0}
                  className="page-transition w-full h-full group-hover:scale-105 opacity-95 rounded-sm"
                />
                <span className="flex absolute top-4 right-5 bg-white py-1 px-2 rounded-full">
                  <Image
                    src="/assets/icons/global.svg"
                    className="mr-1 w-auto h-auto"
                    alt="arrow"
                    width={15}
                    height={10}
                  />
                  <h2 className="text-xs">{blog.country}</h2>
                </span>
                <div className="card w-full px-4 absolute bottom-0 text-white">
                  <span className="bg-[#FFE2FF] text-[#800080] p-2 rounded-md ">
                    {blog.blogType}
                  </span>
                  <p className="page-transition mt-3 text-lg flex gap-2 group-hover:gap-4 leading-snug">
                    {blog.blogHead.slice(0, 40)}
                    {"..."}
                    <span>
                      <Image
                        src={"/assets/icons/arrow-down.svg"}
                        alt="arrow-right"
                        height={28}
                        width={28}
                      />
                    </span>
                  </p>

                  <div className="my-3 flex justify-between">
                    <div className="flex items-center">
                      <Image
                        src={blog.authorImage}
                        alt="authorImage"
                        width={40}
                        height={40}
                      />
                      <p className="flex flex-col gap-1 ml-1 text-xs text-[#fffefe]">
                        {blog.authorName}
                        <span> {blog.date}</span>
                      </p>
                    </div>

                    <div className="text-[#fffefe]">
                      <span className="text-xs">{blog.read}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          ))}
        {/* </div> */}
      </Carousel>
    </header>
  );
};

export default Header;
