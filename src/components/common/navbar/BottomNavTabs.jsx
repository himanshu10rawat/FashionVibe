"use client";

import { Brush, HomeIcon, LucideCircleUserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex justify-around items-baseline fixed w-full bottom-0 left-0 border-t border-gray-300">
      <Link
        className={`p-1 flex flex-col items-center gap-0.5 w-1/3 ${pathname === "/" && "text-pink-500 border-t-4 border-pink-500"}`}
        href={"/"}
      >
        <HomeIcon className="stroke-1" />
        <span>Home</span>
      </Link>
      <Link
        className={`p-1 flex flex-col items-center gap-0.5 w-1/3 ${pathname === "/beauty" && "text-pink-500 border-t-4 border-pink-500"}`}
        href={"/beauty"}
      >
        <Brush className="stroke-1" />
        <span>Beauty</span>
      </Link>
      <Link
        className={`p-1 flex flex-col items-center gap-0.5 w-1/3 ${pathname === "/profile" && "text-pink-500 border-t-4 border-pink-500"}`}
        href={"/profile"}
      >
        <LucideCircleUserRound className="stroke-1" />
        <span>Profile</span>
      </Link>
    </div>
  );
}
