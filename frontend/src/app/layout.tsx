import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

import {
  ClerkProvider
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinFont = Poppins({
  weight: "500",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Analytics Pro",
  description: "Not generated by next app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinFont.className} antialiased`}
      >
        {children}
      <Footer/>
      <script async={true} src="https://scripts.adityasharma.live/script.js"></script>
      </body>
    </html>
    </ClerkProvider>
  );
}