import { useEffect, useState } from "react";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { motion as m } from "motion/react";
const INTERVAL_TIME = 4000;

export function PerformBetter({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      text: string;
      img: { src: string; alt: string };
    }[];
  };
}) {
  const [showing, setShowing] = useState(0);

  useEffect(() => {
    const showNext = () => {
      setShowing((prev) =>
        prev === content.features.length - 1 ? 0 : prev + 1
      );
    };
    const interval = setInterval(showNext, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-container side-padding max-w-[1200px]!">
      <CenteredTitleBlock {...content} />

      <div className="w-full space-y-10">
        {/* images */}
        <div className="w-full relative shadow-xl shadow-light-black/15 lg-rounded overflow-hidden">
          {content.features.map((f, i) => (
            <img
              className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-contain"
              key={i}
              {...f.img}
              style={{ display: i === showing ? "block" : "none" }}
            />
          ))}
          {/* placeholder */}
          <img
            {...content.features[0].img}
            aria-hidden
            className="opacity-0 w-full h-full object-contain"
          />
        </div>

        {/* text */}
        <div className=" w-full lg:flex lg:justify-between grid grid-cols-2 gap-x-8 gap-y-10">
          {content.features.map((f, i) => (
            <Card showing={showing === i} {...f} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  text,
  showing,
  className,
}: {
  title: string;
  text: string;
  showing: boolean;
  className?: string;
}) {
  return (
    <div className={"w-full  relative space-y-4 lg:max-w-[220px] " + className}>
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: showing ? 1 : 0 }}
        transition={{
          ease: "linear",
          duration: showing ? INTERVAL_TIME / 1000 : 0.5,
        }}
        style={{ transformOrigin: showing ? "left" : "right" }}
        className={"h-0.5 rounded-full w-full bg-gold relative z-1 "}
      ></m.div>

      <div
        className={
          "h-0.5 rounded-full w-full bg-light-black/25 absolute top-0 left-0 right-0 z-0 "
        }
      />

      <p className="text-18">
        <span>{title}</span>
        <br className="max-lg:hidden" />
        <span className="opacity-70"> {text}</span>
      </p>
    </div>
  );
}
