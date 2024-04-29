"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";
import RelatedPodcast from "@/components/RelatedPodcast";
import Search from "@/components/Search";

const getBlogs = async () => {
  const res = await fetch("http://localhost:4000/blogsData", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
};

const SearchResult = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [getSearch, setGetSearch] = useState("");
  const [pagination, setPagination] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      const filteredData = data.filter((blog) => {
        const { blogHead } = blog;
        if (blogHead && typeof blogHead === "string") {
          return blogHead.toLowerCase().includes(getSearch.toLowerCase());
        } else if (blogHead && typeof blogHead === "object") {
          // Assuming blogHead is an object with a common property
          const { common } = blogHead;
          if (common && typeof common === "string") {
            return common.toLowerCase().includes(getSearch.toLowerCase());
          }
        }
        return false;
      });
      setBlogsData(filteredData);
    };

    fetchBlogs();
  }, [getSearch]);

  if (!blogsData) {
    return <Loading />;
  }

  const handlePagination = () => {
    setPagination((loadMore) => loadMore + 1);
  };

  return (
    <main className="mx-6 md:px-[100px]">
      <nav className="w-44 p-2">
        <Link href="/">
          <div className="flex justify-between">
            <Image src="/assets/icons/return-arrow.svg" width={9} height={18} />
            <p>Return to homepage</p>
          </div>
        </Link>
      </nav>
      <Search setGetSearch={setGetSearch} />
      <h1 className="text-2xl my-5">Search Result for " {getSearch} "</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsData.slice(0, pagination).map((blog) => (
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
              <Link href={`/news-details/${blog.id}`}>
                <div className="group px-3 pb-2">
                  <div className="page-transition p-2 px-5 border-2 w-full rounded-lg text-[#898989] hover:text-white hover:bg-[#000775] flex justify-center items-center">
                    Continue Reading
                    <Image
                      src="/assets/icons/arrow-down.svg"
                      alt="arrow"
                      width={20}
                      height={10}
                      className="page-transition ml-1 w-auto h-auto group-hover:ml-7"
                    />
                  </div>
                </div>
              </Link>
            </section>
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
      </Suspense>
      <RelatedPodcast />
    </main>
  );
};

export default SearchResult;
