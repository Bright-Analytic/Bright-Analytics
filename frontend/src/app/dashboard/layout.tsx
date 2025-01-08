"use client"
import DashLoading from "@/components/dashboard/loading";
import DashNavbar from "@/components/dashboard/navbar";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  if(!user.isLoaded){
    return <DashLoading/>
  }
  if(!user.isSignedIn){
    redirect('/')
  }
  return (
    <main className="bg-white overflow-hidden">
      <DashNavbar />
      <section className="lg:max-w-7xl mx-auto py-5">{children}</section>
    </main>
  );
}
