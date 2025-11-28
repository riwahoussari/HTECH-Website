import Hero from "../../../components/sections/Hero";
import { BlurredTealGradientBg2 } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";

export default function NewsCtaSection() {
  return (
    <Hero
      gap="lg:gap-[40px] xl:gap-[30px]"
      textWidth="max-w-[500px] xl:max-w-[600px]"
      titleWidth="max-w-[565px] lg:w-6/10 xl:max-w-[680px] lg:min-w-[510px] xl:min-w-[610px]"
      className="mt-[140px] xl:py-10"
      title="Ready to redefine <sm:br> the way you work?"
      text="Request a demo and see how Gaiant's secure and private AI platform can unlock productivity for your business."
      button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
      background={<BlurredTealGradientBg2 withBall />}
    />
  );
}
