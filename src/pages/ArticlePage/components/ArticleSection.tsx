import { Link } from "react-router-dom";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import { useRef, useState } from "react";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import ShareIcon from "../../../assets/share-icon.svg";
import MainIcon from "../../../assets/mail-icon.svg";
import FacebookIcon from "../../../assets/facebook-icon.svg";
import XIcon from "../../../assets/x-icon.svg";
import LinkedinIcon from "../../../assets/linkedin-icon.svg";
import Markdown from "react-markdown";

export default function ArticleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const articleMarkdown = `
  ### Overview

  If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

![this is an image](http://localhost:5173/assets/case-studies/leb-army.jpg)
  `;

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding overflow-x-clip"
    >
      <div className="relative mt-[140px]">
        {/* back button */}
        <SlideUpAnim
          isInView={isInView}
          className="top-0 left-0 mb-5 xl:absolute"
        >
          <Link to="/news">
            <Button
              arrow={"normal"}
              className="bg-transparent! px-0!"
              variant={"outline"}
            >
              BACK TO BLOG
            </Button>
          </Link>
        </SlideUpAnim>

        {/* content */}
        <div className="mx-auto max-w-[680px]">
          {/* title */}
          <div className="space-y-2.5">
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.1 }}>
              <p className="text-[32px] leading-[36px] xs:text-[40px] xs:leading-[44px]">
                Why Language is the Next Frontier of Business Intelligence
              </p>
            </SlideUpAnim>
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
              <p className="text-[18px] leading-[22px] xs:text-[22px] xs:leading-[27px]">
                Data alone is no longer enough—understanding and harnessing
                language is becoming the decisive edge for modern businesses.
              </p>
            </SlideUpAnim>

            <SlideUpAnim
              isInView={isInView}
              transition={{ delay: 0.3 }}
              className="my-8 flex items-center justify-between text-dark-green"
            >
              <p className="font-ibm! text-[14px] xs:text-[15px]">
                GAIANT TEAM - SEP 19, 2025
              </p>

              <ShareButton />
            </SlideUpAnim>
          </div>

          {/* image */}
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.4 }}
            className="relative aspect-2/1!"
          >
            <img
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
              }}
              fetchPriority="high"
              src="/images/people-walking.webp"
              alt="two people walking together in a hallway"
              className="h-full w-full object-contain"
            />
          </SlideUpAnim>

          {/* article */}
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
            <article className="prose lg:prose-xl mt-8 text-[17px] leading-[26px] xs:text-[19px] xl:leading-[28px]">
              <Markdown>{articleMarkdown}</Markdown>
              {/* For decades, business intelligence has been about crunching
              numbers—sales figures, operational metrics, financial forecasts.
              But numbers without words miss the human dimension. Every email,
              call transcript, customer review, or policy document contains
              valuable signals. The next great leap in business intelligence is
              not about more data, but about smarter language.
              <br />
              <br />
              <span className="relative inline-block font-bold max-md:ps-5">
                “Language is the fabric of decision-making,” says Dr. Lina Aoun,
                a computational linguist. “It’s how people express intent,
                doubt, and nuance. Things spreadsheets can’t capture.”
                <div className="bg-dark-green-blue-gradient-vertical absolute top-1 bottom-1 left-0 w-1 md:-left-5" />
              </span>
              <br />
              <br />
              When organizations learn to analyze language with the same rigor
              they apply to numbers, they unlock hidden layers of insight.
              Patterns emerge: what customers really care about, where
              inefficiencies live, and how teams collaborate (or don’t).
              Language turns abstract strategy into lived reality.
              <br />
              <br />
              Consider a customer service department. Traditional BI might
              measure average call time or number of tickets resolved. Language
              intelligence, on the other hand, can reveal whether customers
              leave conversations reassured, confused, or loyal. It transforms
              raw dialogue into measurable business outcomes.
              <br />
              <br />
              <span className="relative inline-block font-bold max-md:ps-5">
                “Numbers tell you what happened. Language tells you why,”
                explains Samir Khoury, Head of Data at a global retail firm.
                “That distinction is what moves companies from reactive to
                predictive.”
                <div className="bg-dark-green-blue-gradient-vertical absolute top-1 bottom-1 left-0 w-1 md:-left-5" />
              </span>
              <br />
              <br />
              The practical impact is profound. It enables faster decisions
              powered by real-time analysis of reports and communications. It
              deepens customer intelligence by analyzing conversations, reviews,
              and surveys at scale. And it strengthens strategy alignment by
              mapping how employees talk about goals versus how leadership
              frames them.
              <br />
              <br />
              Language also brings inclusivity. As AI advances, businesses can
              translate insights across borders, bridging cultural and
              linguistic gaps that once slowed global growth.
              <br />
              <br />
              The companies that thrive tomorrow won’t just monitor dashboards
              of KPIs. They’ll listen to the language running through every
              corner of their organization. That’s the real frontier of
              intelligence—where data meets dialogue, and where business finally
              begins to sound human. */}
            </article>
          </SlideUpAnim>
        </div>
      </div>
    </section>
  );
}

function ShareButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* share button */}
      <button className="relative z-1 flex cursor-pointer gap-1 xs:gap-2">
        <p className="text-[13px] font-bold text-dark-green xs:text-[14px]">
          SHARE
        </p>
        <img
          fetchPriority="high"
          className="w-3.5 xs:w-4"
          src={ShareIcon}
          alt="share icon"
        />
      </button>

      {/* social icon popup */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="absolute bottom-full z-1 bg-black [clip-path:polygon(0_0,100%_0,100%_60px,73%_60px,86%_100%,86%_60px,0_60px)] max-lg:right-0 lg:left-0 lg:[clip-path:polygon(0_0,100%_0,100%_60px,27%_60px,14%_100%,14%_60px,0_60px)] xl:left-full"
          >
            <div className="relative pb-5">
              {/* gradient */}
              <div className="bg-dark-green-blue-gradient absolute top-0 right-0 bottom-0 left-0 blur-xl" />

              {/* content */}
              <div className="relative flex items-center gap-1 px-2 py-2">
                {[LinkedinIcon, XIcon, FacebookIcon, MainIcon].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="cursor-pointer rounded-md p-3 duration-150 ease-in-out hover:bg-teal"
                    >
                      <div className="w-6">
                        <img
                          className="w-full object-contain"
                          src={icon}
                          alt="Linkedin logo"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* bridge */}
      {open && (
        <div className="absolute bottom-0 left-0 z-0 h-[100px] w-[200px]" />
      )}
    </div>
  );
}
