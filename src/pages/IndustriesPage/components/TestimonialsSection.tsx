import { useEffect, useRef, useState } from "react";
import ArrowSvg from "../../../components/ui/ArrowSvg";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { CenteredTitleBlock, TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { INDUSTRIES_PAGE_DATA } from "../../../lib/data";

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
    <section
      ref={sectionRef}
      className="my-container side-padding relative"
    >
      

      {/* section title */}
      <div className="relative mb-8">
        <TitleBlock
          title="Why leading teams trust us"
        />
      </div>

      {/* testimonials container */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="bg-linear-white-transparent-70 relative mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-8 rounded-[20px] max-sm:bg-none! sm:p-12"
      >
        {/* animated testimonial */}
        <div className="bg-linear-white-transparent-70 relative flex w-full max-w-[800px] flex-col justify-between gap-8 overflow-hidden rounded-[20px] p-8">
          <AnimatePresence mode="wait">
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col justify-between gap-8 sm:p-8"
            >
              <p className="text-[19px] leading-[25px] xs:text-[21px] xs:leading-[27px]">
                {testimonials[index].text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[index].image}
                  className="aspect-square w-11 rounded-sm object-cover"
                  alt={`portrait of ${testimonials[index].name}`}
                />
                <div>
                  <p className="text-16 leading-[19px]">
                    {testimonials[index].name}
                  </p>
                  <p className="text-[13px] leading-[15px] text-[#838383] xs:text-[14px]">
                    {testimonials[index].title}
                  </p>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* pagination + arrows */}
        <div className="flex w-full max-w-[800px] items-center justify-between max-sm:px-8">
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
