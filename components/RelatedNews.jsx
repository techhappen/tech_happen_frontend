"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const getBlogs = async () => {
  const res = await fetch("http://localhost:4000/blogsData", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
};

const RelatedNews = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [pagination, setPagination] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogsData(data);
    };

    fetchBlogs();
  }, []);

  const handlePagination = () => {
    setPagination((loadMore) => loadMore + 1);
  };

  return (
    <section className="mx-6">
      <h1 className="text-xl my-5">
        <span className="border-b-4 border-[#FFA500]">Related</span> News
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsData.slice(0, pagination).map((blog) => (
          <Link href={`/news-details/${blog.id}`}>
            <section
              className="mt-5 hover:bg-slate-50 border-2 overflow-hidden rounded-3xl"
              key={blog.id}
            >
              <div className="group">
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.blogImage}
                    alt="logo"
                    width={900}
                    height={100}
                    className="page-transition w-full group-hover:scale-105"
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
                <div className="card p-3">
                  <span className="bg-[#FFE2FF] text-[#800080] p-2 rounded-md">
                    {blog.blogType}
                  </span>
                  <p className="mt-3 leading-snug">
                    {blog.blogHead.slice(0, 42)}...
                  </p>

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
                </div>
              </div>
            </section>
          </Link>
        ))}

        {blogsData.length > pagination && (
          <button
            onClick={handlePagination}
            className="page-transition mt-4 p-4 w-full rounded-md bg-[#eaeaf7] hover:bg-[#ccccea] text-[#000775] animate-pulse"
          >
            Load more news{" "}
          </button>
        )}
      </div>
    </section>
  );
};

export default RelatedNews;
