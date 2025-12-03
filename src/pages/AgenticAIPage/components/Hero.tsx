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
    <Hero
      ref={navbarTriggerRef}
      title={title}
      text={description}
      size="md"
      align="left"
      buttons={
        <>
          <a href="#request-a-demo">
            <Button arrow={"normal"} size={"lg"}>
              Request a demo
            </Button>
          </a>
        </>
      }
      image={
        <SlideUpSelf className="relative xl:w-1/2 max-xl:max-w-[700px] aspect-5/3 overflow-hidden">
          <img className="lg-rounded w-full h-full object-cover" {...img} />
        </SlideUpSelf>
      }
    />
  );
}
