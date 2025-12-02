import Button from "../../../components/ui/Button";
import FeatureCard from "../../../components/ui/cards/FeatureCard";
import { TitleBlock } from "../../../components/ui/Titles";
import { Link } from "react-router-dom";

export default function AISolutionsSection({
  content,
}: {
  content: {
    title: string;
    text: string;
    subtitle: string;
    features: {
      title: string;
      list: string[];
      link: string;
      img: { src: string; alt: string };
    }[];
  };
}) {
  return (
    <section>
      <div className="my-container side-padding">
        <TitleBlock {...content} />
      </div>

      <div>
        {content.features.map((f, i) => (
          <FeatureCard
            button={
              <Link to={f.link}>
                <Button size={"md"} variant={"outline"} arrow={"normal"}>
                  Learn more
                </Button>
              </Link>
            }
            reverse={i == 1}
            key={i}
            {...f}
          />
        ))}
      </div>
    </section>
  );
}
