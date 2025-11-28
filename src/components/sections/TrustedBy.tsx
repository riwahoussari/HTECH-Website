import { useRef } from "react";
import { GENERAL_DATA } from "../../lib/data";
import { SlideUpAnim } from "../ui/Anims";
import { CardsSlider, TestimonialCard } from "../ui/Cards";
import { TitleBlock } from "../ui/Titles";
import { useInView } from "motion/react";

export function TrustedBy({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className={
        "side-padding my-container mt-[100px] overflow-x-hidden " +
        (className || "")
      }
    >
      {/* title */}
      <TitleBlock title="Trusted by" subtitle="WHAT YOU HAD TO SAY" />

      <CardsSlider>
        {GENERAL_DATA.PARTNERS.slice(0, 4).map((partner, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
            key={i}
          >
            <TestimonialCard
              key={i}
              className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
              logo={<img alt="Partner logo" src={partner.logoSrc} />}
              text={partner.text}
              position={["tr", "br", "tl"][i % 2] as "tr" | "tl" | "br"}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
