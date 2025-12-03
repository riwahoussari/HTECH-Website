import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import PHero from "./components/Hero";
import { HORION_FOR_SALES, ICONS } from "../../lib/data";
import RealtimeAIFeatures from "./components/RealtimeAIFeatures";
import AboutHorion from "./components/AboutHorion";
import Steps from "./components/Steps";
import { PerformBetter } from "./components/PerformBetter";
import Undetectable from "./components/Undetectable";
import Stats from "./components/Stats";
import FAQs from "./components/FAQs";
import CallToAction from "../../components/sections/CallToAction";
import Cta from "./components/Cta";
import Certification from "./components/Certification";

export default function HorionForSalesPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLImageElement>(null);
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
        title="Generative AI | Horion for sales"
        description="lorem ipsum"
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <PHero navbarTriggerRef={navbarBgTrigger} />
        <RealtimeAIFeatures content={HORION_FOR_SALES.realtimeAI} />
        <AboutHorion />
        <Steps steps={HORION_FOR_SALES.steps} />
        <PerformBetter content={HORION_FOR_SALES.performBetter} />
        <Undetectable />
        <Stats stats={HORION_FOR_SALES.stats} />
        <Certification {...HORION_FOR_SALES.certification} />
        <FAQs faqs={HORION_FOR_SALES.faqs} />
        <Cta />
      </main>
    </>
  );
}
