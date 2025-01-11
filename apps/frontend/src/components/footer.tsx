import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white relative text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid md:grid-cols-6 grid-cols-2 md:px-0 px-5 gap-y-5">
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Product</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Overview
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Features
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Solutions
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Tutorials
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Pricing
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Releases
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Company</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              About us
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Careers
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Press
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              News
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Media kit
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Contact
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Resources</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Blog
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Newsletter
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Events
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Help center
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Tutorials
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Support
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Use cases</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Statup
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Enterprise
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Government
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              SaaS centre
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Marketplaces
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Ecommerce
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Social</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Twitter
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Linkedin
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Facebook
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Github
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              AngelList
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Dribbble
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4">
            <li className="md:text-sm text-base">Legal</li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Terms
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Privacy
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Cookie
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Licences
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Settings
            </li>
            <li className="md:text-xs text-sm hover:underline transition-all cursor-pointer text-neutral-500">
              Contact
            </li>
          </ul>
        </div>
        <div className="pt-5 border-t mt-5 flex justify-between">
          <div>
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
          <div>
            <span className="text-neutral-500 text-sm">
              @ 2077 Bright Analytics. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
