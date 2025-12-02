import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";

export default function PHero({
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
      title={title}
      text={description}
      size="md"
      textSizing=" max-w-[900px] "
      align="center"
      buttons={
        <>
          <Button arrow={"normal"} size={"lg"}>Request a demo</Button>
        </>
      }
    />
  );
}
