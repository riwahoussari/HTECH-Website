import { useInView } from "motion/react";
import { useRef } from "react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { SectionTitle } from "../../../components/ui/Titles";
import { AnimatedText, SlideUpSelf } from "../../../components/ui/Anims";
// import { SimpleCard } from "../../../components/ui/Cards";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function OpenRoles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      id="open_roles"
      ref={sectionRef}
      className="relative mt-[120px] scroll-m-[120px] overflow-x-clip"
    >
      <div className="absolute top-10 left-0 z-0 -translate-x-1/3 opacity-50">
        <GradientCircle
          className="origin-top blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-300"
          colorr={"teal"}
        />
      </div>

      <div className="absolute right-0 bottom-0 z-0 translate-x-8/10 translate-y-1/4 opacity-50">
        <GradientCircle className="blur-[max(6vw,60px)]!" colorr={"teal"} />
      </div>

      <div className="my-container side-padding">
        <div className="relative mb-5 xs:mb-8">
          <SectionTitle>
            <AnimatedText isInView={isInView}>
              {CAREERS_PAGE_DATA.OPEN_ROLES.title}
            </AnimatedText>
          </SectionTitle>
        </div>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {CAREERS_PAGE_DATA.OPEN_ROLES.cards.map((role, i) => (<></>
           
          ))}
        </div>
      </div>
    </section>
  );
}
