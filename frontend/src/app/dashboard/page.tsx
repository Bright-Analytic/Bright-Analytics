import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex justify-between w-full">
        <div className="text-2xl gap-x-2 flex">
          <span className="text-neutral-800">Analytics</span>
          <span className="text-neutral-500">untitledui.com</span>
        </div>
        <div className="text-2xl gap-x-2 flex">
          <FaAngleLeft className="my-auto fill-neutral-300"/>
          <span className="text-neutral-800">30d</span>
          <FaAngleRight className="my-auto fill-neutral-300"/>
        </div>
      </div>
      <div className="flex my-10">
        <div id="stats" className="text-neutral-800">
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 rotate-1 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">visitors</span>
            <span className="text-4xl">22</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 rotate-1 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">pageviews</span>
            <span className="text-4xl">181</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 rotate-1 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">time on page</span>
            <span className="text-4xl">14s</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 rotate-1 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500 flex"><div className="h-2 w-2 my-auto mr-1 animate-pulse rounded-full bg-rose-600"/> live pageviews</span>
            <span className="text-4xl">0</span>
          </div>
        </div>
        <div id="graph" className="relative">
          
        </div>
      </div>
    </div>
  );
}
