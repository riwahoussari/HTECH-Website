import React, { useEffect, useRef, useState, type ReactNode } from "react";
import ArrowSvg from "../../../components/ui/ArrowSvg";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import NetBg from "../../../components/ui/NetBg";
import { TestimonialCard } from "../../../components/ui/Cards";

export default function TestimonialSection({
  titleBlock,
  testimonials,
}: {
  titleBlock?: ReactNode;
  testimonials: {
    text: string;
    name: string;
    position: string;
    company: string;
  }[];
}) {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section ref={sectionRef} className="my-container side-padding relative">
      {/* section title */}
      {titleBlock}

      <SlideUpAnim transition={{ delay: 0.3 }} isInView={isInView}>
        {/* content */}
        <AnimatePresence mode="wait">
          <m.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <TestimonialCard {...testimonials[index]} />
          </m.div>
        </AnimatePresence>

        {/* pagination + arrows */}
        <div className="flex w-full px-6 sm:px-10 lg:px-12 mt-6 sm:mt-8 lg:mt-10 items-center justify-between">
          {/* dots */}
          <div className="flex gap-6 sm:gap-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`aspect-square w-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === index ? "bg-black" : "bg-black/30 hover:bg-black/50"
                }`}
              />
            ))}
          </div>

          {/* arrows */}
          <div className="flex items-center gap-8">
            <button aria-label="left arrow" onClick={prev}>
              <span className="hidden">Left Arrow</span>
              <ArrowSvg
                className="w-6 rotate-180 cursor-pointer duration-200 ease-in-out hover:-translate-x-1"
                color="black"
              />
            </button>
            <button aria-label="right arrow" onClick={next}>
              <span className="hidden">Right Arrow</span>
              <ArrowSvg
                className="w-6 cursor-pointer duration-200 ease-in-out hover:translate-x-1"
                color="black"
              />
            </button>
          </div>
        </div>
      </SlideUpAnim>
    </section>
  );
}
