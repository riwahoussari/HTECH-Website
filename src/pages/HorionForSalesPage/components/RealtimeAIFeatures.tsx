import { CenteredTitleBlock } from "../../../components/ui/Titles";

export default function RealtimeAIFeatures({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    rows: { icon: { src: string; alt: string }; title: string; text: string }[];
  };
}) {
  return (
    <section className="my-container side-padding flex flex-col items-center">
      <CenteredTitleBlock {...content} />
      <div className="xs:divide-y divide-light-black/25 max-xs:grid max-xs:grid-cols-2 max-xs:gap-6   ">
        {content.rows.map((r, i) => (
          <Row key={i} {...r} />
        ))}
      </div>
    </section>
  );
}

function Row({
  icon,
  title,
  text,
}: {
  icon: { src: string; alt: string };
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center xs:justify-between gap-4 w-full max-w-[1200px] xs:py-5 py-1.5 max-xs:flex-col max-xs:text-center">
      {/* icon & title */}
      <div className="flex items-center lg:gap-4 gap-3 max-xs:flex-col">
        {/* icon */}
        <div className="lg:w-14 lg:p-2 w-10 p-1.5 bg-blueish-gray/15 rounded-lg shadow-lg shadow-blueish-gray/20 xl:rounded-xl aspect-square">
          <img className="w-full h-full object-contain" {...icon} />
        </div>

        {/* title */}
        <p className="text-24 font-light leading-[1.15]!">{title}</p>
      </div>

      {/* text */}
      <p className="text-20 opacity-70 xs:w-1/2 font-light leading-[1.2]!">
        {text}
      </p>
    </div>
  );
}
