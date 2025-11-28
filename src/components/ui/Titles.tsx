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
    <h2
      className={
        (big
          ? "text-[42px] leading-[44px] xs:text-[69px] xs:leading-[76px]"
          : "text-[32px] leading-[39px] xs:text-[40px] xs:leading-[47px]") +
        " " +
        className
      }
    >
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
    <p className={"font-ibm! text-[11px] xs:text-[12px]" + " " + className}>
      {children}
    </p>
  );
}

export function TitleBlock({
  title,
  subtitle,
  button,
}: {
  title: string;
  subtitle?: string;
  button?: ReactNode;
}) {
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleBlockRef, { once: true, margin: "-5%" });
  return (
    <div ref={titleBlockRef} className="items-start justify-between sm:flex">
      <div className="space-y-2 max-sm:mb-6">
        {subtitle && (
          <SectionSubTitle>
            <AnimatedText isInView={isInView}>{subtitle}</AnimatedText>
          </SectionSubTitle>
        )}
        <SectionTitle>
          <AnimatedText isInView={isInView}>{title}</AnimatedText>
        </SectionTitle>
      </div>
      <SlideUpAnim transition={{ delay: 0.4 }} isInView={isInView}>
        {button}
      </SlideUpAnim>
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
