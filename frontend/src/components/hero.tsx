import React from "react";
import { Funnel_Display } from "next/font/google"

const funnelFont = Funnel_Display()

export default function Hero() {
  return (
    <section id="hero">
      <div className="h-[100vh] w-full bg-zinc-100 dark:bg-black dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className=" flex flex-col gap-y-5 relative z-20 py-8">
          <h1 style={funnelFont.style} className="bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-700 to-neutral-900 font-bold text-6xl text-center leading-tight">
            Advance website analytics <br /> without all the bad stuff
          </h1>
          <h2 className="text-zinc-500">
            Core Analytics is a Google Analytics alternative that doesn't
            compromise visitor privacy for data.
          </h2>
          <div className="gap-x-2 flex justify-center py-5">
            <button className="bg-neutral-800 px-10 py-3 text-sm shadow-sm rounded-lg text-zinc-100">
              7-day free trial
            </button>
            <button className="border px-10 py-3 flex bg-white text-sm shadow-sm text-zinc-800 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="none"
                viewBox="0 0 24 24"
                className="my-auto mr-2"
              >
                <circle
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="#1C274C"
                  strokeWidth={1.5}
                />
                <path
                  stroke="#1C274C"
                  strokeWidth={1.5}
                  d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787Z"
                />
              </svg>{" "}
              How it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
