import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import { AGENTIC_AI_DATA } from "../../lib/data";
import PHero from "./components/Hero";
import OurLatestNews from "../../components/sections/OurLatestNews";
import TestimonialCard from "../../components/ui/cards/TestimonialCard";
import UseCases from "./components/UseCases";
import FeaturesSection from "../../components/sections/FeaturesSection";
import CallToAction from "../../components/sections/CallToAction";
import HowItWorks from "./components/HowItWorks";

export default function AgenticAIPage() {
  const { slug } = useParams();
  const PRODUCT = AGENTIC_AI_DATA.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!PRODUCT) return <NotFoundPage />;
  return <Page key={PRODUCT.title} PRODUCT={PRODUCT} />;
}

function Page({ PRODUCT }: { PRODUCT: (typeof AGENTIC_AI_DATA)[0] }) {
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
        title={`Agentic AI | ${PRODUCT.title}`}
        description={PRODUCT.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <PHero navbarTriggerRef={navbarBgTrigger} {...PRODUCT} />
        <HowItWorks />
        <FeaturesSection features={PRODUCT.features} />
        <section className="my-container side-padding">
          <TestimonialCard {...PRODUCT.testimonial} />
        </section>
        <UseCases content={PRODUCT.useCases} />
        <OurLatestNews />
        <CallToAction />
      </main>
    </>
  );
}
