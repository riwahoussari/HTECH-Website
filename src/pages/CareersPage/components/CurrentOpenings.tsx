import ArrowSvg from "../../../components/ui/ArrowSvg";
import { TitleBlock } from "../../../components/ui/Titles";

type Opening = {
  category: string;
  title: string;
  type: string;
  location: string;
  link: string;
};

export default function CurrentOpenings({ openings }: { openings: Opening[] }) {
  const grouped = openings.reduce<Record<string, Opening[]>>((acc, op) => {
    if (!acc[op.category]) acc[op.category] = [];
    acc[op.category].push(op);
    return acc;
  }, {});

  console.log(grouped);

  return (
    <section className="my-container side-padding space-y-16">
      <TitleBlock
        title="Current openings"
        subtitle={`${openings.length} jobs`}
      />
      {Object.keys(grouped).map((k, i) => (
        <div key={i} className="space-y-8">
          <p className="text-32 font-light">{k}</p>
          <div className="space-y-4">
            {grouped[k].map((op, j) => (
              <a className="block group max-w-[1200px] " target="_blank" href={op.link} key={j}>
                <div className="group-hover:bg-gold duration-200 ease-in-out rounded-lg xl:rounded-xl border border-light-black lg:px-8 lg:py-6 px-4 py-3 flex items-center justify-between gap-4 lg:gap-8 flex-wrap">
                  <div className="flex max-lg:flex-col lg:items-center lg:gap-20 gap-1 ">
                    <p className="text-24">{op.title}</p>
                    <p className="text-20 font-light opacity-60">{op.type}<span className="lg:hidden"> - {op.location}</span></p>
                  </div>
                  <div className="flex items-center justify-between lg:gap-20 gap-10 ">
                    <p className="text-20 font-light opacity-60 max-lg:hidden">
                      {op.location}
                    </p>
                    <ArrowSvg
                      className="lg:w-6 w-5 -rotate-45 group-hover:rotate-0 group-hover:scale-110 duration-150 ease-in-out"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
