import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import GradientCircle from "../../../components/ui/GradientCircle";
import { INDUSTRIES_PAGE_DATA } from "../../../lib/data";

export default function IndustriesHero() {
  return (
    <Hero
      className=""
      spacing="max"
      titleWidth="lg:min-w-[570px] lg:max-w-[570px] xl:min-w-[670px] xl:max-w-[670px]"
      textWidth="max-w-[460px] xl:max-w-[530px]"
      {...INDUSTRIES_PAGE_DATA.HERO}
      button={
        <Button variant={"black"} arrow={"spaced"}>
          REQUEST A DEMO
        </Button>
      }
      background={
        <div className="absolute top-[240px] left-0 w-[500px] -translate-x-1/4 opacity-70 lg:w-[40vw] lg:min-w-[550px]">
          <GradientCircle blur={"lg"} />
        </div>
      }
    />
  );
}
