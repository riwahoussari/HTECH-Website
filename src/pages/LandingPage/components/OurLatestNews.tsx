import NewsArticlesCarousel from "../../../components/sections/NewsArticlesCarousel";
import { TitleBlock } from "../../../components/ui/Titles";

export default function OurLatestNews() {
  return (
    <NewsArticlesCarousel
      titleBlock={
        <TitleBlock
          title="Our latest news"
          subtitle="INSIGHTS AND IDEAS"
        />
      }
    />
  );
}
