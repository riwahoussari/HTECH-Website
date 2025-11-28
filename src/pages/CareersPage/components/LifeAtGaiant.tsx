import { SlideUpSelf } from "../../../components/ui/Anims";
import { GlassCard } from "../../../components/ui/Cards";
import { BigEllipseGradient } from "../../../components/ui/GradientCircle";
import { TitleBlock } from "../../../components/ui/Titles";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function LifeAtGaiant() {
  return (
    <section className="side-padding my-container relative mt-[40px]">
      <BigEllipseGradient />

      <TitleBlock
        title={CAREERS_PAGE_DATA.LIFE_AT_GAIANT.title}
        subtitle={CAREERS_PAGE_DATA.LIFE_AT_GAIANT.subtitle}
      />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {CAREERS_PAGE_DATA.LIFE_AT_GAIANT.cards.map((card, i) => (
          <SlideUpSelf key={i}>
            <GlassCard className="w-full max-w-none!" {...card} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
