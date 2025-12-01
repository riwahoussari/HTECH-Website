import { ArticleCard, CardsSlider } from "../ui/Cards";
import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import { GENERAL_DATA } from "../../lib/data";

export default function NewsArticlesCarousel({
  titleBlock,
}: {
  titleBlock: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="my-container side-padding overflow-x-hidden"
    >
      {/* title */}
      {titleBlock}

      {/* cards */}
      <CardsSlider displaySlider={true}>
        {GENERAL_DATA.ARTICLES.map((article, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
            className="w-[310px] xs:w-[480px] lg:w-[580px]"
          >
            <ArticleCard
              key={i}
              {...article}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
