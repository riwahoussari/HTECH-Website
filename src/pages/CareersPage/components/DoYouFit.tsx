import { Fragment } from "react/jsx-runtime";
import TextSection from "../../../components/sections/TextSection";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function DoYouFit() {
  return (
    <TextSection
      subtitle={CAREERS_PAGE_DATA.DO_YOU_FIT.subtitle}
      title={CAREERS_PAGE_DATA.DO_YOU_FIT.title}
      content={
        <>
          {CAREERS_PAGE_DATA.DO_YOU_FIT.text.split("<br>").map((string, i) => (
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
