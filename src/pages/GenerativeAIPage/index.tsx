import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import { GENERATIVE_AI_DATA, ICONS } from "../../lib/data";
import PHero from "./components/Hero";
import CallToAction from "../../components/sections/CallToAction";
import IntelligentSearch from "./components/IntelligentSearch";
import PutDataToWork from "./components/PutDataToWork";
import FeaturesSection from "../../components/sections/FeaturesSection";
import GhostCardsSection from "../PredictiveAIModelPage/components/GhostCardsSection";

export default function GenerativeAIPage() {
  const { slug } = useParams();
  const PRODUCT = GENERATIVE_AI_DATA.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!PRODUCT) return <NotFoundPage />;
  return <Page key={PRODUCT.title} PRODUCT={PRODUCT} />;
}

function Page({ PRODUCT }: { PRODUCT: (typeof GENERATIVE_AI_DATA)[0] }) {
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
        title={`${PRODUCT.title} | Generative AI`}
        description={PRODUCT.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <PHero navbarTriggerRef={navbarBgTrigger} {...PRODUCT} />
        <IntelligentSearch content={PRODUCT.intelligentSearch} />
        <PutDataToWork content={PRODUCT.putDataToWork} />
        <GhostCardsSection {...PRODUCT.underTheHood} />
        <FeaturesSection background={false} {...PRODUCT.searchFunctionality} />
        <CallToAction />
      </main>
    </>
  );
}
