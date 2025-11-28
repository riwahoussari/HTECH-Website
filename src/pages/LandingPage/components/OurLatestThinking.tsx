import { Link } from "react-router-dom";
import NewsArticlesCarousel from "../../../components/sections/NewsArticlesCarousel";
import { TitleBlock } from "../../../components/ui/Titles";
import Button from "../../../components/ui/Button";

export default function OurLatestThinking() {
  return (
    <NewsArticlesCarousel
      titleBlock={
        <TitleBlock
          title="Our latest thinking"
          subtitle="INSIGHTS AND IDEAS"
          button={
            <Link to="/news">
              <Button size={"sm"} arrow={"normal"} variant={"secondary"}>
                SEE ALL
              </Button>
            </Link>
          }
        />
      }
    />
  );
}
