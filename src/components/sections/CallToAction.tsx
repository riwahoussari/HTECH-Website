import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { useRef } from "react";

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  return (
    <section ref={sectionRef} className=" relative bg-gold">
      <img
        src="/assets/textured-bg.png"
        alt="Textured background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"
      />

      <SlideUpAnim
        isInView={isInView}
        className="my-container side-padding py-60 relative flex flex-col items-center gap-10"
      >
        {/* text */}
        <p className="text-64 text-center">Ready to put AI to work?</p>
        <Button size={"lg"}>Request a demo</Button>
        {/* form */}
      </SlideUpAnim>
    </section>
  );
}
