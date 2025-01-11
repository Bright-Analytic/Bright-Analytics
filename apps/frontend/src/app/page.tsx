import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
