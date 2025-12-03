import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { SlideUpSelf } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";

export default function PHero({
  title,
  text,
  img,
  navbarTriggerRef,
}: {
  title: string;
  text: string;
  img: { src: string; alt: string };
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      ref={navbarTriggerRef}
      title={title}
      text={text}
      align="left"
      size="md"
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
