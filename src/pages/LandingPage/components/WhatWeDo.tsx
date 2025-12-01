import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { TitleBlock } from "../../../components/ui/Titles";
import {
  motion as m,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Button from "../../../components/ui/Button";

const CARDS = [
  {
    title: "Generative AI & Automations",
    text: "Ensure privacy and compliance with multi-layered protection, access controls, and industry-certified security standards.",
    img: {
      src: "/assets/demos/generative-ai-and-automations.svg",
      alt: "Image of the Patient History Dashboard",
    },
  },
  {
    title: "Predictive AI Models",
    text: "Secure your data by deploying within a dedicated virtual private cloud (VPC) environment or on-premises, air-gapped behind your firewall.",
    img: {
      src: "/assets/demos/predictive-ai-models.svg",
      alt: "Image of the Patient History Dashboard",
    },
  },
  {
    title: "Agentic AI",
    text: "Secure your data by deploying within a dedicated virtual private cloud (VPC) environment or on-premises, air-gapped behind your firewall.",
    img: {
      src: "/assets/demos/agentic-ai.svg",
      alt: "Image of the Patient History Dashboard",
    },
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative overflow-x-clip pb-24">
      <div
        className="side-padding my-container py-[10px]"
        style={{ paddingBottom: `${CARDS.length * 30}px` }}
      >
        {/* title */}
        <div className="relative mb-12">
          <TitleBlock title={"What we do"} />
        </div>

        {/* cards */}
        <div ref={cardsContainerRef} className="grid grid-rows-3">
          {CARDS.map((content, i) => (
            <Card
              content={content}
              progress={scrollYProgress}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  isInView,
  index,
  progress,
  content,
}: {
  isInView: boolean;
  progress: MotionValue<number>;
  index: number;
  content: {
    title: string;
    text: string;
    img: {
      src: string;
      alt: string;
    };
  };
}) {
  const scaleRange = [index * (1 / CARDS.length), 1];
  const targetScale = 1 - (CARDS.length - index) * 0.01;
  const scale = useTransform(progress, scaleRange, [1, targetScale]);

  return (
    <div className="sticky top-20 bg-red/0">
      <m.div
        style={{ scale, top: `${index * 30}px` }}
        className={
          "bg-blueish-gray/25 border border-blueish-gray/25 shadow-lg shadow-blueish-gray/25 h-full relative overflow-hidden flex max-lg:flex-col origin-top items-center justify-between lg-rounded gap-x-5 gap-y-10  px-4 py-16 lg:p-10 "
        }
      >
        {/* bg */}
        <img
          src="/assets/textured-bg.png"
          alt="Textured Background"
          className={
            "max-lg absolute object-cover left-1/2 -translate-x-1/2 min-h-full max-lg:top-0 min-w-full lg:scale-300 bg-blueish-gray " +
            (index === 0 ? " lg:top-0 origin-top " : "") +
            (index === 1 ? " lg:top-1/2 lg:-translate-y-1/2 origin-center " : "") +
            (index === 2 ? " lg:bottom-0 origin-bottom " : "")
          }
        />

        {/* text */}
        <div className="relative lg:w-1/2 z-1 text-white max-lg:text-center flex flex-col lg:items-start items-center ">
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.4 }}>
            <p className="text-64 max-xs:text-[12vw]! leading-none! mb-4"> {content.title}</p>
          </SlideUpAnim>
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
            <p className="text-20 leading-[1.2]! max-w-[550px] mb-8">
              {content.text}
            </p>
          </SlideUpAnim>
          <Button
            clr={"white"}
            variant={"outline"}
            size={"md"}
            arrow={"normal"}
            // className="border-0! p-0!"
          >
            Learn more
          </Button>
        </div>

        {/* image */}
        <SlideUpAnim
          className="relative h-full w-full max-w-[500px] lg:max-w-[700px] lg:w-1/2 flex justify-center items-center"
          isInView={isInView}
          transition={{ delay: 0.4 }}
        >
          <img
            src={content.img.src}
            alt={content.img.alt}
            className="h-full object-contain"
          />
        </SlideUpAnim>
      </m.div>
    </div>
  );
}
