import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Navbar />
        <section className="mt-4 md:mt-20">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
