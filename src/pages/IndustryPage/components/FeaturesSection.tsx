import AccordionSection from "../../../components/sections/AccordionSection";
import { INDUSTRY_PAGE_DATA } from "../../../lib/data";

export default function FeaturesSection() {
  return (
    <AccordionSection
      title={INDUSTRY_PAGE_DATA.FEATURES_SECTION.title}
      subtitle={INDUSTRY_PAGE_DATA.FEATURES_SECTION.subtitle}
      text={INDUSTRY_PAGE_DATA.FEATURES_SECTION.text}
      img={
        <div>
          <img
            src={INDUSTRY_PAGE_DATA.FEATURES_SECTION.img1.src}
            alt={INDUSTRY_PAGE_DATA.FEATURES_SECTION.img1.src}
          />
          <img
            src={INDUSTRY_PAGE_DATA.FEATURES_SECTION.img2.src}
            alt={INDUSTRY_PAGE_DATA.FEATURES_SECTION.img2.src}
            className="absolute top-0 left-0 z-1"
          />
        </div>
      }
      accordionContent={INDUSTRY_PAGE_DATA.FEATURES_SECTION.accordionContent}
    />
  );
}
