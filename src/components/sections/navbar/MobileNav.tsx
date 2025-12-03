import { motion as m, AnimatePresence, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { CompanyFlyoutContent, GovernmentFlyoutContent, InitiativesFlyoutContent, ProductsFlyoutContent, ResourcesFlyoutContent, SolutionsFlyoutContent } from "./FlyoutLink";
import ArrowSvg from "../../ui/ArrowSvg";

// MOBILE NAVBAR
export default function MobileNavMenu({
  isOpen,
  ref,
}: {
  isOpen: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);

  // stop scrolling when mobile menu is opened
  useEffect(() => {
    if (isOpen) {
      // Save scroll position so it doesn’t jump when unlocked
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <m.div
          ref={ref} // Attach the ref to track clicks outside
          variants={menuSlide as Variants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute top-[80px] right-[20px] md:right-[40px] max-xs:left-[20px] xs:w-[400px] z-99 max-h-[90dvh] overflow-y-scroll overflow-x-hidden bg-white p-6 text-light-black stroke-1 stroke-blueish-gray/15 rounded-[20px] shadow-lg xl:hidden"
        >
          <nav className="divide-y-1 divide-light-black">
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
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function AccordionItem({title, content, onOpen, onClose, open}: {title: string, content: ReactNode, open: boolean, onOpen: () => void, onClose: () => void}) {
  return <div className="space-y-6 py-4">
    <div className="flex justify-between items-center cursor-pointer " onClick={() => {
      if (open) {onClose()}
      else {onOpen()}
    }}>
      <div className="gap-3 flex items-center">
        
      {true && <div className={" aspect-square rounded-full duration-150 ease-in-out bg-gold " + (open ? "w-3" : 'w-0')}/>}
      <p className="text-[24px]">{title}</p>
      </div>
      <div className="w-5 h-5" ><ArrowSvg className={"duration-150 ease-in-out " + (open ? "rotate-90" : "")} /></div>
    </div>

  {open && content}
  </div>
}

// Motion animation variants for the menu slide-in effect
const menuSlide = {
  initial: { x: "120%" }, // Start off-screen to the right
  enter: { x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "120%", transition: { duration: 0.5, ease: "easeInOut" } },
};

