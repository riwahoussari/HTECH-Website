import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { useRef, type ReactNode } from "react";

export default function CallToAction({ children }: { children?: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  return (
    <section ref={sectionRef} className=" relative bg-gold">
      {/* bg */}
      <img
        src="/assets/textured-bg.png"
        alt="Textured background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
      />

      <div className="my-container side-padding py-20 lg:p-26 2xl:p-32 relative flex max-xl:flex-col max-xl:items-center justify-between gap-6 md:gap-10 xl:gap-20 ">
        {/* text */}
        <SlideUpAnim isInView={isInView} className="">
          <p className="text-64 max-xl:text-center">Ready to put AI to work?</p>
          {children}
        </SlideUpAnim>

        {/* form */}
        <form
          id="cta-form"
          className="lg-rounded max-w-[600px] w-full xl:w-1/2 xl:max-w-[800px] bg-white/20 border border-light-black px-8 py-14 flex flex-col  items-center gap-14 justify-center"
        >
          <p className="text-32 text-center">Request a custom demo</p>

          <div className="flex flex-col gap-8 text-18 max-w-[600px] w-full">
            {/* full name */}
            <div className="row">
              <input
                type="text"
                name="first_name"
                placeholder="First name*"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name*"
                required
              />
            </div>
            {/* email */}
            <div className="row">
              <input
                type="email"
                name="work_email"
                placeholder="Work email*"
                required
              />
            </div>
            {/* phone - company */}
            <div className="row">
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone number (optional)"
              />
              <input
                type="text"
                name="company_name"
                placeholder="Company name*"
                required
              />
            </div>
            {/* job - country */}
            <div className="row">
              <input
                type="text"
                name="job_title"
                placeholder="Job title*"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country*"
                required
              />
            </div>
            {/* how can we help */}
            <div className="row">
              <textarea
                name="how_can_we_help"
                placeholder="How can our team help you?"
                required
              />
            </div>
            {/* submit */}
            <div className="flex justify-end">
              <Button type="submit" size={"md"} arrow={"normal"}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
