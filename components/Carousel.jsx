"use client";
import Image from "next/image";
import { PopularBlogs } from "./Popular";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PopularBlogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PopularBlogs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="overflow-hidden">
        <div className="flex transition ease-in-out duration-400 ">
          {PopularBlogs.map((blog, index) => (
            <section 
              key={blog.id}
              className={` mt-5 w-full flex-shrink-0 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="">
                <Image
                  src={blog.blogImage}
                  alt="logo"
                  width={900}
                  height={100}
                  className="rounded-t-3xl w-full"
                />

                <span className=" flex absolute top-4 right-5 bg-white py-1 px-2 rounded-full">
                  <Image
                    src="/assets/icons/global.svg"
                    className="mr-1 w-auto h-auto"
                    alt="arrow"
                    width={15}
                    height={10}
                  />
                  <h2 className="text-xs">{blog.country}</h2>
                </span>
              </div>
              <div className="card p-3 border-2 rounded-b-3xl">
                <span className="bg-[#FFE2FF] text-[#800080] p-2 rounded-md ">
                  {blog.blogType}
                </span>
                <p className="mt-3 leading-snug">{blog.blogHead}</p>

                <div className="my-3 flex justify-between">
                  <div className="flex items-center">
                    <Image
                      src={blog.authorImage}
                      alt="authorImage"
                      width={40}
                      height={40}
                    />
                    <p className="ml-1 text-sm text-[#898989]">
                      {blog.authorName}
                    </p>
                  </div>

                  <div className="flex flex-col items-end text-[#898989]">
                    <span> {blog.date}</span>
                    <span className="text-xs">{blog.read}</span>
                  </div>
                </div>

                <button className="p-1 border-2 w-full rounded-lg text-[#898989] flex justify-center items-center">
                  Continue Reading
                  <Image
                    src="/assets/icons/arrow-down.svg"
                    className="ml-1 w-auto h-auto"
                    alt="arrow"
                    width={20}
                    height={10}
                  />
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
