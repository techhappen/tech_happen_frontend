// import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";
import NewsLetter from "@/components/NewsLetter";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech happen",
  description: "#",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Nav />
        <main className="app mt-24">{children}</main>
        <div className="lg:hidden">
          <NewsLetter />
        </div>
        <Footer />
      </body>
    </html>
  );
}
