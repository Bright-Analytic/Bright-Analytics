"use client";
import React from "react";
import { LineChart } from "@mui/x-charts";

export default function Chart() {
  return (
    <LineChart
      dataset={[
        { x: 0.4, y: 0 },
        { x: 1, y: 32 },
        { x: 1.6, y: 95 },
        { x: 2, y: 41 },
        { x: 2.3, y: 20 },
        { x: 2.7, y: 37 },
        { x: 3, y: 82 },
        { x: 3.5, y: 52 },
      ]}
      xAxis={[{ dataKey: "x" }]}
      series={[{ dataKey: "y" }]}
      height={350}
      margin={{ left: 30, right: 30, top: 30, bottom: 20 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
