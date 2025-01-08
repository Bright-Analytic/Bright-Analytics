"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function DashNavbar() {
  return (
    <nav
      id="dash-navbar"
      className="sticky top-0 left-0 right-0 w-full z-50 bg-none flex backdrop-blur-sm py-3"
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
        <div className="w-12 h-12 flex justify-center flex-col">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "2rem",
                    height: "2rem",
                  },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
