import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Navbar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
