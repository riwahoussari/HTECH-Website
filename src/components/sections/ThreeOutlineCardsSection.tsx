import type { ReactNode } from "react";
import { TitleBlock } from "../ui/Titles";
import OutlineCard from "../ui/cards/OutlineCard";

export default function ThreeOutlineCardsSection({
  content,
  bg = false,
}: {
  content: {
    title: string;
    text?: string;
    subtitle?: string;
    cards: { title: string; text: string; icon: ReactNode }[];
  };
  bg?: boolean;
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock
        title={content.title}
        text={content.text}
        subtitle={content.subtitle}
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 cards-gap">
        {content.cards.map((card, i) => (
          <OutlineCard
            bg={bg}
            className={
              i % 2 === 1
                ? " xl:translate-y-0 md:translate-y-[calc(50%+12px)] "
                : ""
            }
            key={i}
            {...card}
          />
        ))}
      </div>
    </section>
  );
}
