import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Showcase from "@/components/Showcase";
import Globe from "@/components/Globe";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Showcase />
      <Globe />
      <Stats />
      <Timeline />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
