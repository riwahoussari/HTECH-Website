import { PageMeta } from "../../components/ui/PageMeta";
import Navbar from "../../components/sections/navbar/Navbar";
import { useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { useScroll } from "motion/react";
import { useParams } from "react-router-dom";
import { GENERAL_DATA } from "../../lib/data";
import NotFoundPage from "../NotFoundPage";
import PHero from "./components/Hero";
import Article from "./components/Article";
import Testimonial from "./components/Testimonial";

export default function CaseStudyPage() {
  const { title } = useParams();

  const CASE_STUDY = GENERAL_DATA.CASE_STUDIES.find(
    (cs) => cs.name.toLowerCase() === title?.toLowerCase()
  );
  if (!CASE_STUDY) return <NotFoundPage />;
  return <Page CASE_STUDY={CASE_STUDY} />;
}

function Page({
  CASE_STUDY,
}: {
  CASE_STUDY: {
    name: string;
    description: string;
    img: {src: string; alt: string;};
    markdown: string;
  };
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
        title={`Case Study | ${CASE_STUDY.name}`}
        description={CASE_STUDY.description}
      />
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <PHero
          text={CASE_STUDY.description}
          title={CASE_STUDY.name}
          img={CASE_STUDY.img}
          navbarTriggerRef={navbarBgTrigger}
        />
        <Article content={CASE_STUDY.markdown} />
        <Testimonial
          text="“Cohere boosted search quality by 30%, giving lawyers the right proprietary data at their fingertips.”"
          name="James Ding"
          position="Co-founded and CEO"
          company="Draftwise"
        />
      </main>
    </>
  );
}
