import { CenteredTitleBlock } from "../../../components/ui/Titles";

export default function Partners({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="my-container side-padding flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 ">
      <CenteredTitleBlock title="Our esteemed partners" />

      <div className="flex w-full items-center justify-center flex-wrap gap-y-10 lg:gap-y-20">
        {images.map((img, i) => (
          <Logo {...img} key={i} />
        ))}
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
      className={
        "2xl:w-80 lg:w-72 w-[33%] min-w-32 invert-100 opacity-70 " + className
      }
      alt={alt}
    />
  );
}
