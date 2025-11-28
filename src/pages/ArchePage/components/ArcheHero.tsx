import { useRef, type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { LandscapeBg } from "../../../components/ui/Backgrounds";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function ArcheHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Hero
      spacing="max"
      {...ARCHE_PAGE_DATA.HERO}
      button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
      background={<LandscapeBg fetchPriority="high" ref={navbarTriggerRef} />}
    >
      <div ref={heroRef} className="mt-10 h-1 opacity-0 lg:mt-48"></div>
    </Hero>
  );
}
