import { useInView } from "motion/react";
import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";

export default function BecomePartnerCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  return (
    <section ref={sectionRef} className=" relative bg-gold">
      <img
        src="/assets/textured-bg.png"
        alt="Textured background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
      />

      <SlideUpAnim
        isInView={isInView}
        className="my-container side-padding py-32 sm:py-40 relative flex flex-col items-center gap-10"
      >
        {/* text */}
        <p className="text-58 text-center max-w-[900px]">
          Ready to join the AI revolution with Htech?
        </p>
        <Button size={"lg"}>Request a demo</Button>
        {/* form */}
      </SlideUpAnim>
    </section>
  );
}
