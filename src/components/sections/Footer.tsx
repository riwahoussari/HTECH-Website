import { Link, Outlet } from "react-router-dom";
import ArrowSvg from "../ui/ArrowSvg";
import { GENERAL_DATA } from "../../lib/data";
import HtechLogoSvg from "../ui/HtechLogoSvg";
import {
  CompanyFlyoutContent,
  GovernmentFlyoutContent,
  InitiativesFlyoutContent,
  ProductsFlyoutContent,
  ResourcesFlyoutContent,
  SolutionsFlyoutContent,
} from "./navbar/FlyoutLink";
import { useState, type ReactNode } from "react";

export default function Footer() {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  return (
    <>
      <div className="relative z-1">
        <Outlet />
      </div>
      <footer className=" pt-20 pb-10 bg-light-black text-white space-y-20">
        {/* content */}
        <div className="my-container side-padding flex justify-between gap-20 md:gap-40 max-lg:flex-col">
          {/* newsletter */}
          <div className="max-w-[380px]">
            <p className="text-18">
              <span className="text-gold">AI moves fast</span>
              <br />
              We’ll keep you up to date with the latest.
            </p>
            <p className="mt-3 sm:mt-5 text-14  opacity-60">
              Enter your business email below to receive updates from Gaiant.
              Please refer to our{" "}
              <span className="underline">privacy policy</span> for details or
              to contact us. You can unsubscribe at any time.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Email Received!");
              }}
              className="relative mt-[25px] flex items-center justify-between pb-3"
            >
              <input
                placeholder="Email Address"
                className="w-full text-[18px] outline-none"
              />
              <button
                aria-label="Submit"
                className="cursor-pointer hover:opacity-60"
                type="submit"
              >
                <span className="hidden">Submit</span>
                <ArrowSvg color="white" className="w-[18px]" />
              </button>
              <div className="bg-blueish-gray-gold-gradient absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
            </form>
          </div>

          {/* desktop links */}
          <div className="flex gap-20 flex-wrap max-md:hidden">
            {/* col 1 */}
            <div className="w-40 space-y-8">
              <p className="text-18">Products</p>
              <div className="flex flex-col gap-5 text-14">
                {/* Predictive AI */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-60">Predictive AI models</p>
                  <Link to={"/products/predictive-ai-models/for-enterprise"}>
                    For enterprise
                  </Link>
                  <Link
                    to={"/products/predictive-ai-models/for-vcs-and-investors"}
                  >
                    For VCs & investors
                  </Link>
                </div>
                {/* Generative AI */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-60">Generative AI</p>
                  <Link to={"/products/generative-ai/horion-for-sales"}>
                    Horion for sales
                  </Link>
                  <Link to={"/products/generative-ai/horion-for-hr"}>
                    Horion for HR
                  </Link>
                </div>
                {/* Agentic AI */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-60">Agentic AI</p>
                  <Link to={"/products/agentic-ai/ai-agents-for-enterprise"}>
                    AI agents for enterprise
                  </Link>
                </div>
                {/* AI for Retailers */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-60">AI for retailers</p>
                  <Link to={"/products/ai-for-retailers/awfarli-ai"}>
                    Awfarli AI
                  </Link>
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className="w-40 space-y-8">
              <p className="text-18">Solutions</p>
              <div className="flex flex-col gap-5 text-14">
                {GENERAL_DATA.INDUSTRIES.map((industry, i) => (
                  <Link key={i} to={`/solutions/${industry.name}`}>
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* col 3 */}
            <div className="w-40 space-y-8">
              <p className="text-18">Resources</p>
              <div className="flex flex-col gap-5 text-14">
                <p className="opacity-60">Case studies</p>
                {GENERAL_DATA.CASE_STUDIES.map((caseStudy, i) => (
                  <Link key={i} to={`/case-studies/${caseStudy.name}`}>
                    {caseStudy.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* col 4 */}
            <div className="w-40 space-y-8">
              <p className="text-18">Company</p>
              <div className="flex flex-col gap-5 text-14">
                {/* <Link to="/about">About</Link> */}
                <Link to="/careers">Careers</Link>
                <Link to="/news">News</Link>
                <Link to="/partners">Partners</Link>
              </div>
            </div>

            {/* cols 5-6 */}
            <div className="space-y-20 max-2xl:flex flex-wrap gap-20">
              {/* col 5 */}
              <div className="w-40 space-y-8">
                <p className="text-18">Initiatives</p>
                <div className="flex flex-col gap-5 text-14">
                  <a href="https://codeforlebanon.com" target="_blank">
                    Code For Lebanon
                  </a>
                </div>
              </div>

              {/* col 6 */}
              <div className="w-40 space-y-8">
                <p className="text-18">Government</p>
                <div className="flex flex-col gap-5 text-14">
                  <Link to="/government/public-sector">Public Sector</Link>
                </div>
              </div>
            </div>
          </div>

          {/* accordion - mobile links */}
          <div className="divide-y md:hidden divide-white/50">
            <AccordionItem
              onOpen={() => setSelectedAccordion(1)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 1}
              title="Products"
              content={<ProductsFlyoutContent />}
            />
            <AccordionItem
              onOpen={() => setSelectedAccordion(2)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 2}
              title="Solutions"
              content={<SolutionsFlyoutContent />}
            />
            <AccordionItem
              onOpen={() => setSelectedAccordion(3)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 3}
              title="Company"
              content={<CompanyFlyoutContent />}
            />
            <AccordionItem
              onOpen={() => setSelectedAccordion(4)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 4}
              title="Resources"
              content={<ResourcesFlyoutContent />}
            />
            <AccordionItem
              onOpen={() => setSelectedAccordion(5)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 5}
              title="Initiatives"
              content={<InitiativesFlyoutContent />}
            />
            <AccordionItem
              onOpen={() => setSelectedAccordion(6)}
              onClose={() => setSelectedAccordion(0)}
              open={selectedAccordion === 6}
              title="Government"
              content={<GovernmentFlyoutContent />}
            />
          </div>
        </div>

        {/* social links */}

        {/* copyright */}
        <div className="my-container side-padding flex items-end gap-5 justify-between">
          {/* logo */}
          <HtechLogoSvg color="white" className="w-24" />

          <div>
            <div className="justify-end flex gap-8 mb-10">
              <a
                className="hover:opacity-70 duration-150 ease-in-out"
                href="mailto:info@htechco.com"
                target="_blank"
              >
                <img
                  className="w-8 lg:w-10"
                  src="/assets/logos/socials/mail.svg"
                  alt="Email icon"
                />
              </a>
              <a
                className="hover:opacity-70 duration-150 ease-in-out"
                href="https://www.instagram.com/htech.sarl/"
                target="_blank"
              >
                <img
                  className="w-8 lg:w-10"
                  src="/assets/logos/socials/insta.svg"
                  alt="Instagram icon"
                />
              </a>
              <a
                className="hover:opacity-70 duration-150 ease-in-out"
                href="https://www.linkedin.com/company/htechco/"
                target="_blank"
              >
                <img
                  className="w-8 lg:w-10"
                  src="/assets/logos/socials/linkedin.svg"
                  alt="Linkedin icon"
                />
              </a>
            </div>
            <p
              style={{ letterSpacing: "1px" }}
              className=" text-end font-light text-14"
            >
              HTECH © 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function AccordionItem({
  title,
  content,
  onOpen,
  onClose,
  open,
}: {
  title: string;
  content: ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="space-y-6 py-4  ">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => {
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        <div className="gap-3 flex items-center">
          {true && (
            <div
              className={
                " aspect-square rounded-full duration-150 ease-in-out bg-gold " +
                (open ? "w-3" : "w-0")
              }
            />
          )}
          <p className="text-[24px]">{title}</p>
        </div>
        <div className="w-5 h-5">
          <ArrowSvg
            color="white"
            className={"duration-150 ease-in-out " + (open ? "rotate-90" : "")}
          />
        </div>
      </div>

      {open && <div className="max-w-[400px]">{content}</div>}
    </div>
  );
}
