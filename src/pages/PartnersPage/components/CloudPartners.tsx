import OutlineCard from "../../../components/ui/cards/OutlineCard";
import { TitleBlock } from "../../../components/ui/Titles";

export default function CloudPartners({
  content,
}: {
  content: {
    title: string;
    text: string;
    partners: { img: { src: string; alt: string }; text: string }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock {...content} />
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 max-2xl:max-w-[1000px]">
        {content.partners.map((partner, i) => (
          <OutlineCard
            image={<img {...partner.img} className="w-1/2" />}
            key={i}
            {...partner}
          />
        ))}
      </div>
    </section>
  );
}
