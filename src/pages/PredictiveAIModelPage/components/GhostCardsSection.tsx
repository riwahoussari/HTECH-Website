import type { ReactNode } from "react";
import GhostCard from "../../../components/ui/cards/GhostCard";
import NetBg from "../../../components/ui/NetBg";
import { CenteredTitleBlock, TitleBlock } from "../../../components/ui/Titles";

export default function GhostCardsSection({
  title,
  text,
  subtitle,
  cards,
}: {
  title?: string;
  subtitle?: string;
  text?: string;
  cards: { title: string; text: string; icon: ReactNode }[];
}) {
  return (
    <section className="space-y-8 ">
      {title && (
        <CenteredTitleBlock title={title} subtitle={subtitle} text={text} />
      )}

      <div className="my-container side-padding  overflow-hidden relative bg-blueish-gray/15 py-20 rounded-on-max">
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
      </div>
    </section>
  );
}
