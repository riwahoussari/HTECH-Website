import { useRef, useState } from "react";
import CallToAction from "../../components/sections/CallToAction";
import Navbar from "../../components/sections/navbar/Navbar";
import { TrustedBy } from "../../components/sections/TrustedBy";
import { useMotionValueEvent, useScroll } from "motion/react";
import OurStory from "./components/OurStory";
import OurMission from "./components/OurMission";
import AboutHero from "./components/AboutHero";
import { PageMeta } from "../../components/ui/PageMeta";

export default function AboutPage() {
  // change navbar transparency on scroll
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <PageMeta
        title="About Gaiant | Building the Future of Language AI"
        description="Learn how Gaiant empowers enterprises to deploy secure, private AI agents at scale. Discover our mission to transform business through intelligent automation and cutting-edge language technology."
      />

      <Navbar transparentBg={transparentNavbar} />
      <main>
        <AboutHero navbarTriggerRef={navbarBgTrigger} />
        <OurStory />
        <OurMission />
        <TrustedBy />
        <CallToAction />
      </main>
    </>
  );
}
