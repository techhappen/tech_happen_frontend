// import { Inter } from "next/font/google";
import Ads from "@/components/Ads";
import "./globals.css";
import Nav from "@/components/Nav";
import Articles from "@/components/Articles";
import Popular from "@/components/Popular";
import Podcast from "@/components/Podcast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech happen",
  description: "#",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Ads />
        <Articles />
        <Popular />

<Podcast/>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
