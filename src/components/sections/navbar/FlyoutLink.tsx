import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import ArrowSvg from "../../ui/ArrowSvg";
import { GENERAL_DATA } from "../../../lib/data";
import TexturedBg from "../../ui/TexturedBg";

export default function FlyoutLink({
  children,
  to,
  FlyoutContent,
  setHovering,
}: {
  children: ReactNode;
  to?: string;
  FlyoutContent: ReactNode;
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setHovering(false);
      }}
      className="group"
    >
      {/* Link */}
      <div>
        {/* link text */}
        {to ? (
          <Link className="relative z-1" to={to}>
            {children}
          </Link>
        ) : (
          <div className="relative z-1">{children}</div>
        )}

        {/* bridge to maintain hover */}
        {open && (
          <div className="absolute top-0 -right-[50px] -bottom-[400%] -left-[50px] z-0 opacity-0"></div>
        )}
      </div>

      {/* Flyout Card/Content */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
            className="absolute top-[60px] right-1/2 z-1 w-max translate-x-1/2 rounded-[20px] bg-white border-1 border-blueish-gray/15 p-5"
          >
            {FlyoutContent}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductsFlyoutContent() {
  return (
    <div className="grid xl:grid-cols-4 gap-4 xl:gap-8 pb-2 xl:max-w-[90dvw]">
      {/* Predictive AI Models*/}
      <div className="flex flex-col gap-4 xl:min-w-[260px] w-full xl:max-w-[310px]">
        <div className="rounded-[10px] overflow-hidden relative aspect-3/1 w-full min-h-[100px]">
          <TexturedBg color="var(--color-gold)" />
        </div>

        <div className="flex flex-col gap-2 xl:gap-5">
          <div className="ps-3">
            <FTitle text="PREDICTIVE AI MODELS" />
          </div>

          <PLink
            color="var(--color-gold)"
            title="For Enterprise"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/predictive-ai-models/for-enterprise"
          />
          <PLink
            color="var(--color-gold)"
            title="For VCs & Investors"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/predictive-ai-models/for-vcs-and-investors"
          />
        </div>
      </div>

      {/* Generative AI */}
      <div className="flex flex-col gap-4 xl:min-w-[260px] w-full xl:max-w-[310px]">
        <div className="rounded-[10px] overflow-hidden relative aspect-3/1 w-full min-h-[100px]">
          <TexturedBg color="#009DFF" />
        </div>

        <div className="flex flex-col gap-2 xl:gap-5">
          <div className="ps-3">
            <FTitle text="GENERATIVE AI" />
          </div>

          <PLink
            color="#009DFF"
            title="Horion For Sales"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/generative-ai/horion-for-sales"
          />
          <PLink
            color="#009DFF"
            title="Horion For HR"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/generative-ai/horion-for-hr"
          />
        </div>
      </div>

      {/* Agentic AI */}
      <div className="flex flex-col gap-4 xl:min-w-[260px] w-full xl:max-w-[310px]">
        <div className="rounded-[10px] overflow-hidden relative aspect-3/1 w-full min-h-[100px]">
          <TexturedBg color="#ff0000" />
        </div>

        <div className="flex flex-col gap-2 xl:gap-5">
          <div className="ps-3">
            <FTitle text="AGENTIC AI" />
          </div>

          <PLink
            color="#ff0000"
            title="AI Agents For Enterprise"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/agentic-ai/ai-agents-for-enterprise"
          />
        </div>
      </div>

      {/* AI for Retailers */}
      <div className="flex flex-col gap-4 xl:min-w-[260px] w-full xl:max-w-[310px]">
        <div className="rounded-[10px] overflow-hidden relative aspect-3/1 w-full min-h-[100px]">
          <TexturedBg color="#4000FF" />
        </div>

        <div className="flex flex-col gap-2 xl:gap-5">
          <div className="ps-3">
            <FTitle text="AI FOR RETAILERS" />
          </div>

          <PLink
            color="#4000FF"
            title="Awfarli AI"
            text="An enterprise-ready AI platform that powers modern workplace productivity"
            link="/products/ai-for-retailers/awfarli-ai"
          />
        </div>
      </div>
    </div>
  );
}

export function SolutionsFlyoutContent() {
  return (
    <div className="grid xl:grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <FTitle text="INDUSTRIES" />
        <div className="flex flex-col">
          {GENERAL_DATA.INDUSTRIES.map((industry, i) => (
            <FLink key={i} text={industry.name} link={`/industries/${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="relative max-xl:hidden rounded-[10px] overflow-clip aspect-square w-full">
        <TexturedBg />
      </div>
    </div>
  );
}

export function CompanyFlyoutContent() {
  return (
    <div className="flex xl:min-w-[320px] flex-col gap-4">
      <FTitle text="COMPANY" />
      <div className="flex flex-col ">
        <FLink link="/about" text="About" />
        <FLink link="/careers" text="Careers" />
        <FLink link="/news" text="News" />
        <FLink link="/partners" text="Partners" />
      </div>
    </div>
  );
}

export function ResourcesFlyoutContent() {
  return (
    <div className="flex xl:min-w-[320px] flex-col gap-5 ">
      <FTitle text="CASE STUDIES" />
      <div className="flex flex-col">
        {GENERAL_DATA.CASE_STUDIES.map((caseStudy, i) => (
          <FLink
            key={i}
            text={caseStudy.name}
            link={`/case-studies/${caseStudy.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export function InitiativesFlyoutContent() {
  return (
    <div className="flex xl:w-[480px] flex-col gap-5 ">
      {/* <FTitle text="INITIATIVES" /> */}
      <Link className="group/link" to="/initiatives/code-for-lebanon">
        <div className="min-w-full rounded-[10px] overflow-hidden relative aspect-square px-4 py-6 xl:p-9 flex justify-end flex-col gap-2">
          <TexturedBg
            color="var(--color-gold)"
            className="group-hover/link:scale-110 ease-in-out duration-300"
          />

          <div className="flex gap-6 xl:gap-8 items-center relative">
            <p className="text-[26px] xl:text-[32px] max-xl:leading-[1.1]">
              Code For Lebanon
            </p>
            <div className="xl:w-8 w-6 aspect-square group-hover/link:translate-x-3 ease-in-out delay-50 duration-150">
              <ArrowSvg className="-rotate-45 group-hover/link:rotate-0 duration-100 ease-in-out" />
            </div>
          </div>

          <p className="relative text-base max-w-[340px] leading-[1.25]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            minima.
          </p>
        </div>
      </Link>
    </div>
  );
}

export function GovernmentFlyoutContent() {
  return (
    <div className="flex xl:w-[480px] flex-col gap-5 ">
      {/* <FTitle text="GOVERNMENT" /> */}
      <Link className="group/link" to="/government/public-sector">
        <div className="min-w-full rounded-[10px] overflow-hidden relative aspect-square px-4 py-6 xl:p-9 flex justify-end flex-col gap-2">
          <TexturedBg
            color="var(--color-gold)"
            className="group-hover/link:scale-110 ease-in-out duration-300"
          />

          <div className="flex gap-6 xl:gap-8 items-center relative">
            <p className="text-[26px] xl:text-[32px] max-xl:leading-[1.1]">
              Public Sector
            </p>
            <div className="xl:w-8 w-6 aspect-square group-hover/link:translate-x-3 ease-in-out delay-50 duration-150">
              <ArrowSvg className="-rotate-45 group-hover/link:rotate-0 duration-100 ease-in-out" />
            </div>
          </div>

          <p className="relative text-base max-w-[340px] leading-[1.25]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            minima.
          </p>
        </div>
      </Link>
    </div>
  );
}

function FTitle({ text }: { text: string }) {
  return (
    <p
      style={{ letterSpacing: "1px" }}
      className="ps-2 text-[12px] xl:text-[14px] uppercase text-blueish-gray"
    >
      {text}
    </p>
  );
}

function FLink({ link, text }: { link: string; text: string }) {
  return (
    <Link className="cursor-point group/link" to={link}>
      <p className="w-full rounded-sm bg-white/0 p-3 duration-150 ease-in-out group-hover/link:bg-blue-500/15 text-[18px] max-xl:leading-[1] xl:text-xl">
        {text}
      </p>
    </Link>
  );
}

function PLink({
  color,
  title,
  text,
  link,
}: {
  color: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <Link to={link}>
      <div className="flex flex-col px-3 py-3 gap-1 xl:gap-2 hover:bg-blueish-gray/15 ease-in-out duration-150 rounded-md overflow-hidden">
        <div className="flex gap-2 items-center">
          <div
            className="aspect-square rounded-full w-2"
            style={{ backgroundColor: color }}
          />
          <p className="text-[20px]">{title}</p>
        </div>
        <p className="text-[14px]">{text}</p>
      </div>
    </Link>
  );
}
