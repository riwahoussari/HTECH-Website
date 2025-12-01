import { useRef } from "react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../../components/ui/Titles";
import { useInView } from "motion/react";
import { AnimatedText, SlideUpAnim } from "../../../components/ui/Anims";
import { LANDING_PAGE_DATA } from "../../../lib/data";

export default function WhatMakesUsDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section ref={sectionRef} className="mt-[110px] overflow-x-clip">
      {/* Titles */}
      <div className="my-container side-padding flex grid-cols-3 flex-col gap-5 lg:grid lg:gap-8">
        <SectionSubTitle className="pt-3 lg:mb-[110px]">
          <AnimatedText isInView={isInView}>
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.subtitle}
          </AnimatedText>
        </SectionSubTitle>
        <SectionTitle className="col-span-2 mb-6 max-w-[470px] sm:mb-9">
          <AnimatedText isInView={isInView}>
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.title}
          </AnimatedText>
        </SectionTitle>
      </div>

      {/* description and cards */}
      <div className="my-container side-padding grid-cols-3 gap-8 lg:grid">
        {/* section description */}
        <SlideUpAnim
          isInView={isInView}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="max-w-[310px] text-[15px] max-lg:hidden xs:text-[17px]">
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text}
            <br />
            <br />
            <span className="font-bold">
              {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.boldText}
            </span>
          </p>
        </SlideUpAnim>

        {/* cards */}
        <div className="relative col-span-2 grid gap-5 max-lg:mt-[30px] max-sm:mt-[0] sm:grid-cols-2">
          <div className="-translate-x- absolute bottom-1/2 -z-1 w-[500px] translate-y-1/2 opacity-70 max-sm:left-0 max-sm:scale-y-200 sm:right-0 sm:translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
            <GradientCircle blur={"lg"} />
          </div>

          <p className="pe-6 pt-4 text-[15px] max-lg:mb-[30px] xs:text-[17px] lg:hidden lg:max-w-[310px]">
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text}
            <br />
            <br />
            <span className="font-bold">
              {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.boldText}
            </span>
          </p>

         
        </div>
      </div>
    </section>
  );
}
