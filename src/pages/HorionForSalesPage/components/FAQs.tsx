import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useInView } from "motion/react";
import { CenteredTitleBlock } from "../../../components/ui/Titles";

export default function FAQs({faqs} : {faqs: TAccordionContent[]}) {
  return (
    <section className="flex flex-col items-center max-w-[1200px]! my-container side-padding">
      <CenteredTitleBlock title="FAQs" />

      <AccordionSection
        accordionContent={faqs}
      />
    </section>
  );
}

type TAccordionContent = {
  title: string;
  text: string;
};

function AccordionSection({
  accordionContent,
}: {
  accordionContent: TAccordionContent[];
}) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <div
      ref={sectionRef}
      className="relative w-full flex flex-col items-center"
    >
      {/* Accordion */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ delay: 0.2 }}
        className="relative flex flex-col w-full md:max-w-[720px]"
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
  text,
  selected = false,
  onClick,
  ...props
}: {
  title: string;
  text: string;
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
    };

    setHeight();

    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

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
      <div
        className="flex group justify-between cursor-pointer py-6"
        onClick={onClick}
      >
        <p className="text-25">{title}</p>
        <div
          className={
            "w-8 duration-200 ease-in-out group-hover:opacity-70 group-hover:-rotate-90 " +
            (selected ? " opacity-100! -rotate-180! " : "opacity-50 ")
          }
        >
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10.5L14 17.5L21 10.5"
              stroke={"var(--color-light-black)"}
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        style={{
          height: selected ? accItemHeight || 0 : 0,
        }}
        className={
          "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
        }
      >
        <div ref={contentRef}>
          <div className=" pb-8">
            <p className="text-20 opacity-80 leading-[1.4]!">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
