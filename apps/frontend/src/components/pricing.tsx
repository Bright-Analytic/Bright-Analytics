import Link from "next/link";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white md:py-20 py-10 justify-center md:flex block"
    >
      <div className="md:w-[80%] px-5 md:px-0">
        <div className="md:flex block justify-between">
          <div className="flex flex-col text-neutral-800 gap-y-5">
            <span className="text-4xl">
              Find the perfect plan for your project
            </span>
            <span className="text-sm text-neutral-500">
              We believe Bright Analytics should be accessible to all statups
              and companies, no matter the size.
            </span>
          </div>
          <div className="md:py-0 py-5">
            <div className="grid bg-neutral-200 rounded-lg md:flex grid-cols-2 px-0.5 py-0.5 gap-x-0.5">
              <button className="border px-5 h-10 flex md:w-auto w-full justify-center bg-white text-sm shadow-sm text-zinc-800 rounded-lg">
                <span className="w-2 h-2 rounded-full mr-2 bg-green-600 my-auto" />
                <span className="my-auto">Yearly pricing</span>
              </button>
              <button
                disabled
                className="border px-5 h-10 flex md:w-auto w-full justify-center disabled:bg-transparent disabled:opacity-60 bg-white text-sm shadow-sm text-zinc-800 rounded-lg"
              >
                <span className="w-2 h-2 rounded-full mr-2 bg-zinc-600 my-auto" />
                <span className="my-auto">Monthly pricing</span>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 gap-x-10 px-5 py-10 grid md:grid-cols-3 grid-cols-1 gap-y-5">
          <div className="bg-zinc-100 pt-10 py-5 px-5 rounded-xl">
            <div>
              <h4 className="text-3xl mb-2">$10/mth</h4>
              <h5 className="text-sm">Basic plan</h5>
              <span className="text-xs text-neutral-600 -mt-2">
                Billed anually.
              </span>
            </div>
            <div className="flex flex-col gap-y-3 py-3">
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Access to all basic features
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Basic reporting and analytics
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Up to 10 individual users
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  20GB individual data each user
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Basic chat and email support
                </span>
              </div>
            </div>
            <div className="gap-x-2 flex flex-col justify-center mt-5 gap-y-2">
              <Link href="/dashboard">
                <button className="bg-neutral-800 h-10 w-full text-sm shadow-sm rounded-lg text-zinc-100">
                  Get started
                </button>
              </Link>
              <Link href="/">
                <button className="border h-10 w-full bg-white items-center text-sm shadow-sm text-zinc-800 rounded-lg">
                  Chat to sales
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-zinc-100 border-2 border-black py-5 pt-10 px-5 rounded-xl relative">
            <span className="bg-black rounded-full px-4 py-1 text-white text-xs absolute -top-3 right-3">
              Popular
            </span>
            <div>
              <h4 className="text-3xl mb-2">$20/mth</h4>
              <h5 className="text-sm">Business plan</h5>
              <span className="text-xs text-neutral-600 -mt-2">
                Billed anually.
              </span>
            </div>
            <div className="flex flex-col gap-y-3 py-3">
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  200+ integrations
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Advance reporting and analytics
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Up to 20 individual users
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  40GB individual data each user
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Priority chat and email support
                </span>
              </div>
            </div>
            <div className="gap-x-2 flex flex-col justify-center mt-5 gap-y-2">
              <Link href="/dashboard">
                <button className="bg-neutral-800 h-10 w-full text-sm shadow-sm rounded-lg text-zinc-100">
                  Get started
                </button>
              </Link>
              <Link href="/">
                <button className="border h-10 w-full bg-white items-center text-sm shadow-sm text-zinc-800 rounded-lg">
                  Chat to sales
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-zinc-100 py-5 pt-10 px-5 rounded-xl">
            <div>
              <h4 className="text-3xl mb-2">$80/mth</h4>
              <h5 className="text-sm">Enterprise plan</h5>
              <span className="text-xs text-neutral-600 -mt-2">
                Billed anually.
              </span>
            </div>
            <div className="flex flex-col gap-y-3 py-3">
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Advance custom fields
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Audit log and data history
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  ultimate individual users
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  unlimited individual data
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaRegCircleCheck className="fill-green-600" />
                <span className="text-sm text-zinc-500 font-thin">
                  Personal & priority service
                </span>
              </div>
            </div>
            <div className="gap-x-2 flex flex-col justify-center mt-5 gap-y-2">
              <Link href="/dashboard">
                <button className="bg-neutral-800 h-10 w-full text-sm shadow-sm rounded-lg text-zinc-100">
                  Get started
                </button>
              </Link>
              <Link href="/">
                <button className="border h-10 w-full bg-white items-center text-sm shadow-sm text-zinc-800 rounded-lg">
                  Chat to sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
