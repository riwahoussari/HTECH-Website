import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import GradientCircle from "../../../components/ui/GradientCircle";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { ABOUT_PAGE_DATA } from "../../../lib/data";

export default function AboutHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      className="text-black!"
      spacing="max"
      titleWidth="lg:min-w-[560px] lg:max-w-[560px] xl:min-w-[660px] xl:max-w-[660px]"
      textWidth="max-w-[440px] xl:max-w-[550px]"
      {...ABOUT_PAGE_DATA.HERO}
      button={
        <Button variant={"black"} arrow={"spaced"}>
          REQUEST A DEMO
        </Button>
      }
      background={
        <div className="absolute top-[240px] left-1/2 w-[500px] lg:w-[40vw] lg:min-w-[550px]">
          <GradientCircle blur={"lg"} />
        </div>
      }
    >
      <div ref={navbarTriggerRef} className="my-container side-padding">
        <ImagesLayout
          animationDelay={0.5}
          bg2={false}
          img1={
            <img
              src="/images/team-working.webp"
              className="h-full w-full object-cover"
              alt="A team of developers working together on their laptops"
              fetchPriority="high"
            />
          }
          img2={
            <div className="flex h-full w-full items-center justify-center bg-black/20 p-5 lg:p-8">
              <img
                src="/demos/about-attributes.svg"
                alt="Strengthening Businesses. Revolutionizing Operations. Maximizing Potential."
                fetchPriority="high"
              />
            </div>
          }
        />
      </div>
    </Hero>
  );
}
