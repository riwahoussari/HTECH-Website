import type { ReactNode } from "react";
import ThreeOutlineCardsSection from "../../../components/sections/ThreeOutlineCardsSection";

export default function WhyHtech({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    cards: { title: string; text: string; icon: ReactNode }[];
  };
}) {
  return (
    <section>
      <ThreeOutlineCardsSection content={content} />
    </section>
  );
}
