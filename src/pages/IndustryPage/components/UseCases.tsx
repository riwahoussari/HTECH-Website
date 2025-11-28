import { useRef } from "react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { useInView } from "motion/react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/Cards";
import { INDUSTRY_PAGE_DATA } from "../../../lib/data";

export default function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="side-padding my-container relative mt-[120px]"
    >
      <div className="absolute top-[calc(50%+100px)] left-1/2 z-0 -translate-1/2 opacity-70">
        <GradientCircle
          className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-400"
          colorr={"teal"}
        />
      </div>

      {/* title */}
      <div className="relative grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock
          title={INDUSTRY_PAGE_DATA.USE_CASES.title}
          subtitle={INDUSTRY_PAGE_DATA.USE_CASES.subtitle}
        />
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
          <p className="text-16 max-w-[292px]">
            {INDUSTRY_PAGE_DATA.USE_CASES.text}
          </p>
        </SlideUpAnim>
        <SlideUpAnim className="flex xl:justify-end md:col-start-2 xl:col-start-3" isInView={isInView} transition={{ delay: 0.3 }}>
          <Button
            className="max-sm:mt-3"
            variant={"black"}
          >
            REQUEST A DEMO
          </Button>
        </SlideUpAnim>
      </div>

      {/* cards */}
      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {INDUSTRY_PAGE_DATA.USE_CASES.cards.map((useCase, i) => (
          <SlideUpSelf key={i}>
            <GlassCard className="w-full" {...useCase} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
