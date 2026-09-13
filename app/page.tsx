import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Showcase from "@/components/Showcase";
import Globe from "@/components/Globe";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Marquee />
      <Showcase />
      <Globe />
      <Stats />
      <Timeline />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
