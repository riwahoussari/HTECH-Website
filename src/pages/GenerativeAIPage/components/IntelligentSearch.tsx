import AccordionSection from "../../../components/sections/AccordionSection";
import { TitleBlock } from "../../../components/ui/Titles";

export default function IntelligentSearch({
  content,
}: {
  content: {
    title: string;
    subtitle?: string;
    text?: string;
    accordion: {
      content: { title: string; subtitle: string; list: string[] }[];
      img: {
        src: string;
        alt: string;
      };
    };
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock {...content} />
      <AccordionSection
        accordionContent={content.accordion.content}
        img={
          <img
            {...content.accordion.img}
            className="lg-rounded bg-gray-500 h-full"
          />
        }
      />
    </section>
  );
}
