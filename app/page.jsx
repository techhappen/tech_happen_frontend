import Articles from "@/components/Articles";
import Popular from "@/components/Popular";
// import Podcast from "@/components/Podcast";
import Videos from "@/components/Videos";
import Header from "@/components/Header";
import Ads from "@/components/Ads";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="lg:px-[100px]">
      <Ads />
      <Suspense fallback={<Loading/>} >
        <Header />
      </Suspense>
      <Ads />
      <Articles />
      <Popular />
      {/* <Podcast /> */}
      <Videos />
      <Ads />
    </main>
  );
}
