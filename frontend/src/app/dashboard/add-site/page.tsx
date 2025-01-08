"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// icons
import { IoCodeSlash } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import HtmlHelp from "@/components/dashboard/tech-help/html";
import NextjsHelp from "@/components/dashboard/tech-help/nextjs";
import { useRouter } from "next/navigation";

enum Selections {
  HTML,
  NEXTJS,
}

export default function AddSite() {
  const router = useRouter()
  const [hostname, setHostname] = useState<string>("");
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/dashboard/install/?hostname=${hostname.trim()}`)
  }

  const [selected, setSelected] = useState<Selections>(Selections.HTML);

  const techs = [
    {
      title: "HTML",
      type: Selections.HTML,
      icon: <IoCodeSlash size={20} />,
    },
    {
      title: "NextJS",
      type: Selections.NEXTJS,
      icon: <RiNextjsFill size={30} />,
    },
  ];

  return (
    <section className="min-h-screen lg:px-20 md:px-10 sm:px-5 px-3 sm:py-10 py-3 bg-white">
      <div className="flex md:flex-row flex-col gap-y-5 justify-between">
        <div className="lg:w-[35%]">
          <div>
            <span className="text-3xl text-neutral-700">
              Add a new website.
            </span>
          </div>
          <div>
            <span className="text-neutral-400 text-sm">
              You have used 1/5 websites.
            </span>
          </div>
          <form
            className="flex w-full max-w-sm items-center space-x-2 my-5"
            onSubmit={handleSubmit}
          >
            <Input value={hostname} onChange={(e)=>setHostname(e.target.value)} type="text" required placeholder="www.brightanalytics.com" />
            <Button type="submit">I installed the script</Button>
          </form>
        </div>
        <div className="md:w-[65%] md:px-10">
          <div>
            <span className="text-3xl text-neutral-700">
              Install the Bright Analytics script
            </span>
          </div>
          <div className="flex flex-row justify-between my-2 items-center">
            <span className="text-neutral-400 text-sm">
              We have detected this technology on your website:
            </span>
            <span className="text-neutral-100 cursor-pointer hover:opacity-85 bg-black rounded-full px-2 py-1 text-xs">
              View all
            </span>
          </div>
          <div className="flex flex-wrap gap-3 my-5">
            {techs.map((t, i) => (
              <div
                onClick={() => setSelected(t.type)}
                key={i}
                className={`flex hover:bg-neutral-100 transition cursor-pointer justify-center items-center rounded-xl py-5 px-8 ${
                  t.type === selected
                    ? "ring-black ring-2 bg-neutral-100"
                    : "border-neutral-400 border"
                }`}
              >
                <div className="flex flex-col gap-y-2">
                  {t.icon}
                  <span className="text-xl">{t.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="my-5">
            {selected === Selections.HTML ? <HtmlHelp/> : selected === Selections.NEXTJS ? <NextjsHelp/> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
