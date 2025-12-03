export default function Stats({
  stats,
}: {
  stats: { stat: string; title: string; text: string }[];
}) {
  return (
    <section className="my-container side-padding max-w-[1200px]!">
      <div className="flex max-lg:flex-col items-center lg:items-end lg:justify-center lg:gap-16 gap-8">
        <img
          src="/assets/demos/horion-for-sales/stats.png"
          className="lg-rounded lg:w-1/3 max-w-[450px] w-full"
          alt="dashboard showcasing stats"
        />
        <div className="divide-y divide-light-black/25 lg:w-2/3 max-w-[650px]">
          {stats.map((s, i) => (
            <Row {...s} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  stat,
  title,
  text,
}: {
  stat: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex w-full md:justify-between md:items-center gap-2 md:gap-8 py-8 max-md:flex-col">
      <p className="text-[36px] sm:text-[40px] 2xl:text-[44px] leading-[1.1]">
        {stat}
      </p>

      <div className="max-w-[400px] w-full">
        <p className="text-32 font-light">{title}</p>
        <p className="text-18 opacity-60">{text}</p>
      </div>
    </div>
  );
}
