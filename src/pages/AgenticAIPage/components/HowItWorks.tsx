import { useEffect, useRef, useState, type ReactNode } from "react";
import { ICONS } from "../../../lib/data";
import { TitleBlock } from "../../../components/ui/Titles";
import {
  motion as m,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function HowItWorks() {
  const [scrollDistance, setScrollDistance] = useState("-75vw");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", `end end`],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", `${scrollDistance}`]
  );

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (cardsContainerRef.current && sectionRef.current) {
        setScrollDistance(
          `-${Math.abs(cardsContainerRef.current.clientWidth - sectionRef.current.clientWidth)}px`
        );
      }
    };

    calculateScrollDistance();

    window.addEventListener("resize", calculateScrollDistance);
    return () => window.removeEventListener("resize", calculateScrollDistance);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    console.log(val);
  });

  return (
    <section ref={sectionRef} className={` max-lg:h-auto max-2xl:h-[200vh]`}>
      <div className="my-container side-padding">
        <TitleBlock title={"How it works"} />
        {/* fixed cards w < lg || 2xl < w */}
        <div className="max-lg:grid hidden 2xl:grid 2xl:grid-cols-3 gap-5">
          <Card
            title="Input"
            text="Connect data sources, and define requirements, tools and budget."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-1.svg",
              alt: "Vector showcasing the first step in the working process of Agentic AI",
            }}
          />
          <Card
            title="Plan & execute"
            text="Agents dynamically create & execute plans, break complex tasks into actionable steps, and validate results."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-2.svg",
              alt: "Vector showcasing the second step in the working process of Agentic AI",
            }}
          />
          <Card
            title="Output"
            text="Generates output that meets all requirements, with a validation report and visual execution graph."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-3.svg",
              alt: "Vector showcasing the third step in the working process of Agentic AI",
            }}
          />
        </div>
      </div>

      {/* horizontal scroll cards lg < w < 2xl */}
      <div className="overflow-x-hidden sticky top-20 max-lg:hidden block 2xl:hidden">
        <m.div
          style={{ translateX }}
          ref={cardsContainerRef}
          className="flex gap-5 w-max side-padding"
        >
          <Card
            title="Input"
            text="Connect data sources, and define requirements, tools and budget."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-1.svg",
              alt: "Vector showcasing the first step in the working process of Agentic AI",
            }}
          />
          <Card
            title="Plan & execute"
            text="Agents dynamically create & execute plans, break complex tasks into actionable steps, and validate results."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-2.svg",
              alt: "Vector showcasing the second step in the working process of Agentic AI",
            }}
          />
          <Card
            title="Output"
            text="Generates output that meets all requirements, with a validation report and visual execution graph."
            icon={ICONS.HEXAGON}
            bg={{
              src: "/assets/demos/agentic-ai/how-it-works-3.svg",
              alt: "Vector showcasing the third step in the working process of Agentic AI",
            }}
          />
        </m.div>
      </div>
    </section>
  );
}

function Card({
  title,
  text,
  icon,
  bg,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  bg: { src: string; alt: string };
}) {
  return (
    <div className="lg-rounded bg-blueish-gray/15 overflow-hidden relative max-w-[700px] max-lg:max-w-[500px] max-lg:w-full lg:w-[50vw] 2xl:w-full flex flex-col gap-2">
      <div className="flex items-center gap-2 lg:gap-4 p-3 lg:p-5 relative z-1">
        <div className="bg-gold rounded-md aspect-square w-8 lg:w-12 p-2 lg:p-3 text-white">
          {icon}
        </div>
        <p className="text-16">{title}</p>
      </div>

      <img {...bg} className="w-full object-contain" />

      <div className="h-full flex items-end">
        <p className="text-20 font-light relative z-1 p-5">{text}</p>
      </div>
    </div>
  );
}
