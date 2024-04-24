import Link from "next/link";
import Image from "next/image";
import Ads from "@/components/Ads";

const getBlog = async (id) => {
  try {
    const res = await fetch("http://localhost:4000/blogsData/" + id, {
      next: {
        revalidate: 1
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export default async function NewsDetails({ params }) {

  const blogDetail = await getBlog(params.id)

  if (!blogDetail) {
    return <div>Loading...</div>;
  }  

  return (
    <div className="md:px-[100px]">
      <nav className="w-44 p-2">
        <Link href="/">
          <div className="flex justify-between">
            <Image src="/assets/icons/return-arrow.svg" width={9} height={18} />
            <p>Return to homepage</p>
          </div>
        </Link>
      </nav>
      <Ads />
      {blogDetail.blogHead}
    </div>
  );
}
