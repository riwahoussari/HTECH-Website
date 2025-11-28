import { Fragment } from "react/jsx-runtime";
import TextSection from "../../../components/sections/TextSection";
import { ABOUT_PAGE_DATA } from "../../../lib/data";

export default function OurStory() {
  return (
    <TextSection
      title={ABOUT_PAGE_DATA.OUR_STORY.title}
      subtitle={ABOUT_PAGE_DATA.OUR_STORY.subtitle}
      content={
        <>
          {ABOUT_PAGE_DATA.OUR_STORY.text.split("<br>").map((string, i) => (
            <Fragment key={i}>
              {string}
              <br />
            </Fragment>
          ))}
        </>
      }
    />
  );
}
