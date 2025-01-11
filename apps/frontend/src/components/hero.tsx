import React from "react";
import { Funnel_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import {
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import DashClientBtn from "./dash-client-btn";

const funnelFont = Funnel_Display({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section id="hero" className="bg-white lg:mt-0 mt-10">
      <div className="md:h-[60vh] h-[70vh] w-full bg-zinc-100 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className=" flex flex-col gap-y-5 relative z-20 py-8">
          <h1
            style={funnelFont.style}
            className="bg-clip-text text-5xl text-wrap text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-700 to-neutral-900 font-bold md:text-6xl text-center leading-tight"
          >
            Advance website analytics
            <br />
            without all the bad stuff
          </h1>
          <h2 className="text-zinc-500 text-center px-5 md:px-0">
            Bright Analytics is a Google Analytics alternative that doesn't
            compromise visitor privacy for data.
          </h2>
          <div className="gap-x-2 flex justify-center py-5">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-neutral-800 h-12 px-10 text-sm shadow-sm rounded-lg text-zinc-100">
                  7-day free trial
                </button>
              </SignUpButton>
            </SignedOut>
            <DashClientBtn />

            <Link href="/">
              <button className="border px-10 h-12 flex items-center gap-x-2 bg-white text-sm shadow-sm text-zinc-800 rounded-lg">
                <FaRegCirclePlay size={20} />{" "}
                <span className="my-auto">How it works</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative shadow-xl h-[23vh] w-[80vw] md:h-[60vh] rounded-b-none border-b-0 bg-zinc-60 mx-auto rounded-xl border overflow-hidden">
        <Image
          className="object-cover"
          style={{
            objectPosition: "top",
          }}
          src="/screenshot.png"
          alt="Dashboard screenshot"
          fill
        />
      </div>
    </section>
  );
}
