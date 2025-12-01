import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";

export default function PredictiveAIModelHero({
  navbarTriggerRef,
  title,
  description,
}: {
  title: string;
  description: string;
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      ref={navbarTriggerRef}
      size="lg"
      title={title}
      text={description}
      buttons={
        <>
          <Button size={"lg"}>Request a demo</Button>
        </>
      }
    />
  );
}
