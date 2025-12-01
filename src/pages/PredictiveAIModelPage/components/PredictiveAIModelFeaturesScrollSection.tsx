import { motion as m, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function PredictiveAIModelFeaturesScrollSection({
  content,
}: {
  content: {
    title: string;
    text: string;
    img: { src: string; alt: string };
  }[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [visible, setVisible] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setVisible((_) => {
      if (val < 0.25) return 0;
      else if (val < 0.75) return 1;
      else return 2;
    })
  );

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding lg:h-[200dvh] "
    >
      <div className="max-lg:hidden sticky top-0 h-dvh flex items-center">
        <div className="grid grid-cols-8 gap-6 xl:gap-8 2xl:gap-10">
          <div className="bg-blueish-gray/15 lg-rounded flex flex-col justify-evenly 2xl:col-span-3 xl:col-span-4 col-span-5 px-10 py-8 overflow-y-scroll hide-scrollbar gap-y-8  max-h-[90dvh] min-h-[80dvh]">
            {content.map((f, i) => (
              <m.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: visible === i ? 1 : 0.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={i}
                className="space-y-2"
              >
                <p className="text-32">{f.title}</p>
                <p className="text-18 font-light">{f.text}</p>
              </m.div>
            ))}
          </div>

          <div className="relative 2xl:col-span-5 xl:col-span-4 col-span-3 h-full lg-rounded overflow-hidden">
            {content.map((f, i) => (
              <m.img
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                animate={{
                  clipPath:
                    visible === i
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : visible < i
                        ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
                key={i}
                alt={f.img.alt}
                src={f.img.src}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden space-y-20">
        {content.map((f, i) => (
          <div key={i} className={"space-y-6 "}>
            <div className={"space-y-2 max-w-[600px] text-center " }>
              <p className="text-32">{f.title}</p>
              <p className="text-20 font-light">{f.text}</p>
            </div>
            <img src={f.img.src} alt={f.img.alt} className="lg-rounded aspect-5/3 object-cover w-full max-w-[400px] mx-auto " />
          </div>
        ))}
      </div>
    </section>
  );
}
