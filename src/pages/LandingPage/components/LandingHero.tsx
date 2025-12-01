import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";

export default function LandingHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      ref={navbarTriggerRef}
      size="lg"
      title="Your next breakthrough, powered by AI"
      text="Htech is where powerful AI meets practical business solutions — so you can work smarter."
      buttons={
        <>
          <Button size={"lg"} clr="white">
            Request a demo
          </Button>
          <Button arrow="normal" size={"lg"} variant={"outline"}>
            Explore Products
          </Button>
        </>
      }
    />
  );
}
