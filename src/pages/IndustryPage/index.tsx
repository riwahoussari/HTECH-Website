import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import { GENERAL_DATA } from "../../lib/data";
import PHero from "./components/Hero";
import CallToAction from "../../components/sections/CallToAction";
import GhostCardsSection from "../PredictiveAIModelPage/components/GhostCardsSection";
import PartnersMarquee from "../../components/sections/PartnersMarquee";
import ThreeOutlineCardsSection from "../../components/sections/ThreeOutlineCardsSection";
import AccordionFullSection from "./components/AccordionFullSection";
import FeatureSection from "./components/FeatureSection";
import TestimonialCard from "../../components/ui/cards/TestimonialCard";
import OurLatestNews from "../../components/sections/OurLatestNews";

export default function IndustryPage() {
  const { industryName } = useParams();
  const INDUSTRY = GENERAL_DATA.INDUSTRIES.find(
    (i) => i.name.toLowerCase() === industryName?.toLowerCase()
  );

  console.log(industryName);

  if (!INDUSTRY) return <NotFoundPage />;
  return <Page key={INDUSTRY.name} INDUSTRY={INDUSTRY} />;
}

function Page({ INDUSTRY }: { INDUSTRY: (typeof GENERAL_DATA.INDUSTRIES)[0] }) {
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
      <PageMeta
        title={`AI solutions for ${INDUSTRY.name} industry`}
        description={INDUSTRY.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <div>
          <PHero
            navbarTriggerRef={navbarBgTrigger}
            {...INDUSTRY}
            title={`AI solutions for <br> ${INDUSTRY.name}`}
          />
          <PartnersMarquee />
        </div>
        <ThreeOutlineCardsSection content={INDUSTRY.outlineCardsSection} />
        <GhostCardsSection cards={INDUSTRY.ghostCardsSection} />
        <AccordionFullSection content={INDUSTRY.accordionSection} />
        <FeatureSection content={INDUSTRY.featureSection} />
        <section className="my-container side-padding">
          <TestimonialCard {...INDUSTRY.testimonial} />
        </section>
        <OurLatestNews />
        <CallToAction />
      </main>
    </>
  );
}
