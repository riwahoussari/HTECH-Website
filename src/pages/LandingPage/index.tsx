import Navbar from "../../components/sections/navbar/Navbar";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import LandingHero from "./components/LandingHero";
import PartnersMarquee from "../../components/sections/PartnersMarquee";
import WhatThisMeans from "./components/WhatThisMeans";
import WhatWeDo from "./components/WhatWeDo";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower";
import OurProducts from "./components/OurProducts";
import OurLatestNews from "../../components/sections/OurLatestNews";
import { INDUSTRIES_PAGE_DATA } from "../../lib/data";
import { TitleBlock } from "../../components/ui/Titles";
import CallToAction from "../../components/sections/CallToAction";
import TestimonialSection from "./components/TestimonialsSection";

export default function LandingPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <PageMeta title="Landing Page" description="lorem ipsum" />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        {/* Hero */}
        <div>
          <LandingHero navbarTriggerRef={navbarBgTrigger} />
          <PartnersMarquee />
        </div>
        <WhatThisMeans />
        <WhatWeDo />
        <IndustriesWeEmpower />
        <OurProducts />
        <TestimonialSection
          testimonials={INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.testimonials}
          titleBlock={<TitleBlock title="Why leaders trust us" />}
        />
        <OurLatestNews />
        <CallToAction />
      </main>
    </>
  );
}
