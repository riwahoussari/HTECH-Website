import { useInView, useTransform, motion as m } from "motion/react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function StickeVideo() {
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: true });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-384px start", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div>
      <div ref={containerRef} className="absolute w-full max-lg:hidden">
        <div ref={videoRef} className="top-80 -translate-y-56 lg:sticky">
          <SlideUpAnim
            transition={{ duration: 0.6 }}
            initial={{ y: "100px" }}
            isInView={isInView}
            className="side-padding my-container"
          >
            <m.img
              style={{ scale }}
              fetchPriority="high"
              src="/images/video-screenshot.webp"
              alt="AI chatbot dashboard"
              className="mx-auto w-9/10 rounded-xl object-contain"
            />
          </SlideUpAnim>
        </div>

        <div className="h-[400px] max-lg:hidden" />
      </div>

      {/* placeholder to maintain section height */}
      <div className="side-padding my-container max-lg:-mb-10 max-lg:-translate-y-20 max-sm:-mb-32 lg:invisible lg:pb-56">
        <SlideUpSelf>
          <img
            src="/images/video-screenshot.webp"
            alt="AI chatbot dashboard"
            className="mx-auto w-full rounded-md object-contain md:rounded-xl lg:w-9/10"
          />
        </SlideUpSelf>
      </div>
    </div>
  );
}
