import ThreeOutlineCardsSection from "../../../components/sections/ThreeOutlineCardsSection";

export default function TheChallenge({
  content,
}: {
  content: {
    title: string;
    text?: string | undefined;
    subtitle?: string | undefined;
    cards: {
      title: string;
      text: string;
      icon: React.ReactNode;
    }[];
  };
}) {
  return <ThreeOutlineCardsSection content={content} />;
}
