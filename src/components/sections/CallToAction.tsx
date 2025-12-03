import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { useRef, type ReactNode } from "react";
import { ICONS } from "../../lib/data";

const loremList = [
  {
    icon: ICONS.GRAPH,
    text: "Deliver high-quality results with advanced retrieval, reasoning, and self-validation techniques.",
  },
  {
    icon: ICONS.LOADING,
    text: "Accelerate time to deployment by automatically creating unique plans to solve each task.",
  },
  {
    icon: ICONS.LOADING,
    text: "Provide full visibility into workflows with a visual execution graph and confidence scores.",
  },
];

export default function CallToAction({
  id = "request-a-demo",
  formTitle = "Request a custom demo",
  title = "Ready to put AI to work?",
  list = loremList,
}: {
  id?: string;
  formTitle?: string;
  title?: string;
  list?: { icon: ReactNode; text: string }[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  return (
    <section id={id} ref={sectionRef} className=" relative bg-gold">
      {/* bg */}
      <img
        src="/assets/textured-bg.png"
        alt="Textured background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
      />

      <div className="my-container side-padding py-20 lg:p-26 2xl:p-32 relative flex max-xl:flex-col max-xl:items-center justify-between gap-6 md:gap-10 xl:gap-20 ">
        {/* text */}
        <SlideUpAnim isInView={isInView} className="">
          <p className="text-64 max-xl:text-center">{title}</p>
          <ListWithIcons list={list} />
        </SlideUpAnim>

        {/* form */}
        <form
          id="cta-form"
          className="lg-rounded max-w-[600px] w-full xl:w-1/2 xl:max-w-[800px] bg-white/50 backdrop-blur-md border border-light-black px-8 py-14 flex flex-col  items-center gap-14 justify-center"
        >
          <p className="text-32 text-center">{formTitle}</p>

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

function ListWithIcons({
  list,
}: {
  list: { icon: ReactNode; text: string }[];
}) {
  return (
    <div className="flex gap-8 flex-col text-20 font-light xl:mt-16 mt-6 mb-10 max-w-[600px]">
      {list.map((l, i) => (
        <div key={i} className="flex gap-4 ps-2 xl:gap-8 xl:ps-4 items-center">
          <div className="w-10 aspect-square borde border-light-black text-light-black rounded-md">
            {l.icon}
          </div>
          <p>{l.text}</p>
        </div>
      ))}
    </div>
  );
}
