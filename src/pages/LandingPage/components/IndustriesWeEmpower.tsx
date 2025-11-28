import { TitleBlock } from "../../../components/ui/Titles";
import { CardsSlider, IndustryCard } from "../../../components/ui/Cards";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useInView } from "motion/react";
import { GENERAL_DATA, LANDING_PAGE_DATA } from "../../../lib/data";

export default function IndustriesWeEmpower() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="side-padding my-container mt-[100px] overflow-x-hidden"
    >
      {/* title */}
      <TitleBlock
        {...LANDING_PAGE_DATA.INDUSTRIES_WE_EMPOWER}
        button={
          <Link to="/industries">
            <Button size={"sm"} arrow={"normal"} variant={"secondary"}>
              SEE ALL
            </Button>
          </Link>
        }
      />

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
              text={industry.description}
              button={!!industry.description}
              imgSrc={industry.img}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
