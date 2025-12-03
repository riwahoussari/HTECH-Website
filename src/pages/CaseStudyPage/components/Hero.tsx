import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { SlideUpSelf } from "../../../components/ui/Anims";

export default function PHero({
  navbarTriggerRef,
  title,
  text,
  img,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
  title: string;
  text: string;
  img: { src: string; alt: string };
}) {
  return (
    <Hero
      ref={navbarTriggerRef}
      buttons={<></>
        // <Button arrow={"normal"} size={"lg"} variant={"outline"}>
        //   Learn more
        // </Button>
      }
      title={title}
      text={text}
      size="md"
      image={
        <SlideUpSelf className="relative w-9/10 lg:w-1/2 max-w-[970px] -translate-y-32 overflow-hidden">
          <img className=" lg-rounded " {...img} />
        </SlideUpSelf>
      }
    />
  );
}
