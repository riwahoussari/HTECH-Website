import type { ReactNode } from "react";
import GhostCard from "../../../components/ui/cards/GhostCard";
import NetBg from "../../../components/ui/NetBg";

export default function GhostCardsSection({
  cards,
}: {
  cards: { title: string; text: string; icon: ReactNode }[];
}) {
  return (
    <section className="my-container overflow-hidden relative side-padding bg-blueish-gray/15 py-20">
      <div className="grid relative z-1 lg:grid-cols-3 gap-22 lg:gap-20 justify-items-center">
        {cards.map((card, i) => (
          <div className="max-w-[330px]">
            <GhostCard key={i} {...card} />
          </div>
        ))}
      </div>

      {/* net bg */}
      <NetBg
        color="var(--color-gold)"
        className="absolute z-0 opacity-40 origin-top w-[2000px] lg:w-[3000px] top-1/2 left-1/2 -translate-1/2"
      />
    </section>
  );
}
