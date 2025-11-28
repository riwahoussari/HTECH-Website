import { Link } from "react-router-dom";
import { BlurredLandscapeBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { useRef } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { LANDING_PAGE_DATA } from "../../../lib/data";

export default function ArcheSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  return (
    <section ref={sectionRef} className="relative mt-[300px]">
      {/* bg */}
      <BlurredLandscapeBg />

      {/* content */}
      <div className="my-container side-padding relative items-stretch justify-between gap-5 py-16 text-white lg:flex xl:gap-16">
        {/* text */}
        <div className="flex w-full flex-col items-start justify-between gap-10 xs:gap-20 md:flex-row lg:w-[40%] lg:flex-col">
          {/* arche */}
          <SlideUpAnim isInView={isInView}>
            <img
              src="/logos/arche-logo.svg"
              className="w-[120px] md:w-[154px]"
              alt="Arche Logo"
            />
          </SlideUpAnim>
          {/* text */}
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.35 }}
            className="max-xs:max-w-[357px]! max-lg:max-w-[450px]"
          >
            <p className="text-[31px] leading-[34px] xs:text-[38px] xs:leading-[42px] xl:text-[46px] xl:leading-[47px]">
              {LANDING_PAGE_DATA.ARCHE_SECTION.title}
            </p>
            <p className="mt-4 text-[15px] leading-[20px] max-lg:w-9/10 xs:mt-5 xs:text-[17px] xs:leading-[24px] xl:text-[22px] xl:leading-[28px]">
              {LANDING_PAGE_DATA.ARCHE_SECTION.text}
            </p>
            <Link to="/arche" aria-label="Lean more about Arche platform">
              <Button
                className="mt-[30px] hover:translate-x-1 xs:mt-[40px] xl:mt-[50px]"
                arrow={"spaced"}
                size={"md"}
              >
                LEARN MORE<span className="hidden"> about Arche platform</span>
              </Button>
            </Link>
          </SlideUpAnim>
        </div>

        {/* dashboard */}
        <SlideUpAnim
          className="mt-14 w-full xs:mt-20 lg:mt-0 lg:w-[60%] xl:w-[55%]"
          isInView={isInView}
          transition={{ delay: 0.2 }}
        >
          <img
            {...LANDING_PAGE_DATA.ARCHE_SECTION.img}
            className="h-full w-full object-contain"
          />
        </SlideUpAnim>
      </div>
    </section>
  );
}
