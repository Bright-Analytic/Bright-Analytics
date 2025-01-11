import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 top-0 bg-none flex backdrop-blur-sm md:py-5 py-3 px-3 md:px-0"
    >
      <div className="flex justify-between max-w-7xl w-full mx-auto">
        <div className="flex justify-center gap-x-5">
          <div className="flex">
            <Image
              alt="BrightAnalytics"
              src={"/android-chrome-512x512.png"}
              width={35}
              height={30}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="md:flex hidden gap-x-8 text-zinc-800 my-auto text-sm">
            <span className="flex gap-x-3">
              Products{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 -4.5 24 24"
                className="my-auto"
              >
                <title>{"chevron-down"}</title>
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M23.405.63a2.123 2.123 0 0 0-3.004 0l-8.385 9.25L3.63.63a2.123 2.123 0 0 0-3.004 0 2.132 2.132 0 0 0 0 3.01l9.755 10.76c.449.45 1.048.65 1.635.61.587.04 1.185-.16 1.634-.61l9.755-10.76c.829-.83.829-2.18 0-3.01"
                />
              </svg>
            </span>
            <span className="flex gap-x-3">
              Features{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 -4.5 24 24"
                className="my-auto"
              >
                <title>{"chevron-down"}</title>
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M23.405.63a2.123 2.123 0 0 0-3.004 0l-8.385 9.25L3.63.63a2.123 2.123 0 0 0-3.004 0 2.132 2.132 0 0 0 0 3.01l9.755 10.76c.449.45 1.048.65 1.635.61.587.04 1.185-.16 1.634-.61l9.755-10.76c.829-.83.829-2.18 0-3.01"
                />
              </svg>
            </span>
            <span className="flex gap-x-3">
              Resources{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 -4.5 24 24"
                className="my-auto"
              >
                <title>{"chevron-down"}</title>
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M23.405.63a2.123 2.123 0 0 0-3.004 0l-8.385 9.25L3.63.63a2.123 2.123 0 0 0-3.004 0 2.132 2.132 0 0 0 0 3.01l9.755 10.76c.449.45 1.048.65 1.635.61.587.04 1.185-.16 1.634-.61l9.755-10.76c.829-.83.829-2.18 0-3.01"
                />
              </svg>
            </span>
            <span>Pricing</span>
            <span>Company</span>
          </div>
        </div>
        <div className="gap-x-2 flex">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border px-5 bg-white md:h-8 h-10 text-sm shadow-sm text-zinc-800 rounded-lg">
                Log in
              </button>
            </SignInButton>
            <Link
              href="https://github.com/adityasharma-tech/AnalyzeCore.git"
              target="_blank"
            >
              <button className="bg-neutral-800 md:h-8 h-10 px-8 flex items-center justify-center gap-x-2 md:px-5 text-sm shadow-sm rounded-lg text-zinc-100">
                <FaGithub size={14} />
                Github
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center flex-col">
              <div className="flex">
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
              </div>
            </div>
          </SignedIn>

          {/* <button className="bg-neutral-800 px-5 py-1.5 text-sm shadow-sm rounded-lg text-zinc-100">
                Dashboard
                </button> */}
        </div>
      </div>
    </nav>
  );
}
