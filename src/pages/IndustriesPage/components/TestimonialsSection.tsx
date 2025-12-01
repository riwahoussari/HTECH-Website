import { useEffect, useRef, useState } from "react";
import ArrowSvg from "../../../components/ui/ArrowSvg";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { CenteredTitleBlock, TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { INDUSTRIES_PAGE_DATA } from "../../../lib/data";
import NetBg from "../../../components/ui/NetBg";

const testimonials = INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.testimonials;

export default function TestimonialSection() {
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
      <div className="relative mb-8">
        <TitleBlock title="Why leaders trust us" />
      </div>

      {/* testimonials card */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="bg-blueish-gray/15 overflow-hidden lg-rounded relative w-full p-6 sm:p-10 sm:pb-5 lg:p-16 lg:pb-8"
      >
        {/* content */}
        <AnimatePresence mode="wait">
          <m.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col xl:min-h-[430px] justify-between gap-20 sm:gap-32 max-w-[1000px] relative z-1"
          >
            <p className="text-32">{testimonials[index].text}</p>

            <div className="flex justify-between gap-6 xs:items-end max-xs:flex-col">
              <div className="space-y-1.5">
                <p className="text-20 font-light uppercase">
                  {testimonials[index].name}
                </p>
                <p className="text-20 font-light uppercase">
                  — {testimonials[index].title}
                </p>
              </div>
              <p className="text-20 font-light uppercase">
                {testimonials[index].company}
              </p>
            </div>
          </m.div>
        </AnimatePresence>

        {/* background net */}
        <NetBg
          color="var(--color-gold)"
          className="absolute z-0 opacity-60 origin-top w-[3000px] top-1/2 left-1/2 -translate-1/2"
        />
      </SlideUpAnim>

      {/* pagination + arrows */}
      <div className="flex w-full px-6 sm:px-10 lg:px-16 mt-6 sm:mt-8 lg:mt-10 items-center justify-between">
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
    </section>
  );
}
