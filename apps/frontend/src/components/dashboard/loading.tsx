"use client";
import React from "react";
import Lottie from "react-lottie-player";
import dashLoadingJson from "@/assets/lottie/dash-loading.json";

export default function DashLoading() {
  return (
    <section className="min-h-screen min-w-screen flex justify-center items-center">
      <Lottie loop animationData={dashLoadingJson} play />
    </section>
  );
}
