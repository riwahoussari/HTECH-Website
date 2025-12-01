import { Link, Outlet } from "react-router-dom";
import ArrowSvg from "../ui/ArrowSvg";
import { GENERAL_DATA, LINKS } from "../../lib/data";
import HtechLogoSvg from "../ui/HtechLogoSvg";

export default function Footer() {
  return (
    <>
      <div className="relative z-1">
        <Outlet />
      </div>
      <footer className=" pt-20 pb-10 bg-light-black text-white space-y-20">
        {/* content */}
        <div className="my-container side-padding flex gap-22 flex-col">
          {/* newsletter */}
          <div className="max-w-[380px]">
            <p className="text-20">
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

          {/* links */}
          <div className="flex gap-20 flex-wrap xl:gap-24">
            {/* col 1 */}
            <div className="w-[180px] space-y-8">
              <p className="text-20">Products</p>
              <div className="flex flex-col gap-5 text-14">
                {/* Predictive AI */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-60">Predictive AI models</p>
                  <Link to={"/products/predictive-ai-models/for-enterprises"}>
                    For enterprises
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
                  <Link to={"/products/agentic-ai/ai-agents-for-enterprises"}>
                    AI agents for enterprises
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
            <div className="w-[180px] space-y-8">
              <p className="text-20">Solutions</p>
              <div className="flex flex-col gap-5 text-14">
                {GENERAL_DATA.INDUSTRIES.map((industry, i) => (
                  <Link key={i} to={`/industries/${i + 1}`}>
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* col 3 */}
            <div className="w-[180px] space-y-8">
              <p className="text-20">Resources</p>
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
            <div className="w-[180px] space-y-8">
              <p className="text-20">Company</p>
              <div className="flex flex-col gap-5 text-14">
                <Link to="/about">About</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/news">News</Link>
                <Link to="/partners">Partners</Link>
              </div>
            </div>
            {/* col 5-6 */}
            <div className="w-[180px] space-y-8">
              <p className="text-20">Initiatives</p>
              <div className="flex flex-col gap-5 text-14">
                <Link to="/initiatives/Code For Lebanon">Code For Lebanon</Link>
              </div>
            </div>

            <div className="w-[180px] space-y-8">
              <p className="text-20">Government</p>
              <div className="flex flex-col gap-5 text-14">
                <Link to="/initiatives/Code For Lebanon">Public Sector</Link>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="my-container side-padding flex items-center gap-5 justify-between">
          {/* logo */}
          <HtechLogoSvg color="white" className="w-24" />
          <p
            style={{ letterSpacing: "1px" }}
            className="text-center font-light text-14"
          >
            HTECH © 2025
          </p>
        </div>
      </footer>
    </>
  );
}
