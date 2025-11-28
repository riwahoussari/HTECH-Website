import { useRef, type ReactNode } from "react";
import { SectionSubTitle } from "../ui/Titles";
import { AnimatedText, SlideUpAnim } from "../ui/Anims";
import { useInView } from "motion/react";

export default function TextSection({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section ref={sectionRef} className="my-container side-padding mt-[120px]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <div>
          <SectionSubTitle>
            <AnimatedText transition={{ duration: 0.3, delay: 0.2 }} isInView>
              {subtitle}
            </AnimatedText>
          </SectionSubTitle>
        </div>
        <SlideUpAnim
          isInView={isInView}
          className="col-span-2 max-w-[892px] space-y-5 md:space-y-8"
        >
          <p className="text-[26px] leading-[34px] xs:text-[30px] xs:leading-[38px]">
            {title}
          </p>
          <p className="text-[15px] leading-[19px] xs:text-[16px] xs:leading-[21px]">
            {content}
          </p>
        </SlideUpAnim>
      </div>
    </section>
  );
}
