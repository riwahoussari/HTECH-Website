import { useMotionValueEvent } from "motion/react";
import Navbar from "../../components/sections/navbar/Navbar";
import { PageMeta } from "../../components/ui/PageMeta";
import { useRef, useState } from "react";
import { useScroll } from "motion/react";
import PHero from "./components/Hero";
import { PARTNERS_DATA } from "../../lib/data";
import CloudPartners from "./components/CloudPartners";
import SystemPartners from "./components/SystemPartners";
import WhyHtech from "./components/WhyHtech";
import BecomePartnerCTA from "./components/BecomePartnerCta";
import PartnersMarquee from "../../components/sections/PartnersMarquee";

export default function PartnersPage() {
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
        title={`Htech Partners`}
        description={PARTNERS_DATA.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <div>
        <PHero navbarTriggerRef={navbarBgTrigger} {...PARTNERS_DATA} />
        <PartnersMarquee />
        </div>
            
        <CloudPartners content={PARTNERS_DATA.cloudPartners} />
        <SystemPartners content={PARTNERS_DATA.systemPartners} />
        <WhyHtech content={PARTNERS_DATA.whyHtech} />
        <BecomePartnerCTA />
      </main>
    </>
  );
}
