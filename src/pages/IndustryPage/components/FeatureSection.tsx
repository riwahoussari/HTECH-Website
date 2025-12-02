export default function FeatureSection({
  content,
}: {
  content: {
    img: { src: string; alt: string };
    feature: { title: string; text: string; img: { src: string; alt: string } };
  };
}) {
  return (
    <section className="my-container side-padding space-y-5 lg:space-y-8">
      {/* <img
        {...content.img}
        className="lg-rounded w-full lg:aspect-3/1 aspect-5/3 object-cover"
      /> */}
      <Card {...content.feature} />
    </section>
  );
}

function Card({
  title,
  text,
  img,
  className,
  background = false,
  reverse = false,
}: {
  title: string;
  text: string;
  img: { src: string; alt: string };
  className?: string;
  background?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={
        "my-container max-lg:flex-col side-padding py-12 xl:py-16 flex   items-center justify-center gap-y-4 sm:gap-y-6 rounded-on-max " +
        (background ? " bg-blueish-gray/15 " : "") +
        (reverse ? " lg:flex-row-reverse " : "") +
        className
      }
    >
      {/* text */}
      <div
        className={
          "lg:w-1/2  max-lg:text-center  flex justify-center items-center " +
          (reverse
            ? " pl-0 lg:pl-10 xl:pl-14 2xl:pl-32 "
            : " pr-0 lg:pr-10 xl:pr-14 2xl:pr-32 ")
        }
      >
        <div className="space-y-3 lg:space-y-4 w-full max-w-[600px] lg:max-w-[700px] lg:border-l border-light-black lg:pl-6 xl:pl-8 2xl:pl-10 py-3 xl:py-5">
          <p className="text-40 leading-[1.1]">
            {title}
          </p>
          <p className="text-[18px] xl:text-[22px] 2xl:text-[24px] leading-[1.3] font-light">
            {text}
          </p>
        </div>
      </div>

      {/* img */}
      <div className="lg:w-1/2  ">
        <img
          {...img}
          className="lg-rounded w-full h-full object-cover max-w-[600px] lg:max-w-[800px] aspect-5/3"
        />
      </div>
    </div>
  );
}
