import CallToAction from "../../components/sections/CallToAction";
import Navbar from "../../components/sections/navbar/Navbar";
import CareersHero from "./components/CareersHero";
import LifeAtGaiant from "./components/LifeAtGaiant";
import DoYouFit from "./components/DoYouFit";
import WhatsInItForYou from "./components/WhatsInItForYou";
import OpenRoles from "./components/OpenRoles";
import { PageMeta } from "../../components/ui/PageMeta";

export default function CareersPage() {
  return (
    <>
      <PageMeta
        title="Careers at Gaiant | Build the Future of Intelligent Work"
        description="Join Gaiant and help shape the next generation of enterprise AI. We’re looking for curious minds and ambitious builders to create secure, scalable systems that empower people and transform industries."
      />
      <Navbar transparentBg={false} />
      <main>
        <CareersHero />
        <LifeAtGaiant />
        <DoYouFit />
        <WhatsInItForYou />
        <OpenRoles />
        <CallToAction />
      </main>
    </>
  );
}
