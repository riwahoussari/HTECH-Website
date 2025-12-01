import AccordionSection from "../../../components/sections/AccordionSection";
import { TitleBlock } from "../../../components/ui/Titles";
import { LANDING_PAGE_DATA } from "../../../lib/data";

export default function WhatThisMeans() {
  return (
    <section className="my-container side-padding">
      <TitleBlock
        title={LANDING_PAGE_DATA.WHAT_THIS_MEANS.title}
        subtitle={LANDING_PAGE_DATA.WHAT_THIS_MEANS.subtitle}
      />
      <AccordionSection
        img={
          <img
            src="/assets/textured-bg.png"
            className="lg-rounded bg-gray-500 h-full"
          />
        }
        accordionContent={LANDING_PAGE_DATA.WHAT_THIS_MEANS.accordionContent}
      />
    </section>
  );
}
