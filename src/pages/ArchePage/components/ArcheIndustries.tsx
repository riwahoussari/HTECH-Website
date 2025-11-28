import { useRef, useState, type ReactNode } from "react";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useInView } from "motion/react";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function ArcheIndustries() {
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="side-padding my-container flex flex-col items-center gap-y-8 overflow-x-clip sm:gap-y-14"
    >
      {/* title */}
      <CenteredTitleBlock
        title={ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.title}
        text={ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.text}
      />

      {/* tabs */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 items-center justify-items-stretch gap-2 rounded-full px-3 py-2.5 text-center max-sm:flex-wrap xs:grid-cols-3 sm:flex sm:justify-between sm:border-1 lg:gap-8"
      >
        {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs.map((tab, i) => (
          <Tab
            key={i}
            active={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          >
            {tab}
          </Tab>
        ))}
      </SlideUpAnim>
      {/* image */}
      <div className="relative">
        <SlideUpAnim
          isInView={isInView}
          className="absolute top-0 right-0 w-[85%] md:w-[52%]"
          initial={{ y: "60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src="/images/doctor-typing.webp"
            className="h-full w-full object-contain"
            alt="A doctor working on his ipad"
          />
        </SlideUpAnim>
        <SlideUpAnim
          isInView={isInView}
          className="relative w-full"
          initial={{ y: "60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/demos/ai-working.svg"
            className="h-full w-full object-contain max-md:hidden"
            alt="Demo of the ai workflow"
          />
          <img
            src="/demos/ai-working-mobile.svg"
            className="h-full w-full object-contain md:hidden"
            alt="Demo of the ai workflow"
          />
        </SlideUpAnim>
      </div>
    </section>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <p
      onClick={onClick}
      className={
        "cursor-pointer rounded-full hover:bg-black hover:text-white px-5 py-2 text-[16px] duration-200 ease-in-out max-sm:border-1 xs:text-[17px] " +
        (active ? " bg-black text-white" : " bg-transparent text-black")
      }
    >
      {children}
    </p>
  );
}
