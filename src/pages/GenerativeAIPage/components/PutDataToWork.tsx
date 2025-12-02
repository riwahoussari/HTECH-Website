import ThreeOutlineCardsSection from "../../../components/sections/ThreeOutlineCardsSection";

export default function PutDataToWork({
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
    img?: { src: string; alt: string };
  };
}) {
  return (
    <div>
      <ThreeOutlineCardsSection content={content} />
      {content.img && (
        <div className="my-container side-padding mt-6 xl:mt-10">
          <img {...content.img} className="lg-rounded w-full lg:aspect-3/1 aspect-5/3 object-cover" />
        </div>
      )}
    </div>
  );
}
