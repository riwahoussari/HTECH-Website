import { useInView } from "motion/react";
import { useRef } from "react";
import {
  AnimatedText,
  SlideUpAnim,
  SlideUpSelf,
} from "../../../components/ui/Anims";
import GradientCircle from "../../../components/ui/GradientCircle";
import Button from "../../../components/ui/Button";
import { GENERAL_DATA } from "../../../lib/data";
import { ArticleCard } from "../../../components/ui/Cards";

export default function ArticlesSection({
  withBall = false,
  className,
  navbarTriggerRef,
  fetchPriority,
}: {
  withBall?: boolean;
  className?: string;
  navbarTriggerRef?: React.RefObject<HTMLDivElement | null>;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={navbarTriggerRef}
      className={
        "side-padding my-container relative mt-[120px] overflow-x-clip " +
        (className || "")
      }
    >
      {/* main article */}
      <div className="relative" ref={sectionRef}>
        <p className="mb-10 font-ibm! text-[16px] xs:text-[18px]">
          <AnimatedText isInView={isInView}>THE GAIANT BLOG</AnimatedText>
        </p>
        <div
          className={
            "flex flex-col gap-[40px] lg:flex-row lg:gap-[30px] xl:gap-[50px] 2xl:gap-[70px]"
          }
        >
          {/* img */}
          <div
            className={
              "relative aspect-2/1! max-w-[700px] lg:w-55/100 xl:max-w-[800px] 2xl:w-1/2"
            }
          >
            <SlideUpAnim
              className="aspect-2/1! h-full w-full object-contain"
              isInView={isInView}
              transition={{ delay: 0.2 }}
            >
              <img
                fetchPriority={fetchPriority}
                src="/images/people-walking.webp"
                alt="two people walking together in a hallway"
                className="h-full w-full object-cover"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
                }}
              />
            </SlideUpAnim>

            {withBall && (
              <SlideUpAnim
                isInView={isInView}
                className="absolute w-1/3 -translate-x-1/4 translate-y-1/2 max-lg:bottom-0 max-lg:left-0 max-lg:opacity-90 lg:top-0 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/3"
              >
                <GradientCircle
                  className="blur-[max(2.5vw,25px)]!"
                  colorr={"teal"}
                />
              </SlideUpAnim>
            )}
          </div>

          {/* text */}
          <SlideUpAnim
            className="relative z-2 max-w-[550px] space-y-2 lg:w-45/100"
            isInView={isInView}
            transition={{ delay: 0.4 }}
          >
            <p className="font-ibm! text-[14px] leading-[30px] xs:text-[15px] xs:leading-[34px]">
              GAIANT TEAM - SEP 19, 2025
            </p>
            <p
              className={
                "text-[28px] leading-[33px] xs:text-[34px] xs:leading-[39px]"
              }
            >
              Why Language is the Next Frontier of Business Intelligence
            </p>
            <div className="mt-5 xs:mt-[30px] xl:mt-[44px]">
              <Button
                arrow={"normal"}
                className="gap-4! bg-transparent! pl-0! backdrop-blur-[0px]!"
                variant={"secondary"}
              >
                READ FULL ARTICLE
              </Button>
            </div>
          </SlideUpAnim>
        </div>
      </div>

      {/* other articles */}
      <div className="mt-11 grid grid-cols-1 gap-5 gap-y-10! xs:gap-8 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {GENERAL_DATA.ARTICLES.slice(0, 3).map((article, i) => (
          <div>
            <SlideUpSelf className="w-full max-w-[550px] lg:max-w-none">
              <ArticleCard
                className="w-full"
                fetchPriority={fetchPriority}
                key={i}
                {...article}
              />
            </SlideUpSelf>
          </div>
        ))}
      </div>
    </section>
  );
}
