import CallToAction from "../../components/sections/CallToAction";
import Navbar from "../../components/sections/navbar/Navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import IndustriesHero from "./components/IndustriesHero";
import IndustriesCards from "./components/IndustriesCards";
import TestimonialSection from "./components/TestimonialsSection";
import { PageMeta } from "../../components/ui/PageMeta";

export default function IndustriesPage() {
  // change navbar transparency on scroll
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["start end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <PageMeta
        title="AI Solutions for Every Industry | Gaiant"
        description="From finance and healthcare to government and education, Gaiant delivers industry-specific AI solutions that adapt, scale, and transform the way organizations work and make decisions."
      />
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <IndustriesHero />
        <IndustriesCards navbarTriggerRef={navbarBgTrigger} />
        <TestimonialSection />
        <CallToAction />
      </main>
    </>
  );
}
