import CallToAction from "../../components/sections/CallToAction";
import { TrustedBy } from "../../components/sections/TrustedBy";
import Navbar from "../../components/sections/navbar/Navbar";
import IndustryHero from "./components/IndustryHero";
import FeaturesSection from "./components/FeaturesSection";
import UseCases from "./components/UseCases";
import OurApproach from "./components/OurApproach";
import { PageMeta } from "../../components/ui/PageMeta";

export default function () {
  return (
    <>
      <PageMeta
        title="AI for Banking & Financial Services | Gaiant"
        description="Detect fraud, automate compliance, and accelerate decision-making with Gaiant’s trusted AI solutions designed for the financial sector."
      />
      <Navbar transparentBg={false} />
      <main>
        <IndustryHero />
        <FeaturesSection />
        <UseCases />
        <OurApproach />
        <TrustedBy />
        <CallToAction />
      </main>
    </>
  );
}
