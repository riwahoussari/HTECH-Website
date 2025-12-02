import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { AnimatedText, SlideUpAnim } from "./Anims";

export function SectionTitle({
  children,
  className,
  big = false,
}: {
  children: ReactNode;
  className?: string;
  big?: boolean;
}) {
  return (
    <h2 className={(big ? " text-64 " : " text-40 ") + " " + className}>
      {children}
    </h2>
  );
}
export function SectionSubTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={"font-light text-body text-gold" + " " + className}>
      {children}
    </p>
  );
}

export function TitleBlock({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle?: string;
  text?: string;
}) {
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleBlockRef, { once: true, margin: "-5%" });
  return (
    <div className="space-y-2" ref={titleBlockRef}>
      {subtitle && (
        <SectionSubTitle>
          <AnimatedText isInView={isInView}>{subtitle}</AnimatedText>
        </SectionSubTitle>
      )}

      <div className="items-start justify-start lg:flex mb-10 lg:mb-14">
        <div className="space-y-2 max-lg:mb-6 max-sm:mb-4 lg:w-1/2 pr-10">
          <SectionTitle>
            <AnimatedText isInView={isInView}>{title}</AnimatedText>
          </SectionTitle>
        </div>

        {text && (
          <div className="lg:w-1/2">
            <p className=" text-20 leading-[1.25]! max-w-[600px]">
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function CenteredTitleBlock({
  title,
  text,
  big = false,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  text?: string;
  big?: boolean;
  className?: string;
}) {
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleBlockRef, { once: true, margin: "-10%" });
  return (
    <div ref={titleBlockRef} className={"text-center " + (className || "")}>
      {subtitle && (
        <SlideUpAnim isInView={isInView} transition={{ duration: 0.6 }}>
          <SectionSubTitle className="mb-5">{subtitle}</SectionSubTitle>
        </SlideUpAnim>
      )}
      <SlideUpAnim isInView={isInView} transition={{ duration: 0.6 }}>
        <SectionTitle big={big}>{title}</SectionTitle>
      </SlideUpAnim>
      {text && (
        <SlideUpAnim isInView={isInView} transition={{ duration: 0.6 }}>
          <p className="text-16 mt-3">{text}</p>
        </SlideUpAnim>
      )}
    </div>
  );
}
