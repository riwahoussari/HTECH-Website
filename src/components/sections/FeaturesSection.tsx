import FeatureCard from "../ui/cards/FeatureCard";
import { CenteredTitleBlock, TitleBlock } from "../ui/Titles";

export default function FeaturesSection({
  titleCentered = true,
  title,
  text,
  subtitle,
  features,
  background = true,
}: {
  titleCentered?: boolean;
  title?: string;
  text?: string;
  subtitle?: string;
  features: {
    title: string;
    text: string;
    img: { src: string; alt: string };
  }[];
  background?: boolean;
}) {
  return (
    <section>
      {title && titleCentered && (
        <div className="my-container side-padding">
          <CenteredTitleBlock title={title} text={text} subtitle={subtitle} />
        </div>
      )}
      {title && !titleCentered && (
        <div className="my-container side-padding">
          <TitleBlock title={title} text={text} subtitle={subtitle} />
        </div>
      )}
      {features.map((f, i) => (
        <FeatureCard
          reverse={i % 2 !== 0}
          background={background ? i % 2 !== 0 : false}
          className={""}
          {...f}
          key={i}
        />
      ))}
    </section>
  );
}
