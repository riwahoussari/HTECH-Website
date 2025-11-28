import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { BlurredLandscapeBg } from "../../../components/ui/Backgrounds";
import { TitleBlock } from "../../../components/ui/Titles";
import {
  motion as m,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

const CARDS = [{}, {}, {}, {}];

export default function AccelerateImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative mt-[200px] overflow-x-clip pb-24"
    >
      {/* bg */}
      <BlurredLandscapeBg blur={"lg"} />

      <div
        className="side-padding my-container py-[10px]"
        style={{ paddingBottom: `${CARDS.length * 50}px` }}
      >
        {/* title */}
        <div className="relative mb-12 max-w-[520px] space-y-3 sm:space-y-5">
          <TitleBlock title={ARCHE_PAGE_DATA.ACCELERATE_IMPACT.title} />
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
            <p className="text-16">{ARCHE_PAGE_DATA.ACCELERATE_IMPACT.text}</p>
          </SlideUpAnim>
        </div>

        {/* card */}
        <div ref={cardsContainerRef}>
          {ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards.map((content, i) => (
            <Card
              content={content}
              progress={scrollYProgress}
              index={i}
              isInView={isInView}
            />
          ))}
          <div className="h-[500px] w-2 bg-purple-600" />
        </div>
      </div>
    </section>
  );
}

function Card({
  isInView,
  index,
  progress,
  content,
}: {
  isInView: boolean;
  progress: MotionValue<number>;
  index: number;
  content: {
    subtitle: string;
    title: string;
    text: string;
    img: {
      src: string;
      alt: string;
    };
  };
}) {
  const scaleRange = [index * (1 / CARDS.length), 1];
  const targetScale = 1 - (CARDS.length - index) * 0.01;
  const scale = useTransform(progress, scaleRange, [1, targetScale]);

  return (
    <div
      className="sticky top-20 bg-red/0"
      style={{ marginTop: `-${index == 0 ? 0 : 66}px` }}
    >
      <m.div
        style={{ scale, top: `${index * 50}px` }}
        className={
          "bg-linear-white-transparent-70 relative flex origin-top items-center justify-between gap-x-5 gap-y-10 rounded-xl px-4 py-10 pb-14 backdrop-blur-[100px] max-lg:flex-col sm:gap-y-14 sm:px-10 sm:py-16 sm:pb-20 xl:p-20 xl:pb-24"
        }
      >
        {/* text */}
        <div className="max-w-[380px] text-white max-lg:text-center">
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.3 }}>
            <p className="font-ibm! text-[11px] xs:text-[12px]">
              {content.subtitle}
            </p>
          </SlideUpAnim>
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.4 }}>
            <p className="text-[50px] xs:text-[60px]"> {content.title}</p>
          </SlideUpAnim>
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
            <p className="text-16">{content.text}</p>
          </SlideUpAnim>
        </div>
        {/* image */}
        <SlideUpAnim
          className="w-full max-w-[700px] aspect-7/4! min-w-[320px] lg:w-6/10"
          isInView={isInView}
          transition={{ delay: 0.4 }}
        >
          <img
            src={content.img.src}
            alt={content.img.alt}
            className="h-full w-full object-contain"
          />
        </SlideUpAnim>
      </m.div>
    </div>
  );
}
