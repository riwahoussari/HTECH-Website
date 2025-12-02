import { TitleBlock } from "../../../components/ui/Titles";
import CardsSlider from "../../../components/ui/cards/CardsSlider";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useInView } from "motion/react";
import { GENERAL_DATA, LANDING_PAGE_DATA } from "../../../lib/data";
import IndustryCard from "../../../components/ui/cards/IndustryCard";

export default function IndustriesWeEmpower() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="side-padding my-container overflow-x-hidden"
    >
      {/* title */}
      <TitleBlock {...LANDING_PAGE_DATA.INDUSTRIES_WE_EMPOWER} />

      <CardsSlider>
        {GENERAL_DATA.INDUSTRIES.map((industry, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
            key={i}
          >
            <IndustryCard
              className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
              title={industry.name}
              img={industry.img}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
