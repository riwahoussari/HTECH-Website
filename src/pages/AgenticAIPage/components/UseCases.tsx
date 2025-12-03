import type { ReactNode } from "react";
import FourSimpleCardsSection from "../../../components/sections/FourSimpleCardsSection";

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
  return <FourSimpleCardsSection bg content={content} />;
}
