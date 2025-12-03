import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import { GENERAL_DATA } from "../../lib/data";
import NewsCard from "../ui/cards/NewsCard";
import ArrowSvg from "../ui/ArrowSvg";

const articles = GENERAL_DATA.ARTICLES;

export default function NewsArticlesCarousel({
  titleBlock,
}: {
  titleBlock: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(3);
  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (lg.matches) setOffset(3);
      else setOffset(2);
    };

    update(); // run on mount

    sm.addEventListener("change", update);
    lg.addEventListener("change", update);

    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  const pageCount = Math.ceil(articles.length / offset);

  const next = () => setIndex((prev) => (prev + 1) % pageCount);
  const prev = () => setIndex((prev) => (prev - 1 + pageCount) % pageCount);

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding overflow-x-hidden"
    >
      {/* title */}
      {titleBlock}

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cards-gap">
        {articles
          .slice(index * offset, index * offset + offset)
          .map((article, i) => (
            <SlideUpAnim
              key={`index-${index}-i-${i}`}
              isInView={isInView}
              transition={{ delay: i * 0.1, duration: 0.3, ease: "easeInOut" }}
            >
              <NewsCard {...article} />
            </SlideUpAnim>
          ))}
      </div>

      {/* pagination + arrows */}
      <div className="flex w-full px-6 sm:px-10 lg:px-12 mt-6 sm:mt-8 lg:mt-10 items-center justify-between">
        {/* dots */}
        <div className="flex gap-6 sm:gap-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`aspect-square w-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-black/30 hover:bg-black/50"
              }`}
            />
          ))}
        </div>

        {/* arrows */}
        <div className="flex items-center gap-8">
          <button aria-label="left arrow" onClick={prev}>
            <span className="hidden">Left Arrow</span>
            <ArrowSvg
              className="w-6 rotate-180 cursor-pointer duration-200 ease-in-out hover:-translate-x-1"
              color="black"
            />
          </button>
          <button aria-label="right arrow" onClick={next}>
            <span className="hidden">Right Arrow</span>
            <ArrowSvg
              className="w-6 cursor-pointer duration-200 ease-in-out hover:translate-x-1"
              color="black"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
