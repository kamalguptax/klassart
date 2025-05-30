"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To detect active page

const options = [
  { label: "Image", icon: "/assets/images/icon/text-to-image01.svg", activeIcon: "/assets/images/icon/text-to-image-active01.svg", href: "/service/TextToImage" },
  { label: "Reimagine", icon: "/assets/images/icon/text-to-image02.svg", activeIcon: "/assets/images/icon/text-to-image-active02.svg", href: "/service/ImageToImage" },
  { label: "Text", icon: "/assets/images/icon/text-to-image03.svg", activeIcon: "/assets/images/icon/text-to-image-active03.svg", href: "/service/TextBehindImage" },
];

export default function MenuSidebar() {
  const pathname = usePathname(); // Get current page route

  return (
    <div className="h-screen bg-white border-r border-gray-300 flex flex-col items-center py-10 px-5">
      <ul className="flex flex-col gap-6">
        {options.map((option, index) => (
          <li key={index}>
            <Link
              href={option.href}
              className={`flex flex-col items-center justify-center rounded-xl w-[110px] h-[110px] transition-all duration-300 
                ${pathname === option.href || (pathname === "/" && index === 0)
                  ? "bg-[linear-gradient(112.06deg,rgba(194,137,255,0.3)-6.95%,rgba(85,85,255,0.3)59.24%)]"
                  : ""} p-[15px] px-[30px]`}
            >
              <span
                className={`p-3 rounded-md w-[50px] h-[50px]
                ${pathname === option.href || (pathname === "/" && index === 0)
                    ? "bg-[linear-gradient(112.06deg,#C289FF_-6.95%,#5555FF_59.24%)]"
                    : "bg-[rgba(241,242,244,1)]"}`}
              >
                <img 
                  src={pathname === option.href || (pathname === "/" && index === 0) ? option.activeIcon : option.icon} 
                  alt={option.label} 
                  className="w-8 h-8" 
                />
              </span>
              <span className="mt-2 text-[14px] font-normal text-gray-800">{option.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
