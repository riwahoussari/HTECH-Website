export default function Steps({
  steps,
}: {
  steps: {
    img: { src: string; alt: string };
    title: string;
    text: string;
  }[];
}) {
  return (
    <section className="my-container side-padding flex flex-col items-center ">
      <p className="text-24 opacity-50 text-center mb-10 lg:mb-14 ">
        The easiest way to get beautiful, <br /> shareable meeting notes.
      </p>

      <div className="flex max-lg:flex-col max-w-[1200px] gap-x-8 gap-y-12">
        {steps.map((s, i) => (
          <>
            <StepCard key={i} number={i + 1} {...s} />
            {i !== 2 && (
              <div className="flex items-center justify-center lg:pb-[15%]  ">
                <img
                  src={`/assets/demos/horion-for-sales/steps-arrow-${i + 1}.svg`}
                  alt="arrow"
                  className={"max-lg:rotate-60 " + (i === 1 ? "max-lg:scale-80 max-lg:rotate-80! " : "")}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
}

function StepCard({
  img,
  title,
  text,
  number,
}: {
  img: { src: string; alt: string };
  title: string;
  text: string;
  number: number;
}) {
  return (
    <div className="sm:space-y-8 space-y-4 lg:w-[30%] max-w-[400px]">
      <img {...img} className="w-full object-contain" />

      <div className="flex gap-3">
        <p className="text-40 font-light opacity-60">{number}</p>
        <div>
          <p className="text-40 font-light">{title}</p>
          <p className="text-18 mt-2 opacity-60">{text}</p>
        </div>
      </div>
    </div>
  );
}
