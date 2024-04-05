// import { Inter } from "next/font/google";
import Ads from "@/components/Ads";
import "./globals.css";
import Nav from "@/components/Nav";
import Articles from "@/components/Articles";
import Popular from "@/components/Popular";
import Podcast from "@/components/Podcast";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech happen",
  description: "#",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="md:px-[100px]">
          <Nav />
          <Ads />
          <Header />
          <Ads />
          <Articles />
          <Popular />
          {/* <Podcast /> */}
          <Videos />
          <Ads />
          <Footer />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
