import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";

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
        background={
          <div className="absolute top-0 right-0 left-0 bottom-0 z-0 min-h-full min-w-full">
            <div className="relative w-full h-full">
              <div className="bg-white/20 z-1 absolute top-0 right-0 bottom-0 left-0" />
              <img
                {...img}
                className="absolute z-0 top-1/2 -translate-y-1/2 -left-[5%] min-w-[110%] min-h-[110%] object-cover  blur-[10px]"
              />
            </div>
          </div>
        }
        buttons={
          <>
            <Button arrow={"normal"} size={"lg"}>
              Request a demo
            </Button>
          </>
        }
        className="xs:py-32! xs:pt-46! py-27! pt-42! lg:py-46! lg:pt-66! "
      />
    </>
  );
}
