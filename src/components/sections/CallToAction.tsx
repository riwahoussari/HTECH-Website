import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { CenteredTitleBlock } from "../ui/Titles";
import { useRef } from "react";

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  return (
    <section ref={sectionRef} className="my-container side-padding mt-[120px]">
      {/* titles */}
      <CenteredTitleBlock
        className=""
        big={true}
        title="See how simple AI can really be"
        subtitle="ARE YOU READY?"
      />

      {/* circle */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mx-auto my-12 aspect-square w-[90%] max-w-[310px] rounded-full border-2 border-red-500" />
      </SlideUpAnim>

      {/* button */}
      <div className="flex justify-center">
        <SlideUpAnim
          isInView={isInView}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant={"black"}>REQUEST A DEMO</Button>
        </SlideUpAnim>
      </div>
    </section>
  );
}
