import { useEffect, useRef, useState, type ReactNode } from "react";
import ArrowSvg from "./ArrowSvg";
import Button from "./Button";
import { motion as m } from "motion/react";
import { Link } from "react-router-dom";
import { useSwipe } from "../../lib/useSwipe";
import HtechLogoSvg from "./HtechLogoSvg";
import NetBg from "./NetBg";

export function IndustryCard({
  imgSrc,
  title,
  className,
  fetchPriority,
}: {
  imgSrc: string;
  title: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <Link to={`/industries/${title}`}>
      <div
        className={
          "relative cursor-pointer group overflow-clip text-white lg-rounded " +
          (className || "")
        }
      >
        {/* image */}
        <div className="absolute z-2 top-0 left-0 right-0 bottom-0 w-full bg-black-vertical-gradient" />
        <div className="h-full relative z-1 group-hover:scale-110 duration-300 ease-in-out">
          <img
            fetchPriority={fetchPriority}
            className="w-full object-cover"
            src={imgSrc}
            alt={`Image representing ${title} industry`}
          />
        </div>

        {/* title */}
        <div className="absolute z-3 right-0 top-0 left-0 p-3 py-4 xs:p-8">
          <p className="text-22 font-light" style={{ letterSpacing: "0.5px" }}>
            {title}
          </p>
        </div>
      </div>
    </Link>
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
        "flex w-full flex-col justify-between gap-8 bg-white/50 px-3 py-5  xs:px-5 xs:py-8 " +
        (className || "")
      }
    >
      <p className="text-25">{title}</p>
      <p className="text-[16px] leading-[21px] xs:text-[17px]">{text}</p>
    </div>
  );
}

export function TestimonialCard({
  text,
  name,
  company,
  position,
  className,
}: {
  text: string;
  name: string;
  position?: string;
  company?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "relative flex flex-col justify-between lg-rounded overflow-hidden w-full xl:min-h-[550px] gap-20 sm:gap-32 p-6 sm:p-10 sm:pb-6 lg:p-12 lg:pb-8 bg-blueish-gray/15 " +
        className
      }
    >
      {/* content */}
      <p className="relative z-1 text-32 max-w-[1000px] ">{text}</p>

      <div className="relative z-1 flex justify-between gap-6 xs:items-end max-xs:flex-col max-w-[1000px] ">
        <div className="space-y-1.5">
          <p className="text-20 font-light uppercase">{name}</p>

          <p className="text-20 font-light uppercase">— {position}</p>
        </div>
        <p className="text-20 font-light uppercase">{company}</p>
      </div>

      {/* bg */}
      <NetBg
        color="var(--color-gold)"
        className="absolute z-0 opacity-60 origin-top w-[3000px] top-1/2 left-1/2 -translate-1/2"
      />
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
  const [hovering, setHovering] = useState(false);
  return (
    <Link
      to={`/news/${title}`}
      className={
        "group flex flex-col justify-between bg-[#EAEDF1] lg-rounded overflow-hidden h-full w-[310px] xs:w-[480px] lg:w-[580px] " +
        className
      }
      aria-label={`Read more about ${title}`}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div className="p-4  ">
        {/* image */}
        <div className="aspect-2/1 xs:aspect-33/10 rounded-lg overflow-hidden relative">
          <img
            fetchPriority={fetchPriority}
            className="w-full h-full object-cover duration-200 ease-in-out group-hover:scale-110"
            src={imgSrc}
            alt={`Image representing ${title}`}
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20" />
          <HtechLogoSvg
            className="absolute bottom-1/2 right-1/2 translate-1/2 w-1/4"
            color="white"
          />
        </div>

        {/* text */}
        <div className="mt-6 space-y-4">
          <p className="opacity-70">{subtitle}</p>
          <p className="text-22">{title}</p>
        </div>
      </div>

      {/* read more  */}
      <div className="flex relative justify-between items-center bg-white  py-6 pt-9 p-4 ">
        <Button variant={"outline"} size={"sm"} className="relative z-1">
          Read more
        </Button>
        <ArrowSvg className="w-5 relative z-1 group-hover:-rotate-45 duration-200 ease-in-out group-hover:scale-125" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 670 111"
          preserveAspectRatio="none"
          className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-0"
        >
          <m.path
            className="w-full transition-all duration-300 ease-in-out"
            fill="#EAEDF1"
            d={
              hovering
                ? "M670 0H0V91C0 102.046 8.9543 111 20 111H518.641C526.216 111 533.14 111 536.529 111L570.988 111C574.377 111 581.301 111 588.875 111H650C661.046 111 670 102.046 670 91Z"
                : "M670 0H0V91C0 102.046 8.9543 111 20 111H518.641C526.216 111 533.14 106.721 536.529 99.9469L570.988 31.0531C574.377 24.2789 581.301 20 588.875 20H650C661.046 20 670 11.0457 670 0Z"
            }
          ></m.path>
        </svg>
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
    const visibleCards = Math.max(
      Math.floor(container.clientWidth / cardWidth),
      1
    );
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

  console.log(slideDifference);

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
      <div {...swipeHandlers} ref={cardsContainerRef}>
        <m.div
          animate={{
            x: `-${slideValue}px`,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex w-max items-stretch gap-5 overflow-y-clip"
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
              strokeWidth={2}
              color="var(--color-light-black)"
              className={
                "w-5 rotate-y-180 cursor-pointer " +
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
              className="bg-blueish-gray-gold-gradient h-1 rounded-full"
            />
            <m.div
              animate={{ width: `${100 - progressBarWidth}%` }}
              className="h-1 w-[80%] rounded-full bg-black/25"
            />
          </div>

          {/* right arrow */}
          <div onClick={handleRight}>
            <ArrowSvg
              color="var(--color-light-black)"
              className={
                "w-5 cursor-pointer " +
                (slidePercent >= 1 ? " cursor-not-allowed! opacity-50!" : "")
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
