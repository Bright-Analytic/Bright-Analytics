import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import DemoView from "@/components/demo-view";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Integrations from "@/components/integrations";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Features/>
      <Benefits/>
      <Integrations/>
      <Pricing/>
      <DemoView/>
      <Contact/>
      <Footer/>
    </main>
  );
}
