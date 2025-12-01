import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as m,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Button from "../../ui/Button";
import FlyoutLink, {
  ProductsFlyoutContent,
  SolutionsFlyoutContent,
  CompanyFlyoutContent,
  ResourcesFlyoutContent,
  InitiativesFlyoutContent,
  GovernmentFlyoutContent,
} from "./FlyoutLink";
import BurgerMenuSvg from "./BurgerMenuSvg";
import MobileNavMenu from "./MobileNav";
import HtechLogoSvg from "../../ui/HtechLogoSvg";

export default function Navbar({
  transparentBg = false,
}: {
  transparentBg?: boolean;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  const [hideNavOnScroll, setHideNavOnScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const { scrollY } = useScroll();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLDivElement>(null);

  // Triggers on mount slide down animation for navbar
  useEffect(() => setHasMounted(true), []);

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    setHideNavOnScroll(latest > prev && latest > 50);
  });

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !burgerBtnRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <m.header
        initial={{ y: "-100%" }}
        animate={{
          y: hideNavOnScroll && !mobileMenuOpen && !hovering ? "-100%" : "0%",
        }}
        style={{
          backgroundColor:
            transparentBg && !mobileMenuOpen ? "transparent" : "white",
        }}
        transition={{
          ease: "easeInOut",
          duration: hasMounted ? 0.3 : 0.7,
          delay: hasMounted ? 0 : 0.3,
        }}
        className="fixed top-0 right-0 left-0 z-100 duration-500 ease-in-out text-light-black"
      >
        {/* Navbar Content */}
        <div className="my-container side-padding relative z-100 flex items-center justify-between py-3">
          {/* logo */}
          <Link to="/" aria-label="homepage">
            <span className="hidden">Homepage</span>
            <div className="w-24 translate-y-1 xs:w-32 lg:min-w-[160px]">
              <HtechLogoSvg
                color={"var(--color-light-black)"}
                className="duration-500 ease-in-out w-16 xs:w-20"
              />
            </div>
          </Link>

          {/* Flyout Links (large screens) */}
          <div className="hidden relative items-center justify-between gap-16 xl:flex">
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<ProductsFlyoutContent />}
            >
              <p className="min-w-16 text-start text-sm">Products</p>
            </FlyoutLink>
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<SolutionsFlyoutContent />}
            >
              <p className="min-w-20 text-center text-sm">Solutions</p>
            </FlyoutLink>
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<ResourcesFlyoutContent />}
            >
              <p className="min-w-20 text-end text-sm">Resources</p>
            </FlyoutLink>
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<CompanyFlyoutContent />}
            >
              <p className="min-w-20 text-end text-sm">Company</p>
            </FlyoutLink>
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<InitiativesFlyoutContent />}
              to="/initiatives/code-for-lebanon"
            >
              <p className="min-w-20 text-end text-sm">Initiatives</p>
            </FlyoutLink>
            <FlyoutLink
              setHovering={setHovering}
              FlyoutContent={<GovernmentFlyoutContent />}
              to="/government/public-sector"
            >
              <p className="min-w-20 text-end text-sm">Government</p>
            </FlyoutLink>
          </div>

          {/* CTA - Mobile Menu Trigger Btn */}
          <div className="relative z-1 flex items-center justify-end gap-5 xl:min-w-[160px]">
            <Button size={"sm"} variant={"fill"}>
              Book a demo
            </Button>

            <div
              ref={burgerBtnRef}
              className="w-7 xl:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <BurgerMenuSvg isOpen={mobileMenuOpen} />
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <MobileNavMenu
          ref={mobileMenuRef}
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />
      </m.header>

      {/* blurred overlay */}
      <AnimatePresence>
        {(hovering || mobileMenuOpen) && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-98 backdrop-blur-xl"
          />
        )}
      </AnimatePresence>
    </>
  );
}
