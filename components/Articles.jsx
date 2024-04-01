import blogs from "./blogData";
import Image from "next/image";

const Articles = () => {
  return (
    <section className="mx-6">
      <h1 className="text-xl my-5">

        <span className="border-b-4 border-[#FFA500]">Recent</span> Articles
      </h1>
      <div>
        {blogs.map((blog) => (
          <section className="mt-5">
            <div className="relative">
            <Image
              src={blog.blogImage}
              alt="logo"
              width={900}
              height={100}
              className="rounded-t-3xl w-full"
            />

            <span className=" flex absolute top-4 right-5 bg-white py-1 px-2 rounded-full">
            <Image src="/assets/icons/global.svg"
              className="mr-1"
              alt="arrow"
              width={15}
              height={10}/>
            <h2 className="text-xs">{blog.country}</h2>
            </span>
            </div>
            <div className="card p-3 border-2 rounded-b-3xl">
              <span className="bg-[#FFE2FF] text-[#800080] p-2 rounded-md ">
                {blog.blogType}
              </span>
              <p className="mt-3 leading-snug">{blog.blogContent}</p>

              <div className="my-3 flex justify-between">
                <div className="flex items-center">
                  <Image
                    src={blog.authorImage}
                    alt="authorImage"
                    width={40}
                    height={40}
                  />
                  <p className="ml-1 text-sm text-[#898989]">{blog.authorName}</p>
                </div>

                <div className="flex flex-col items-end text-[#898989]">
                   <span> {blog.date}</span>
                  <span className="text-xs">{blog.read}</span>  
                </div>
              </div>

              <button className="p-1 border-2 w-full rounded-lg text-[#898989] flex justify-center items-center">Continue Reading  <Image src="/assets/icons/arrow-down.svg"
              className="ml-1"
              alt="arrow"
              width={20}
              height={10}/></button>
            </div>
          </section>
        ))}
      </div>
      <button className="p-  mt-4 border-2 w-full rounded-lg bg-[#e6e6ff] text-[#000775]">Load more news  </button>
    </section>
  );
};

export default Articles;
