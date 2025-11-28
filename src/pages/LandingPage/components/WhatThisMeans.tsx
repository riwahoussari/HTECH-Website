import AccordionSection from "../../../components/sections/AccordionSection";
import { LANDING_PAGE_DATA } from "../../../lib/data";

export default function WhatThisMeans() {
  return (
    <AccordionSection
      className="mt-[150px]!"
      title={LANDING_PAGE_DATA.WHAT_THIS_MEANS.title}
      subtitle={LANDING_PAGE_DATA.WHAT_THIS_MEANS.subtitle}
      img={<img {...LANDING_PAGE_DATA.WHAT_THIS_MEANS.img} />}
      accordionContent={LANDING_PAGE_DATA.WHAT_THIS_MEANS.accordionContent}
    />
  );
}
