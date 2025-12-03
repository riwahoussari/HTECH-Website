import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import { AI_FOR_RETAILERS_DATA } from "../../lib/data";
import PHero from "./components/Hero";
import CallToAction from "../../components/sections/CallToAction";
import FeaturesSection from "../../components/sections/FeaturesSection";
import TheChallenge from "./components/TheChallenge";
import TheSolution from "./components/TheSolution";

export default function AIForRetailersPage() {
  const { slug } = useParams();
  const PRODUCT = AI_FOR_RETAILERS_DATA.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!PRODUCT) return <NotFoundPage />;
  return <Page key={PRODUCT.title} PRODUCT={PRODUCT} />;
}

function Page({ PRODUCT }: { PRODUCT: (typeof AI_FOR_RETAILERS_DATA)[0] }) {
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
        title={`${PRODUCT.title} | AI For Retailers`}
        description={PRODUCT.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <PHero navbarTriggerRef={navbarBgTrigger} {...PRODUCT} />
        <TheChallenge content={PRODUCT.theChallenge} />
        <TheSolution content={PRODUCT.theSolution} />
        <FeaturesSection titleCentered={false} {...PRODUCT.howItWorks} />
        <CallToAction />
      </main>
    </>
  );
}
