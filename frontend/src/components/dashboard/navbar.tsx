import Image from "next/image";
import React from "react";

export default function DashNavbar() {
  return (
    <nav
      id="dash-navbar"
      className="fixed w-full z-50 bg-none flex backdrop-blur-sm py-3"
    >
      <div className="flex border-b pb-3 justify-between max-w-7xl w-full mx-auto">
        <div className="flex justify-center gap-x-5">
          <div className="flex">
            <Image
              alt="CoreAnalytics"
              src={"/android-chrome-512x512.png"}
              width={35}
              height={30}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex gap-x-8 text-zinc-800 my-auto text-sm">
          <span>Home</span>
          <span>Products</span>
          <span>Analytics</span>
          <span>Audience</span>
          <span>Tasks</span>
          <span>Reporting</span>
          <span>Users</span>
        </div>
        <button className="border gap-x-2 rounded-r-3xl flex justify-between rounded-l-[100px] px-1 bg-white py-1 shadow-sm text-zinc-800">
          <div
            style={{
              width: 30,
              height: 30,
            }}
          >
            <Image
              src="https://avatar.iran.liara.run/public/boy"
              className="rounded-full"
              width={30}
              height={30}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Aditya Sharma</span>
            <span
              style={{
                fontSize: 10,
              }}
              className="text-neutral-400"
            >
              @aditya_sharma
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
}
