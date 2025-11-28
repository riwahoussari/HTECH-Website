import { Link, Outlet } from "react-router-dom";
import ArrowSvg from "../ui/ArrowSvg";
import GradientCircle from "../ui/GradientCircle";
import { LINKS } from "../../lib/data";

export default function Footer() {
  return (
    <>
      <div className="relative z-1">
        <Outlet />
      </div>
      <footer className="relative z-0 pt-[220px] pb-[20px] text-white">
        {/* bg */}
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1100px] right-0 -bottom-1/2 left-0 z-0 overflow-x-clip">
            <div className="h-full w-[140vw]! -translate-x-[20vw] bg-black blur-[max(4vw,40px)]"></div>
          </div>
        </div>
        <div className="absolute -top-[1000px] right-0 bottom-0 left-0 overflow-clip">
          <div className="absolute top-[1200px] right-0 w-[635px] translate-x-1/4 lg:w-[50vw] lg:min-w-[690px]">
            <GradientCircle className="blur-[max(12vw,120px)]!" />
          </div>
        </div>

        {/* content */}
        <div className="my-container side-padding relative flex gap-22 max-md:flex-col">
          {/* newsletter */}
          <div className="max-w-[380px]">
            <p className="text-[28px] leading-[31px]">AI waits for no one.</p>
            <p className="text-[20px] leading-[31px]">
              We’ll keep you up to date with the latest.
            </p>
            <p className="mt-[20px] text-[14px] leading-[22px] text-light-gray">
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
              <div className="bg-dark-green-blue-gradient absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
            </form>
          </div>

          {/* links */}
          <div className="flex gap-20 max-md:flex-wrap lg:mx-auto xl:gap-32">
            {/* col 1 */}
            <div className="w-[72px]">
              <p className="mb-6 font-ibm! text-[13px] text-light-blue">
                PRODUCTS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Products")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
              <p className="mt-20 mb-6 font-ibm! text-[13px] text-light-blue lg:hidden">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px] lg:hidden">
                {LINKS.find((l) => l.name == "Company")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
            {/* col 2 */}
            <div className="w-[182px]">
              <p className="mb-6 font-ibm! text-[13px] text-light-blue">
                SOLUTIONS
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Solutions")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
                <Link
                  className="inline-block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                  to="/industries"
                >
                  <p>View All</p>
                </Link>
              </div>
            </div>
            {/* col 3 */}
            <div className="w-[72px] max-lg:hidden">
              <p className="mb-6 font-ibm! text-[13px] text-light-blue">
                COMPANY
              </p>
              <div className="space-y-[20px] text-[14px] leading-[21px]">
                {LINKS.find((l) => l.name == "Company")?.sublinks?.map(
                  (link, i) => (
                    <Link
                      className="block cursor-pointer duration-200 ease-in-out hover:opacity-60"
                      key={i}
                      to={link.link}
                    >
                      <p>{link.name}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="side-padding my-container relative flex items-center gap-5 pt-12 max-md:flex-col md:justify-between">
          {/* logo */}
          <img
            className="w-full max-w-[450px]"
            src="/logos/gaiant-logo-gradient.svg"
            alt="Gaiant Logo"
          />
          <p className="text-center text-[11px] leading-[31px] whitespace-pre md:text-end">
            {"Gaiant © 2025       |       Powered by ®"}
            <a
              href="https://weareelites.com/"
              className="not-hover:underline"
              target="_blank"
            >
              Elites
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
