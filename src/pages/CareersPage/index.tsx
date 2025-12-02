import Navbar from "../../components/sections/navbar/Navbar";
import { PageMeta } from "../../components/ui/PageMeta";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { CAREERS_PAGE_DATA } from "../../lib/data";
import PHero from "./components/Hero";
import CurrentOpenings from "./components/CurrentOpenings";

export default function CareersPage() {
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
        description={CAREERS_PAGE_DATA.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex main-pb">
        <PHero navbarTriggerRef={navbarBgTrigger} {...CAREERS_PAGE_DATA} />
        <CurrentOpenings openings={CAREERS_PAGE_DATA.currentOpenings} />
      </main>
    </>
  );
}
