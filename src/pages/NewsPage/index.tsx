import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import ArticlesSection from "./components/ArticlesSection";
import CallToAction from "../../components/sections/CallToAction";
import Navbar from "../../components/sections/navbar/Navbar";
import { PageMeta } from "../../components/ui/PageMeta";

export default function NewsPage() {
  // change navbar transparency on scroll
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? true : false)
  );

  return (
    <>
      <PageMeta
        title="News & AI Perspectives"
        description="Stay up to date with the latest from Gaiant. Explore articles and insights on AI innovation, automation, and how intelligent systems are transforming modern industries."
      />
      <Navbar transparentBg={transparentNavbar} />
      <main className="main-flex">
        <ArticlesSection
          navbarTriggerRef={navbarBgTrigger}
          className="mt-[200px]!"
          withBall
          fetchPriority="high"
        />
        <CallToAction />
      </main>
    </>
  );
}
