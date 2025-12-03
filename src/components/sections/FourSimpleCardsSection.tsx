import type { ReactNode } from "react";
import { TitleBlock } from "../ui/Titles";
import SimpleCard from "../ui/cards/SimpleCard";

export default function FourSimpleCardsSection({
  content,
  bg = false,
}: {
  content: {
    title: string;
    subtitle?: string;
    text?: string;
    cards: { title: string; text: string; icon: ReactNode; list: string[] }[];
  };
  bg?: boolean;
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock {...content} />

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 cards-gap">
        {content.cards.map((card, i) => (
          <SimpleCard bg={bg} key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
