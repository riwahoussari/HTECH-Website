import {
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Arrow2Svg } from "../ui/ArrowSvg";
import GradientCircle from "../ui/GradientCircle";
import { TitleBlock } from "../ui/Titles";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";

type TAccordionContent = {
  title: string;
  subtitle?: string;
  list?: string[];
};

export default function AccordionSection({
  title,
  subtitle,
  text,
  img,
  accordionContent,
  className,
  button,
  withGradient = true,
}: {
  title: string;
  subtitle: string;
  text?: string;
  img: ReactNode;
  accordionContent: TAccordionContent[];
  className?: string;
  button?: ReactNode;
  withGradient?: boolean;
}) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className={"side-padding my-container mt-[100px] " + (className || "")}
    >
      {/* titles */}
      <div className="flex flex-col gap-14 lg:flex-row lg:items-center xl:gap-44 lg:[&>div]:w-1/2">
        <div>
          <TitleBlock title={title} subtitle={subtitle} />
        </div>
        {text && (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="max-w-[555px] pb-2"
          >
            <p className="text-16">{text}</p>
          </SlideUpAnim>
        )}
        {button && (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="flex max-w-[555px] pb-2 lg:justify-end"
          >
            {button}
          </SlideUpAnim>
        )}
      </div>

      {/* content */}
      <div className="relative mt-[40px] flex flex-col gap-14 lg:flex-row xl:gap-44 lg:[&>div]:w-1/2">
        {withGradient && (
          <div className="absolute right-1/2 bottom-1/2 z-0 translate-1/2 opacity-60">
            <GradientCircle blur={"lg"} />
          </div>
        )}
        {/* image */}
        <SlideUpAnim isInView={isInView} className="relative">
          {img}
        </SlideUpAnim>
        {/* Accordion */}
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="relative flex flex-col md:max-w-[555px]"
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
    </section>
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
  const CONTENT_HEIGHT = "240px";

  return (
    <div className="relative" {...props}>
      {/* border top */}
      <div
        className={
          "absolute top-0 right-0 left-0 h-[2px] rounded-full" +
          (selected ? " bg-dark-green-blue-gradient" : " bg-black/25")
        }
      />

      {/* content */}
      <p className="text-25 cursor-pointer py-4" onClick={onClick}>
        {title}
      </p>

      {(subtitle || list) && (
        <div
          style={{
            height: selected ? CONTENT_HEIGHT || 0 : 0,
          }}
          className={
            "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
          }
        >
          <div ref={contentRef} style={{ height: CONTENT_HEIGHT + "px" }}>
            {subtitle && (
              <p className="py-5 font-ibm! text-[11px] font-semibold text-teal xs:text-[12px]">
                {subtitle}
              </p>
            )}
            {list && (
              <div className="space-y-[21px] pb-8">
                {list.map((string, i) => (
                  <div key={i} className="flex items-center gap-5 xs:gap-7">
                    <Arrow2Svg className="w-3 xs:w-4" />
                    <p className="text-16">{string}</p>
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
