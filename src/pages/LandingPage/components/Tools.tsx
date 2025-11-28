import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "motion/react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { LANDING_PAGE_DATA } from "../../../lib/data";

const ICONS = [
  "/tools/Rectangle%20100.webp",
  "/tools/Rectangle%20101.webp",
  "/tools/Rectangle%2099.webp",
  "/tools/Rectangle%2098.webp",
  "/tools/Rectangle%20104.webp",
  "/tools/Rectangle%20108.webp",
  "/tools/Rectangle%20106.webp",
  "/tools/Rectangle%20103.webp",
  "/tools/Rectangle%20107.webp",
  "/tools/Rectangle%20102.webp",
  "/tools/Rectangle%20105.webp",
  "/tools/Rectangle%20109.webp",
];

export default function Tools() {
  return (
    <section className="relative mt-[120px] flex flex-col items-center overflow-x-clip">
      {/* background blur */}
      <div className="absolute top-1/2 left-0 -z-1 w-[40vw] -translate-1/2 opacity-70">
        <GradientCircle blur="lg" />
      </div>

      {/* titles */}
      <CenteredTitleBlock
        className="max-w-[766px]"
        big={true}
        title={LANDING_PAGE_DATA.TOOLS.title}
        subtitle={LANDING_PAGE_DATA.TOOLS.subtitle}
      />

      {/* ICONS */}
      {/* <div className="my-container relative mt-16 w-full overflow-x-clip">
        <div className="absolute right-1/2 flex w-max translate-x-1/2 items-center justify-between gap-[min(18px,2.5vw)]">

          {ICONS.map((src, i) => {
            return (
              <SlideUpAnim
                key={i}
                isInView={isInView}
                transition={{
                  delay: 0.3 + 0.1 * Math.abs(ICONS.length / 2 - i),
                }}
              >
                <Icon className={OPACITIES[i]} src={src} />
              </SlideUpAnim>
            );
          })}
        </div>
      </div> */}
      <MarqueeIcons />
    </section>
  );
}

function MarqueeIcons() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [iconWidth, setIconWidth] = useState<number>(0);
  const [gap, setGap] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const xRef = useRef(0);

  // Measure content width and icon size
  const measureContentWidthAndIconSize = () => {
    if (!scrollRef.current) return;

    const icons = scrollRef.current.querySelectorAll("img");
    if (icons.length === 0) return;

    const first = icons[0].getBoundingClientRect();
    const second = icons[1].getBoundingClientRect();
    const gapValue = Math.abs(second.left - (first.left + first.width));
    setGap(gapValue);
    setIconWidth(first.width);
    setContentWidth((iconWidth + gapValue) * ICONS.length);
  };

  useEffect(() => {
    measureContentWidthAndIconSize();

    window.addEventListener("resize", measureContentWidthAndIconSize);
    return () =>
      window.removeEventListener("resize", measureContentWidthAndIconSize);
  }, [iconWidth]);

  // Animate marquee
  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;
    xRef.current -= (delta / 1000) * iconWidth; // speed in px/s (1 iconWidth per second)
    const newX = ((xRef.current % contentWidth) + contentWidth) % contentWidth;
    setTranslateX(newX);
  });

  const calculateOpacity = (index: number) => {
    const itemPos =
      (index * (iconWidth + gap) - translateX + contentWidth * 10) %
      contentWidth; // position relative to container width

    // Compute fade (0 → invisible, 1 → fully visible)
    const rightContainerEdge = contentWidth;
    const leftIconEdge = itemPos;
    const rightIconEdge = itemPos + iconWidth;
    const fadeEnd = rightContainerEdge - iconWidth;
    const distance = iconWidth;
    let opacity = 1;

    // opacity increasing (fade in)
    // starts when left side of the icon meets the left edge of the container
    // ends when left side of the icons is exactly an icon width away from the left edge of the container
    // (after traveling the distance of 1 icon width)
    if (leftIconEdge < distance) opacity = Math.max(0, itemPos / distance);
    // opacity decreasing (fade out)
    // starts when the right side of the icon is 1 icon width away from the right edge of the container
    // ends when the right side of the icon meets the right edge of the container
    // (after traveling the distance of 1 icon width)
    else if (rightIconEdge > fadeEnd)
      opacity = Math.max(0, (rightContainerEdge - rightIconEdge) / distance);

    return opacity;
  };

  return (
    <div className="relative mt-16 flex justify-center gap-[min(18px,2.5vw)] overflow-hidden">
      {/* main icons that start on screen */}
      <div
        className="absolute flex items-center gap-[min(18px,2.5vw)] pr-[min(18px,2.5vw)]"
        style={{
          transform: `translateX(${-translateX + contentWidth}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
        aria-hidden
      >
        {[...ICONS].map((src, i) => {
          return <Icon key={i} src={src} opacity={calculateOpacity(i)} />;
        })}
      </div>

      {/* icons that start out of screen (to the right) */}
      <div
        className="absolute flex items-center gap-[min(18px,2.5vw)] pr-[min(18px,2.5vw)]"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
        aria-hidden
      >
        {[...ICONS].map((src, i) => {
          return <Icon key={i} src={src} opacity={calculateOpacity(i)} />;
        })}
      </div>

      {/* placeholder for width and height */}
      <div
        className="relative flex items-center gap-[min(18px,2.5vw)]"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
      >
        {[...ICONS].map((src, i) => (
          <Icon key={i} src={src} opacity={0} />
        ))}
      </div>
    </div>
  );
}

function Icon({
  src,
  opacity,
  className = "",
}: {
  src: string;
  opacity: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      style={{ opacity }}
      className={
        "aspect-square w-[16vw] max-w-[120px] rounded-lg xs:rounded-xl sm:w-[7.5vw] sm:min-w-[90px] " +
        className
      }
      alt="Icon for a tool"
    />
  );
}
