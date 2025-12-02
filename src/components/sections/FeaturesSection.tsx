import FeatureCard from "../ui/cards/FeatureCard";
import { TitleBlock } from "../ui/Titles";

export default function FeaturesSection({
  title,
  text,
  subtitle,
  features,
}: {
  title?: string;
  text?: string;
  subtitle?: string;
  features: {
    title: string;
    text: string;
    img: { src: string; alt: string };
  }[];
}) {
  return (
    <section>
      {title && (
        <div className="my-container side-padding">
          <TitleBlock title={title} text={text} subtitle={subtitle} />
        </div>
      )}
      {features.map((f, i) => (
        <FeatureCard
          reverse={i % 2 !== 0}
          background={i % 2 !== 0}
          className={""}
          {...f}
          key={i}
        />
      ))}
    </section>
  );
}
