import type { ReactNode } from "react";
import { TitleBlock } from "../../../components/ui/Titles";

export default function UseCases({
  content,
}: {
  content: {
    title: string;
    cards: { title: string; text: string; icon: ReactNode; list: string[] }[];
  };
}) {
  return (
    <section className="my-container side-padding">
      <TitleBlock title={content.title} />

      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 max-2xl:max-w-[1000px]">
        {content.cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </section>
  );
}

function Card({
  title,
  text,
  icon,
  list,
  className,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  list: string[];
  className?: string;
}) {
  return (
    <div
      className={
        "group relative overflow-hidden bg-blueish-gray text-white cursor-pointer w-full p-4 md:p-4 xl:p-6 h-full lg-rounded border border-blueish-gray gap-y-6 flex flex-col justify-between " +
        className
      }
    >
      <div className="relative z-1 flex justify-between items-center">
        <p className="text-25">{title}</p>

        <div className="w-5 xl:w-6 aspect-square fill-light-black">{icon}</div>
      </div>

      <div className="relative z-1 space-y-2">
        <p className="text-18">{text}</p>
      </div>

      <ul className="relative z-1 list-disc ps-4 leading-[2]! text-16 font-light">
        {list.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* bg */}
      <div className="absolute z-0 object-cover top-0 bottom-0 left-0 right-0  min-h-full min-w-full">
        <img
          src="/assets/textured-bg.png"
          alt="Textured Background"
          className={"w-full h-full object-cover opacity-35"}
        />
      </div>
    </div>
  );
}
