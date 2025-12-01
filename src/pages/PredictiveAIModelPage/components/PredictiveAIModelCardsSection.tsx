import type { ReactNode } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import OutlineCard from "../../../components/ui/cards/OutlineCard";

export default function PredictiveAIModelCardsSection({
  content,
}: {
  content: {
    title: string;
    text: string;
    cards: { title: string; text: string; icon: ReactNode }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock title={content.title} text={content.text} />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {content.cards.map((card, i) => (
          <OutlineCard
            className={
              i === 1 ? " xl:translate-y-0 md:translate-y-[calc(50%+12px)] " : ""
            }
            key={i}
            {...card}
          />
        ))}
      </div>
    </section>
  );
}
