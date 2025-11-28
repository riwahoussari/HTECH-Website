import { SlideUpSelf } from "../../../components/ui/Anims";
import { GlassCard } from "../../../components/ui/Cards";
import { BigEllipseGradient } from "../../../components/ui/GradientCircle";
import { TitleBlock } from "../../../components/ui/Titles";
import { ABOUT_PAGE_DATA } from "../../../lib/data";

export default function OurMission() {
  return (
    <section className="side-padding my-container relative mt-[120px]">
      <BigEllipseGradient />

      <TitleBlock
        title={ABOUT_PAGE_DATA.OUR_MISSION.title}
        subtitle={ABOUT_PAGE_DATA.OUR_MISSION.subtitle}
      />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {ABOUT_PAGE_DATA.OUR_MISSION.cards.map((card, i) => (
          <SlideUpSelf key={i}>
            <GlassCard className="w-full max-w-none!" {...card} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
