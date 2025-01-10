import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

import { ClerkProvider } from "@clerk/nextjs";

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
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bright Analytics",
  description:
    "Bright Analytics is a Google Analytics alternative that doesn't compromise visitor privacy for data.",
  twitter: {
    title: "Bright Analytics",
    description:
      "Bright Analytics is a Google Analytics alternative that doesn't compromise visitor privacy for data.",
    images: ["/home-screenshot.png"],
  },
  openGraph: {
    images: ["/home-screenshot.png"],
    type: "website",
    countryName: "India",
    description:
      "Bright Analytics is a Google Analytics alternative that doesn't compromise visitor privacy for data.",
    title: "Bright Analytics",
    emails: "hey@adityasharma.live",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  userScalable: false,
  colorScheme: "light",
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
          <Footer />
          {/* <script async={true} src="https://scripts.adityasharma.live/script.js"></script> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
