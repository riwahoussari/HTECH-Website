import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { SlideUpSelf } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";

export default function PHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLImageElement | null>;
}) {
  return (
    <Hero
      title="Horion For Sales"
      text="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
      buttons={
        <Button size={"lg"} arrow="normal">
          Request a demo
        </Button>
      }
      background={
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-gold-vertical-gradient" />
      }
      image={
        <SlideUpSelf className="relative w-9/10 max-w-[1200px] -translate-y-32 overflow-hidden">
          <img
            ref={navbarTriggerRef}
            src="/assets/demos/horion-for-sales.png"
            alt="Horion for sales demo"
            className="lg-rounded"
          />
        </SlideUpSelf>
      }
    />
  );
}
