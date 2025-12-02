import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import PHero from "./components/Hero";
import CallToAction from "../../components/sections/CallToAction";
import OurLatestNews from "../../components/sections/OurLatestNews";
import { PUBLIC_SECTOR_PAGE_DATA } from "../../lib/data";
import ThreeOutlineCardsSection from "../../components/sections/ThreeOutlineCardsSection";
import TestimonialCard from "../../components/ui/cards/TestimonialCard";
import AISolutionsSection from "./components/AISolutionsSection";
import UseCases from "./components/UseCases";
import Partners from "./components/Partners";

export default function PublicSectorPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  const data = PUBLIC_SECTOR_PAGE_DATA;

  return (
    <>
      <PageMeta
        title={`Government | Public Sector`}
        description={data.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <PHero
          title={data.title}
          text={data.description}
          img={data.img}
          navbarTriggerRef={navbarBgTrigger}
        />
        <Partners images={data.partners} />
        <UseCases content={data.useCases} />
        <AISolutionsSection content={data.AISolutionsSection} />
        <div>
          <ThreeOutlineCardsSection content={data.outlineCardsSection} />
          <section className="my-container side-padding mt-6 xl:mt-10">
            <TestimonialCard {...data.testimonial} />
          </section>
        </div>
        <OurLatestNews />
        <CallToAction />
      </main>
    </>
  );
}
