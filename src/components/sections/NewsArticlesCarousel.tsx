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
      className="my-container side-padding mt-[140px] overflow-x-hidden"
    >
      {/* title */}
      {titleBlock}

      {/* cards */}
      <CardsSlider displaySlider={false}>
        {GENERAL_DATA.ARTICLES.map((article, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
          >
            <ArticleCard
              key={i}
              className="aspcet-415/390! w-[300px] xs:w-[360px] lg:w-[410px]"
              {...article}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
