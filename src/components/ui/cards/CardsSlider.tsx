import { useEffect, useRef, useState, type ReactNode } from "react";
import { useSwipe } from "../../../lib/useSwipe";
import ArrowSvg from "../ArrowSvg";
import { motion as m } from "motion/react";

type TSliderValues = {
  visibleCards: number;
  totalCards: number;
  slideDifference: number;
  slidableDistance: number;
  cardsToSlide: number;
};
export default function CardsSlider({
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
      <div {...swipeHandlers} className="cursor-grab" ref={cardsContainerRef}>
        <m.div
          animate={{
            x: `-${slideValue}px`,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex w-max select-none items-stretch gap-5 overflow-y-clip"
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
