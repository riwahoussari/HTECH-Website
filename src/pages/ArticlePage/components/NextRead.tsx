import { Link } from "react-router-dom";
import NewsArticlesCarousel from "../../../components/sections/NewsArticlesCarousel";
import { TitleBlock } from "../../../components/ui/Titles";
import Button from "../../../components/ui/Button";

export default function NextRead() {
  return (
    <NewsArticlesCarousel
      titleBlock={
        <TitleBlock
          title="Read Next"
          button={
            <Link to="/news">
              <Button variant={"black"} arrow={"normal"}>
                SEE ALL
              </Button>
            </Link>
          }
        />
      }
    />
  );
}
