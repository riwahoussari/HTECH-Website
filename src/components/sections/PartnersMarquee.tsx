import { useAnimationFrame } from "motion/react";
import { useEffect, useRef, useState } from "react";



export default function PartnersMarquee() {
  return (
    <>
      <div className="bg-light-black flex items-center justify-center overflow-hidden">
        <MarqueeLogos />
      </div>
    </>
  );
}

const LOGOS = [
  {
    src: "/assets/logos/lebanese-military-logo.svg",
    alt: "Lebanese Military Logo",
  },
  {
    src: "/assets/logos/berytech-logo.png",
    alt: "Berytech Logo",
    className: " invert-100 ",
  },
  { src: "/assets/logos/usj-logo.png", alt: "USJ Logo" },
  { src: "/assets/logos/lau-white-logo.svg", alt: "LAU Logo" },
  { src: "/assets/logos/aub-logo.svg", alt: "AUB Logo" },
  {
    src: "/assets/logos/military-tribunal-logo.svg",
    alt: "Military Tribunal Logo",
  },
  { src: "/assets/logos/unicef-logo.svg", alt: "Unicef Logo" },
];

function MarqueeLogos() {
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
    setContentWidth((iconWidth + gapValue) * LOGOS.length);
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
    xRef.current -= (delta / 1000) * iconWidth * 0.5; // speed in px/s (1 iconWidth per second)
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

    return opacity * 0.7;
  };

  return (
    <div className="relative flex justify-center 2xl:py-8 py-6  2xl:gap-32 lg:gap-20 gap-12 overflow-hidden">
      {/* main icons that start on screen */}
      <div
        className="absolute flex items-center 2xl:gap-32 lg:gap-20 gap-12  2xl:pr-32 lg:pr-20 pr-12"
        style={{
          transform: `translateX(${-translateX + contentWidth}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
        aria-hidden
      >
        {[...LOGOS].map(({ src, alt, className }, i) => (
          <Logo
            key={i}
            src={src}
            alt={alt}
            className={className}
            opacity={calculateOpacity(i)}
          />
        ))}
      </div>

      {/* icons that start out of screen (to the right) */}
      <div
        className="absolute flex items-center 2xl:gap-32 lg:gap-20 gap-12 2xl:pr-32 lg:pr-20 pr-12 "
        style={{
          transform: `translateX(-${translateX}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
        aria-hidden
      >
        {[...LOGOS].map(({ src, alt, className }, i) => (
          <Logo
            key={i}
            src={src}
            alt={alt}
            className={className}
            opacity={calculateOpacity(i)}
          />
        ))}
      </div>

      {/* placeholder for width and height */}
      <div
        className="relative flex items-center  2xl:gap-32 lg:gap-20 gap-12"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: "max-content",
        }}
        ref={scrollRef}
      >
        {[...LOGOS].map(({ src, alt, className }, i) => (
          <Logo key={i} src={src} alt={alt} className={className} opacity={0} />
        ))}
      </div>
    </div>
  );
}

function Logo({
  src,
  alt,
  opacity,
  className = "",
}: {
  src: string;
  alt: string;
  opacity: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      style={{ opacity }}
      className={"2xl:w-48 lg:w-36 w-32 " + className}
      alt={alt}
    />
  );
}
