import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import ArrowSvg from "../ui/ArrowSvg";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";

type TAccordionContent = {
  title: string;
  subtitle?: string;
  list?: string[];
};

export default function AccordionSection({
  img,
  accordionContent,
}: {
  img: ReactNode;
  accordionContent: TAccordionContent[];
}) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col gap-14 lg:flex-row lg:justify-between xl:gap-14 lg:[&>div]:w-1/2"
    >
      {/* image */}
      <SlideUpAnim isInView={isInView} className="relative">
        {img}
      </SlideUpAnim>

      {/* Accordion */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ delay: 0.2 }}
        className="relative flex flex-col md:max-w-[720px]"
      >
        {accordionContent.map((item, i) => (
          <AccordionItem
            selected={selected === i}
            onClick={() => setSelected(i)}
            key={i}
            {...item}
          />
        ))}
      </SlideUpAnim>
    </div>
  );
}

function AccordionItem({
  title,
  subtitle,
  list,
  selected = false,
  onClick,
  ...props
}: {
  title: string;
  subtitle?: string;
  list?: string[];
  selected?: boolean;
  onClick: () => void;
} & HTMLAttributes<HTMLDivElement>) {
  const contentRef = useRef<HTMLDivElement>(null); // to calculate height for animation to work
  const [accItemHeight, setAccItemHeight] = useState<number | null>();
  useEffect(() => {
    const setHeight = () => {
      if (contentRef.current) {
        setAccItemHeight(contentRef.current.offsetHeight);
      }
      console.log(contentRef.current?.offsetHeight);
    };

    setHeight();

    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);
  // const CONTENT_HEIGHT = "302px";

  return (
    <div className="relative" {...props}>
      {/* border top */}
      <div
        className={
          "absolute top-0 right-0 left-0 h-[2px] rounded-full" +
          (selected ? " bg-blueish-gray-gold-gradient " : " bg-black/25")
        }
      />

      {/* content */}
      <p className="text-32 cursor-pointer py-6" onClick={onClick}>
        {title}
      </p>

      {(subtitle || list) && (
        <div
          style={{
            height: selected ? accItemHeight || 0 : 0,
          }}
          className={
            "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
          }
        >
          <div ref={contentRef}>
            {subtitle && (
              <p
                className="pb-10 pt-2 text-20 text-blueish-gray font-light"
                style={{ letterSpacing: "1px" }}
              >
                {subtitle}
              </p>
            )}
            {list && (
              <div className="space-y-[28px] pb-8">
                {list.map((string, i) => (
                  <div key={i} className="flex items-center gap-4 xs:gap-7">
                    <ArrowSvg
                      strokeWidth={1}
                      className="w-4.5 xs:w-5.5 -rotate-45"
                    />
                    <p className="text-20">{string}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
