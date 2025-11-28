import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SlideUpAnim } from "./Anims";

export default function ImagesLayout({
  img1,
  img2,
  bg1 = true,
  bg2 = true,
  animationDelay,
}: {
  img1: ReactNode;
  img2: ReactNode;
  bg1?: boolean;
  bg2?: boolean;
  animationDelay?: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true });
  return (
    <div ref={divRef} className="relative grid lg:grid-cols-7">
      {/* img 1 */}
      <SlideUpAnim
        className="col-span-5 lg:me-5 lg:aspect-5/3!"
        initial={{ y: "100px" }}
        transition={{ delay: animationDelay || 0, duration: 0.6 }}
        isInView={isInView}
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip rounded-md lg:rounded-xl " +
            (bg1 ? "bg-white/50" : "")
          }
        >
          {img1}
        </div>
      </SlideUpAnim>

      {/* img 2 */}
      <SlideUpAnim
        initial={{ y: "100px" }}
        transition={{ delay: (animationDelay || 0) + 0.2, duration: 0.6 }}
        isInView={isInView}
        className="absolute right-0 bottom-full col-span-2 max-lg:w-[min(25vw,160px)] max-lg:-translate-y-6 max-sm:hidden lg:static lg:ms-2 lg:aspect-2/3!"
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip rounded-md lg:rounded-xl " +
            (bg2 ? "bg-white/50" : "")
          }
        >
          {img2}
        </div>
      </SlideUpAnim>
    </div>
  );
}
