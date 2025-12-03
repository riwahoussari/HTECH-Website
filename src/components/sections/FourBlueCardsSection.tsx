import type { ReactNode } from "react";
import { TitleBlock } from "../ui/Titles";
import BlueCard from "../ui/cards/BlueCard";

export default function FourBlueCardsSection({
  content,
}: {
  content: {
    title: string;
    subtitle?: string;
    text?: string;
    cards: { title: string; text: string; icon: ReactNode; list: string[] }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock {...content} />

      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 cards-gap max-2xl:max-w-[1200px]">
        {content.cards.map((card, i) => (
          <BlueCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
