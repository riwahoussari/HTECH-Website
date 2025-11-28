import { useEffect, useRef, useState, type ReactNode } from "react";
import ArrowSvg from "./ArrowSvg";
import Button from "./Button";
import GradientCircle from "./GradientCircle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { motion as m } from "motion/react";
import { Link } from "react-router-dom";
import { useSwipe } from "../../lib/useSwipe";

export function IndustryCard({
  imgSrc,
  title,
  text,
  button = false,
  className,
  fetchPriority,
}: {
  imgSrc: string;
  title: string;
  text?: string;
  button?: boolean;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const contentRef = useRef<HTMLDivElement>(null); // to calculate height for animation to work
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="h-full bg-black/25 transition-all duration-300 ease-in-out"
        style={{
          clipPath: hovering
            ? "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <img
          fetchPriority={fetchPriority}
          className="w-full object-cover"
          src={imgSrc}
          alt={`Image representing ${title} industry`}
        />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25">{title}</p>

        {(text || button) && (
          <div
            style={{
              height: hovering ? contentRef.current?.clientHeight || 0 : 0,
            }}
            className={
              "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
            }
          >
            <div ref={contentRef}>
              {text && <p className="text-16 max-w-[180px] py-2">{text}</p>}
              {button && (
                <div className="flex justify-end">
                  <Link
                    aria-label={`Read more about ${title} industry`}
                    to={`/industries/${title}`}
                  >
                    <Button>
                      READ MORE
                      <span className="hidden"> about {title} industry</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GlassCard({
  title,
  subtitle,
  text,
  className,
}: {
  title: string;
  subtitle: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden bg-white/50 p-3 xs:p-6 " + (className || "")
      }
    >
      {/* title & circle */}
      <div className="relative flex items-end justify-end gap-2">
        <p className="text-25 absolute bottom-0 left-0 z-[1]">{title}</p>
        <div className="aspect-square w-[33%] min-w-[80px] rounded-full border-2 border-red" />
      </div>

      {/* text */}
      <div className="relative mt-8 space-y-2 xs:mt-10 xs:space-y-3 2xl:mt-16 2xl:space-y-4">
        <p className="font-ibm! text-[11px] leading-[15px] font-semibold text-teal xs:text-[12px]">
          {subtitle}
        </p>
        <p className="text-[15px] leading-[21px] xs:text-[16px]">{text}</p>
      </div>
    </div>
  );
}

export function SimpleCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex w-full flex-col justify-between gap-8 bg-white/50 px-3 py-5 text-black xs:px-5 xs:py-8 " +
        (className || "")
      }
    >
      <p className="text-25">{title}</p>
      <p className="text-[16px] leading-[21px] xs:text-[17px]">{text}</p>
    </div>
  );
}

const gradientCircleVariants = cva("absolute z-0 w-75/100 ", {
  variants: {
    position: {
      tr: " top-0 -translate-y-1/3 right-0 translate-x-1/3",
      tl: " top-0 -translate-y-1/3 left-0 -translate-x-1/3",
      br: " bottom-0 translate-y-1/3 right-0 translate-x-1/3",
    },
  },
  defaultVariants: {
    position: "tr",
  },
});
interface GradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientCircleVariants> {}

export function TestimonialCard({
  logo,
  text,
  className,
  position = "tr",
}: {
  text: string;
  logo: ReactNode;
  className?: string;
} & GradientProps) {
  return (
    <div
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="flex h-full flex-col justify-end gap-2 bg-black"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        <div className={cn(gradientCircleVariants({ position }), className)}>
          <GradientCircle className="blur-[max(6vw,60px)" colorr={"teal"} />
        </div>
        <div className="relative p-5 xs:p-6">
          <p className="text-16">{text}</p>
        </div>
        <div className="relative left-0 flex h-[126px] items-center bg-white/25 p-5 xs:p-6">
          {logo}
        </div>
      </div>
    </div>
  );
}

export function ArticleCard({
  imgSrc,
  title,
  subtitle,
  className,
  fetchPriority,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <Link
      to={`/news/${title}`}
      className="group w-full cursor-pointer"
      aria-label={`Read more about ${title}`}
    >
      <div className={"relative overflow-clip text-white " + (className || "")}>
        <div
          className="h-full bg-black/25"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
          }}
        >
          <img
            fetchPriority={fetchPriority}
            className="w-full object-cover duration-200 ease-in-out group-hover:scale-110"
            src={imgSrc}
            alt={`Image representing ${title}`}
          />
        </div>

        {/* content */}
        <div className="bg-linear-white-transparent-70 absolute top-0 right-0 left-0 p-6 py-4 backdrop-blur-[1000px]">
          <p className="font-ibm! text-[12px] leading-[31px]">{subtitle}</p>
          <p className="text-25">{title}</p>
        </div>

        {/* button */}
        <Button className="absolute bottom-1 left-2" variant={"ghost"}>
          READ MORE
        </Button>
        {/* arrow */}
        <ArrowSvg
          className="absolute right-0 bottom-1 z-1 w-6 -translate-x-1 stroke-[1px] duration-200 ease-in-out group-hover:translate-x-0 xs:w-8"
          color="black"
        />
      </div>
    </Link>
  );
}

type TSliderValues = {
  visibleCards: number;
  totalCards: number;
  slideDifference: number;
  slidableDistance: number;
  cardsToSlide: number;
};
export function CardsSlider({
  displaySlider = true,
  children,
}: {
  displaySlider?: boolean;
  children: ReactNode;
}) {
  const cardsRef = useRef<HTMLDivElement>(null); // has width of all cards combined
  const cardsContainerRef = useRef<HTMLDivElement>(null); // has width of visible container
  const [slidePercent, setSlidePercent] = useState(0);
  const [values, setValues] = useState<TSliderValues>();
  const {
    visibleCards = 0,
    totalCards = 0,
    slideDifference = 0,
    slidableDistance = 0,
    cardsToSlide = 0,
  } = values || {};

  const calculateValues = (): TSliderValues => {
    if (!cardsContainerRef.current || !cardsRef.current)
      return {
        visibleCards: 0,
        totalCards: 0,
        slideDifference: 0,
        slidableDistance: 0,
        cardsToSlide: 0,
      };
    const cards = cardsRef.current;
    const container = cardsContainerRef.current;

    const totalCards = cards.childElementCount;
    const cardWidth = cards.clientWidth / totalCards;
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const hiddenCards = totalCards - visibleCards;
    const cardsToSlide = visibleCards;
    const slideDifference =
      Math.round((cardsToSlide * 1000) / hiddenCards) / 1000;

    const slidableDistance = hiddenCards * cardWidth;

    return {
      visibleCards,
      totalCards,
      slideDifference,
      slidableDistance,
      cardsToSlide,
    };
  };

  let slideValue = Math.max(0, Math.min(slidePercent, 1)) * slidableDistance;
  slideValue = Math.floor(slideValue * 1000) / 1000;
  const slidedCards =
    (Math.max(0, Math.min(slidePercent, 1)) / slideDifference) * cardsToSlide;
  const progressBarWidth = ((visibleCards + slidedCards) / totalCards) * 100;

  const handleLeft = () => {
    setSlidePercent((prev) =>
      prev - slideDifference < 0 ? 0 : prev - slideDifference
    );
  };

  const handleRight = () => {
    setSlidePercent((prev) => (prev < 1 ? prev + slideDifference : prev));
  };

  useEffect(() => {
    const handleResize = () => setValues(calculateValues);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(
    () => setValues(calculateValues()),
    [cardsRef, cardsContainerRef, cardsRef.current, cardsContainerRef.current]
  );

  const swipeHandlers = useSwipe(handleRight, handleLeft);
  return (
    <>
      {/* cards */}
      <div {...swipeHandlers} ref={cardsContainerRef} className="mt-[40px]">
        <m.div
          animate={{
            x: `-${slideValue}px`,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex w-max items-start gap-5 overflow-y-clip"
          ref={cardsRef}
        >
          {children}
        </m.div>
      </div>
      {/* slider */}
      {displaySlider && (
        <div className="mx-auto mt-10 flex w-9/10 max-w-[580px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2 lg:min-w-[580px]">
          {/* left arrow */}
          <div onClick={handleLeft}>
            <ArrowSvg
              color="var(--color-teal)"
              className={
                "w-6 rotate-y-180 cursor-pointer 2xl:-translate-y-[1px] " +
                (slidePercent - slideDifference < 0
                  ? " cursor-not-allowed! opacity-50!"
                  : "")
              }
            />
          </div>

          {/* progress bar */}
          <div className="flex w-full items-center justify-center gap-1.5 sm:gap-3">
            <m.div
              animate={{ width: `${progressBarWidth}%` }}
              className="bg-dark-green-blue-gradient h-1 rounded-full"
            />
            <m.div
              animate={{ width: `${100 - progressBarWidth}%` }}
              className="h-1 w-[80%] rounded-full bg-black/25"
            />
          </div>

          {/* right arrow */}
          <div onClick={handleRight}>
            <ArrowSvg
              color="var(--color-teal)"
              className={
                "w-6 cursor-pointer 2xl:-translate-y-[1px]" +
                (slidePercent >= 1 ? " cursor-not-allowed! opacity-50!" : "")
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
