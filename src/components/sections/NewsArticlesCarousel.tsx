import CardsSlider from "../ui/cards/CardsSlider";
import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import { GENERAL_DATA } from "../../lib/data";
import NewsCard from "../ui/cards/NewsCard";

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
          >
            <NewsCard key={i} {...article} />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
