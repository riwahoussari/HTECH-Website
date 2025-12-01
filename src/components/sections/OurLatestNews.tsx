import NewsArticlesCarousel from "./NewsArticlesCarousel";
import { TitleBlock } from "../ui/Titles";

export default function OurLatestNews() {
  return (
    <NewsArticlesCarousel
      titleBlock={
        <TitleBlock title="Our latest news" subtitle="INSIGHTS AND IDEAS" />
      }
    />
  );
}
