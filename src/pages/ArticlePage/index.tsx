import Navbar from "../../components/sections/navbar/Navbar";
import CallToAction from "../../components/sections/CallToAction";
import NextRead from "./components/NextRead";
import ArticleSection from "./components/ArticleSection";
import { PageMeta } from "../../components/ui/PageMeta";

export default function ArticlePage() {
  return (
    <>
      <PageMeta
        title="Why Language is the Next Frontier of Business Intelligence | Gaiant Insights"
        description="Read Gaiant’s take on Language in Business Intelligence. Explore how AI is redefining work, accelerating decisions, and driving real-world impact across industries."
      />
      <Navbar transparentBg={false} />
      <main className="main-flex">
        <ArticleSection />
        <NextRead />
        <CallToAction />
      </main>
    </>
  );
}
