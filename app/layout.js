// import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
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

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
