import { useMotionValueEvent } from "motion/react";
import Navbar from "../../components/sections/navbar/Navbar";
import { PageMeta } from "../../components/ui/PageMeta";
import { useRef, useState } from "react";
import { useScroll } from "motion/react";
import PHero from "./components/Hero";
import { useParams } from "react-router-dom";
import { PREDICTIVE_AI_MODELS_DATA } from "../../lib/data";
import NotFoundPage from "../NotFoundPage";
import FeaturesScrollSection from "./components/FeaturesScrollSection";
import GhostCardsSection from "./components/GhostCardsSection";
import IndustriesWeEmpower from "../LandingPage/components/IndustriesWeEmpower";
import TestimonialCard from "../../components/ui/cards/TestimonialCard";
import OurLatestNews from "../../components/sections/OurLatestNews";
import ThreeOutlineCardsSection from "../../components/sections/ThreeOutlineCardsSection";
import CallToAction from "../../components/sections/CallToAction";

export default function PredictiveAIModelPage() {
  const { slug } = useParams();
  const PRODUCT = PREDICTIVE_AI_MODELS_DATA.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!PRODUCT) return <NotFoundPage />;
  return <Page key={PRODUCT.title} PRODUCT={PRODUCT} />;
}

function Page({
  PRODUCT,
}: {
  PRODUCT:
    | (typeof PREDICTIVE_AI_MODELS_DATA)[0]
    | (typeof PREDICTIVE_AI_MODELS_DATA)[1];
}) {
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
        title={`${PRODUCT.title}`}
        description={PRODUCT.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex ">
        <PHero navbarTriggerRef={navbarBgTrigger} {...PRODUCT} />
        <ThreeOutlineCardsSection bg content={PRODUCT.section1} />
        <FeaturesScrollSection content={PRODUCT.section2} />
        <GhostCardsSection cards={PRODUCT.section3} />
        <IndustriesWeEmpower />
        <section className="my-container side-padding">
          <TestimonialCard {...PRODUCT.testimonial} />
        </section>
        <OurLatestNews />
        <CallToAction />
      </main>
    </>
  );
}
