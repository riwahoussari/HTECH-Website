import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { SlideUpSelf } from "../../../components/ui/Anims";

export default function PHero({
  navbarTriggerRef,
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: { src: string; alt: string };
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <Hero
        ref={navbarTriggerRef}
        title={title}
        text={description}
        size="md"
        align="center"
        background="none"
        buttons={
          <>
            <Button arrow={"normal"} size={"lg"}>
              Request a demo
            </Button>
          </>
        }
        className="pb-0!"
      />
      <div className="side-padding my-container">
        <img {...img} className="lg-rounded w-full aspect-3/1 object-cover" />
      </div>
    </>
  );
}
