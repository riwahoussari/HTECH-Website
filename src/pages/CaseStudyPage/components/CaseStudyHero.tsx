import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";

export default function CaseStudyHero({
  navbarTriggerRef,
  title,
  text,
  imgSrc
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
  title: string;
  text: string;
  imgSrc: string;
}) {
  return (
    <Hero
      ref={navbarTriggerRef}
      buttons={
        <Button arrow={"normal"} size={"lg"} variant={"outline"}>
          Learn more
        </Button>
      }
      title={title}
      text={text}
      size="md"
      image={
        <div className="relative w-9/10 lg:w-1/2 max-w-[970px]  -translate-y-32 rounded-2xl overflow-hidden">
          <img src={imgSrc} />
        </div>
      }
    />
  );
}