"use client";
import BpCheckbox from "@/components/dashboard/bp-checkbox";
import Chart from "@/components/dashboard/chart";
import { FormControlLabel } from "@mui/material";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { MdOutlinePhoneAndroid, MdOutlineTabletAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex justify-between w-full">
        <div className="text-2xl gap-x-2 flex">
          <span className="text-neutral-800">Analytics</span>
          <span className="text-neutral-500">untitledui.com</span>
        </div>
        <div className="text-2xl gap-x-2 flex">
          <FaAngleLeft className="my-auto fill-neutral-300" />
          <span className="text-neutral-800">30d</span>
          <FaAngleRight className="my-auto fill-neutral-300" />
        </div>
      </div>
      <div className="md:flex block my-10">
        <div
          id="stats"
          className="text-neutral-800 md:block grid grid-cols-2 gap-x-2 gap-y-2"
        >
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">visitors</span>
            <span className="text-4xl">22</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">pageviews</span>
            <span className="text-4xl">181</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500">time on page</span>
            <span className="text-4xl">14s</span>
          </div>
          <div className="flex flex-col mt-1 shadow-md bg-zinc-200/10 border-b-2 border-neutral-300 pl-3 min-w-36 py-3">
            <span className="text-sm text-neutral-500 flex">
              <div className="h-2 w-2 my-auto mr-1 animate-pulse rounded-full bg-rose-600" />{" "}
              live pageviews
            </span>
            <span className="text-4xl">0</span>
          </div>
        </div>
        <div
          id="graph"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="relative mt-auto md:px-10"
        >
          <Chart />
        </div>
      </div>
      <div>
        <div className="text-neutral-700 flex justify-end mb-5">
          <FormControlLabel label="Annotations" control={<BpCheckbox />} />
          <FormControlLabel label="Pageviews" control={<BpCheckbox />} />
          <FormControlLabel label="Visitors" control={<BpCheckbox />} />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2">
        <div>
          <div className="flex gap-x-2">
            <span className="text-neutral-900">Referrals</span>
            <FaAngleDown className="fill-neutral-600 my-auto" />
          </div>
          <div className="my-3">
            <ul>
              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">12</span>
                <span className="text-neutral-600 text-left">(direct)</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">4</span>
                <span className="text-neutral-600 text-left">android-app</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">2</span>
                <span className="text-neutral-600 text-left">google</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">1</span>
                <span className="text-neutral-600 text-left">bing.com</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">1</span>
                <span className="text-neutral-600 text-left">github.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex gap-x-2">
            <span className="text-neutral-900">Pages</span>
          </div>
          <div className="my-3">
            <ul>
              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">181</span>
                <span className="text-neutral-600 text-left">/</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">36</span>
                <span className="text-neutral-600 text-left">/about</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex gap-x-2">
            <span className="text-neutral-900">Devices</span>
          </div>
          <div className="my-3">
            <div>
              <div className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-14">
                  <MdOutlinePhoneAndroid className="w-6 h-6" />
                </span>
                <span className="bg-neutral-50 group h-full mr-5 rounded px-3 py-1 w-full text-left relative">
                  <div className="absolute w-[6%] transition-all left-0 top-0 bottom-0 z-10 bg-[#02B2AF] rounded" />
                  <span className="text-black z-20 relative">6%</span>
                </span>
              </div>
              <div className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-14">
                  <MdOutlineTabletAndroid className="w-6 h-6" />
                </span>
                <span className="bg-neutral-50 group h-full mr-5 rounded px-3 py-1 w-full text-left relative">
                  <div className="absolute w-[0%] transition-all left-0 top-0 bottom-0 z-10 bg-[#02B2AF] rounded" />
                  <span className="text-black z-20 relative">0%</span>
                </span>
              </div>
              <div className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-14">
                  <RiComputerLine className="h-6 w-6" />
                </span>
                <span className="bg-neutral-50 group h-full mr-5 rounded px-3 py-1 w-full text-left relative">
                  <div className="absolute w-[94%] transition-all left-0 top-0 bottom-0 z-10 bg-[#02B2AF] rounded" />
                  <span className="text-black z-20 relative">94%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-x-2">
            <span className="text-neutral-900">Referrals</span>
            <FaAngleDown className="fill-neutral-600 my-auto" />
          </div>
          <div className="my-3">
            <ul>
              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">12</span>
                <span className="text-neutral-600 text-left">(direct)</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">4</span>
                <span className="text-neutral-600 text-left">android-app</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">2</span>
                <span className="text-neutral-600 text-left">google</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">1</span>
                <span className="text-neutral-600 text-left">bing.com</span>
              </li>

              <li className="flex gap-x-1 py-2 text-sm">
                <span className="text-[#02B2AF] min-w-10">1</span>
                <span className="text-neutral-600 text-left">github.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
