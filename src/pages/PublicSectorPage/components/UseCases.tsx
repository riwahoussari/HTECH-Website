import type { ReactNode } from "react";
import FourBlueCardsSection from "../../../components/sections/FourBlueCardsSection";

export default function UseCases({
  content,
}: {
  content: {
    title: string;
    subtitle?: string;
    text?: string;
    cards: { title: string; text: string; icon: ReactNode; list: string[] }[];
  };
}) {
  return <FourBlueCardsSection content={content} />;
}
