import type { ReactNode } from "react";
import { TitleBlock } from "../ui/Titles";
import OutlineCard from "../ui/cards/OutlineCard";

export default function ThreeOutlineCardsSection({
  content,
}: {
  content: {
    title: string;
    text?: string;
    subtitle?: string;
    cards: { title: string; text: string; icon: ReactNode }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock
        title={content.title}
        text={content.text}
        subtitle={content.subtitle}
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {content.cards.map((card, i) => (
          <OutlineCard
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
