import type { SyntheticEvent } from "react";
import Hero from "../../../components/sections/Hero";
import { HeroImgBackground } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function CareersHero() {
  return (
    <Hero
      spacing="max"
      titleWidth="lg:min-w-[600px] lg:max-w-[600px] xl:min-w-[700px] xl:max-w-[700px]"
      {...CAREERS_PAGE_DATA.HERO}
      button={
        <a
          href="#open_roles"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            const openRolesSection = document.getElementById("open_roles");
            openRolesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Button className="xl:mb-20" arrow={"spaced"}>
            SEE OPEN ROLES
          </Button>
        </a>
      }
      background={
        <HeroImgBackground
          blur=" blur-[max(0.5vw,5px)] "
          alt="A team working and talking together"
          src="/images/team-discussing.webp"
          className="object-bottom"
          fetchPriority="high"
        />
      }
    />
  );
}
