import { useInView } from "motion/react";
import { useRef } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { INDUSTRY_PAGE_DATA } from "../../../lib/data";

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section ref={sectionRef} className="side-padding my-container mt-[120px]">
      <div className="grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock
          title={INDUSTRY_PAGE_DATA.OUR_APPROACH.title}
          subtitle={INDUSTRY_PAGE_DATA.OUR_APPROACH.subtitle}
        />
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }} className="xl:col-span-2">
          <p className="text-16 max-w-[432px]">
            {INDUSTRY_PAGE_DATA.OUR_APPROACH.text}
          </p>
        </SlideUpAnim>
      </div>

      <div className="mt-16 grid max-md:max-w-[520px] xl:grid-cols-3">
        <SlideUpAnim
          initial={{ y: "50px" }}
          className="col-span-2 xl:col-start-2"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <img {...INDUSTRY_PAGE_DATA.OUR_APPROACH.img} className="w-full" />
        </SlideUpAnim>
      </div>
    </section>
  );
}
