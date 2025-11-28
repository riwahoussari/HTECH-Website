import type { SyntheticEvent } from "react";
import AccordionSection from "../../../components/sections/AccordionSection";
import Button from "../../../components/ui/Button";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function WhatsInItForYou() {
  return (
    <AccordionSection
      className="mt-[140px]!"
      withGradient={false}
      title={CAREERS_PAGE_DATA.WHATS_IN_IT_FOR_YOU.title}
      subtitle={CAREERS_PAGE_DATA.WHATS_IN_IT_FOR_YOU.subtitle}
      accordionContent={CAREERS_PAGE_DATA.WHATS_IN_IT_FOR_YOU.accordionContent}
      button={
        <a
          href="#open_roles"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            const openRolesSection = document.getElementById("open_roles");
            openRolesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Button variant={"black"} arrow={"spaced"}>
            SEE OPEN ROLES
          </Button>
        </a>
      }
      img={
        <img
          src={CAREERS_PAGE_DATA.WHATS_IN_IT_FOR_YOU.img.src}
          alt={CAREERS_PAGE_DATA.WHATS_IN_IT_FOR_YOU.img.alt}
        />
      }
    />
  );
}
