export default function Certification({
  certificates,
  measures,
}: {
  certificates: {
    badge: { src: string; alt: string };
    title: string;
    text: string;
  }[];
  measures: { title: string; text: string }[];
}) {
  return (
    <section className="my-container side-padding max-w-[1200px]! max-sm:text-center">
      <div className="border-t border-light-black/15 py-10 flex max-lg:flex-col max-lg:items-center justify-between gap-10">
        <p className="text-blueish-gray font-light text-18 lg:max-w-[320px] w-full max-w-[640px] lg:w-1/3">
          YOUR DATA IS SAFE WITH HORION, ALL THE TIME
        </p>

        <div className="flex lg:justify-end lg:w-2/3">
          <div className="grid sm:grid-cols-2 gap-14 sm:gap-10 ">
            {certificates.map((c, i) => (
              <Card {...c} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-light-black/15 py-10 flex max-lg:flex-col max-lg:items-center justify-between gap-10">
        <p className="text-blueish-gray font-light text-18 lg:max-w-[320px] w-full max-w-[640px] lg:w-1/3">
          TECHNICHAL SECURITY MEASURES
        </p>

        <div className="flex lg:justify-end lg:w-2/3">
          <div className="grid sm:grid-cols-2 gap-14 sm:gap-10">
            {measures.map((c, i) => (
              <Card {...c} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  badge,
  title,
  text,
}: {
  badge?: { src: string; alt: string };
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-5 max-sm:text-center">
      {badge && (
        <div className="w-14 aspect-square max-sm:mx-auto">
          <img {...badge} className="w-full h-full object-contain" />
        </div>
      )}

      <p className="text-18 max-w-[300px]">
        <span>{title}</span>
        <br />
        <span className="opacity-70">{text}</span>
      </p>
    </div>
  );
}
