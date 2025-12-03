import { CenteredTitleBlock } from "../../../components/ui/Titles";

export default function Partners({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const midPoint = Math.ceil(images.length / 2);
  const half1 = images.slice(0, midPoint);
  const half2 = images.slice(midPoint, images.length);
  return (
    <section className="my-container side-padding flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 ">
      <CenteredTitleBlock title="Our esteemed partners" />
      <div className="w-full flex justify-center flex-wrap items-center gap-y-10 lg:gap-y-20 ">
        {half1.map((img, i) => <Logo {...img} key={i} />)}
      </div>
      <div className="w-full flex justify-center flex-wrap items-center gap-y-10 lg:gap-y-20 ">
        {half2.map((img, i) => <Logo {...img} key={i} />)}
      </div>
    </section>
  );
}

function Logo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      className={"2xl:w-80 lg:w-72 w-[33%] min-w-32 invert-100 opacity-70 " + className}
      alt={alt}
    />
  );
}
