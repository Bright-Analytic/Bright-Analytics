"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function DashClientBtn() {
  const user = useUser();
  return (
    <React.Fragment>
      {user.isLoaded && user.isSignedIn ? (
        <Link href="/dashboard">
          <button className="bg-neutral-800 h-12 px-10 text-sm shadow-sm rounded-lg text-zinc-100">
            Dashboard
          </button>
        </Link>
      ) : null}
    </React.Fragment>
  );
}
