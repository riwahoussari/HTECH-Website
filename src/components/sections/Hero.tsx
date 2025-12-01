import TexturedBg from "../ui/TexturedBg";

interface HeroProps {
  title: string;
  subtitle?: string;
  text: string;
  buttons: React.ReactNode;
  background?: "none" | React.ReactNode;
  image?: React.ReactNode;
  className?: string;

  // Layout control
  size?: "md" | "lg";
  align?: "left" | "center";
  textSizing?: string;
}

export default function Hero({
  title,
  subtitle,
  text,
  buttons,
  background,
  image,
  className,
  size = "md",
  align = "center",
  textSizing = " ",
  ref
}: HeroProps & {ref?: React.RefObject<HTMLDivElement | null>}) {
  return (
    <section ref={ref} className={"relative overflow-hidden "}>
      {/* bg */}
      {(image === undefined || align !== "center") &&
        (background === undefined ? (
          <TexturedBg color="var(--color-gold)" />
        ) : (
          background !== "none" && background
        ))}

      {/* container */}
      <div
        className={
          "flex items-center " +
          (className || "") +
          (align === "center"
            ? " flex-col "
            : " max-xl:flex-col max-xl:items-stretch! ") +
          (image !== undefined && align === "center"
            ? " "
            : " my-container side-padding gap-14 lg:gap-20 xs:py-24 xs:pt-32 py-18 pt-28 lg:py-32 lg:pt-44 ") 
        }
      >
        {/* content */}
        <div
          className={
            "flex flex-col  " +
            (size === "lg" ? " gap-10 lg:gap-17 " : " gap-7 lg:gap-10 ") +
            (align === "center" ? " items-center " : " max-xl:max-w-[700px] ") +
            (image !== undefined && align === "center"
              ? " py-32 pb-40 lg:py-44 lg:pb-52 relative overflow-hidden w-full side-padding "
              : ` ${textSizing} `)
          }
        >
          {image !== undefined && align === "center" && (
            <TexturedBg color="var(--color-gold)" />
          )}
          {/* text */}
          <div
            className={
              "relative flex flex-col " +
              (align == "center" ? " items-center text-center " : " ") +
              (size === "lg" ? " gap-5 sm:gap-7 " : " gap-4 sm:gap-5 ")
            }
          >
            <h1
              className={
                "leading-none " +
                (size == "lg"
                  ? " text-[max(8.4vw,50px)] lg:text-[clamp(88px,7.5vw,144px)] "
                  : align == "left"
                    ? " text-[max(5.6vw,44px)] lg:text-[clamp(48.8px,4.16vw,80px)] "
                    : " text-[max(5.6vw,44px)] lg:text-[clamp(58.6px,5vw,96px)] ")
              }
            >
              {title}
            </h1>
            <p
              className={
                " leading-[1.3] max-w-[700px] xs:w-4/5 " +
                (size == "lg"
                  ? " text-24 "
                  : " text-20 ")
              }
            >
              {text}
            </p>
          </div>

          {/* buttons */}
          <div
            className={
              "relative flex gap-4 lg:gap-8 items-center max-xs:flex-wrap " +
              (align == "center" ? " justify-center " : "")
            }
          >
            {buttons}
          </div>
        </div>

        {/* image */}
        {image}
      </div>
    </section>
  );
}

{
  /* <Hero
    align="center"
    size="md"
    image={
      <div className="relative w-9/10 lg:w-1/2 max-w-[970px] aspect-2/1 -translate-y-32 rounded-2xl overflow-hidden">
        <TexturedBg />
      </div>
    }
  /> */
}

{
  /* <Hero
    align="left"
    size="md"
    image={
      <div className="relative xl:w-1/2 max-xl:max-w-[700px] aspect-5/3 rounded-2xl overflow-hidden">
        <TexturedBg />
      </div>
    }
  /> */
}
