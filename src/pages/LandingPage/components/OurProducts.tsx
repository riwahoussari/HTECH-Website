import { Link } from "react-router-dom";
import ArrowSvg from "../../../components/ui/ArrowSvg";
import { TitleBlock } from "../../../components/ui/Titles";

export default function OurProducts() {
  return (
    <section className="my-container side-padding">
      <TitleBlock title="Our in houst AI products" />

      <div className="grid grid-cols-1 xl:grid-cols-3 2xl:gap-y-12 xl:gap-y-8 sm:gap-y-12 gap-y-6">
        {/* card 1 */}
        <Link
          to={"/products/generative-ai/horion-for-sales"}
          className="xl:col-span-2 2xl:pr-12 xl:pr-8 xl:border-r border-light-black group"
        >
          <div className=" flex flex-col gap-10">
            {/* image */}
            <div className="w-full lg-rounded overflow-hidden aspect-2/1">
              <img
                src="/assets/products/horion-for-sales.jpg"
                alt="image of a team meeting at a company"
                className="w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out"
              />
            </div>

            <div className="flex flex-col gap-10 justify-between">
              {/* text */}
              <div className="space-y-6">
                <p className="text-58 max-sm:text-[40px]! sm:leading-[0.9]!">
                  Horion for sales
                </p>
                <p className="text-20 max-w-[700px] opacity-80 group-hover:opacity-100 duration-150 ease-in-out">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque, itaque dolor. Atque odit fugiat, nihil dolores cumque
                  laboriosam aliquam eveniet dolorem officia nemo provident
                  officiis suscipit animi porro, doloremque cum.
                </p>
              </div>

              {/* arrow */}
              <div className="flex justify-end">
                <ArrowSvg
                  className="w-10 -rotate-45 group-hover:rotate-0 duration-200 ease-in-out md:group-hover:scale-150 group-hover:scale-125"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </Link>
        {/* card 2 */}
        <Link
          to={"/products/generative-ai/horion-for-hr"}
          className="xl:col-span-1 2xl:pl-12 xl:pl-8  max-xl:border-t max-xl:pt-12 max-sm:pt-8 border-light-black group"
        >
          <div className="flex flex-col max-xl:flex-col-reverse gap-10">
            <div className="flex flex-col gap-10 justify-between">
              {/* text */}
              <div className="space-y-6">
                <p className="text-58 max-sm:text-[40px]! sm:leading-[0.9]!">
                  Horion for HR
                </p>
                <p className="text-20 max-w-[700px] opacity-80 group-hover:opacity-100 duration-150 ease-in-out">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque, itaque dolor. Atque odit fugiat, nihil dolores cumque
                  laboriosam aliquam eveniet dolorem officia nemo provident
                  officiis suscipit animi porro, doloremque cum.
                </p>
              </div>

              {/* arrow */}
              <div className="flex justify-end">
                <ArrowSvg
                  className="w-10 -rotate-45 md:group-hover:scale-150 group-hover:scale-125 group-hover:rotate-0 duration-200 ease-in-out"
                  strokeWidth={1}
                />
              </div>
            </div>

            {/* image */}
            <div className="lg-rounded overflow-hidden aspect-square max-xl:aspect-2/1 ">
              <img
                src="/assets/products/horion-for-hr.jpg"
                alt="image of a team meeting at a company"
                className="w-full h-full group-hover:scale-105 duration-300 ease-in-out object-cover"
              />
            </div>
          </div>
        </Link>

        {/* card 3 */}
        <Link
          to={"/products/predictive-ai-models/for-enterprise"}
          className="xl:col-span-3 2xl:pt-12 xl:pt-8 sm:pt-12 pt-8 border-t border-light-black group "
        >
          <div className="flex max-xl:flex-col gap-10">
            {/* image */}
            <div className="xl:w-2/5 w-full lg-rounded max-xl:aspect-2/1 overflow-hidden">
              <img
                src="/assets/products/predictive-ai.jpg"
                alt="image of a team meeting at a company"
                className="w-full h-full group-hover:scale-105 duration-300 ease-in-out object-cover"
              />
            </div>

            <div className="flex flex-col gap-10 justify-between">
              {/* text */}
              <div className="space-y-6">
                <p className="text-58 max-sm:text-[40px]! sm:leading-[0.9]!">
                  Predictive AI models for companies
                </p>
                <p className="text-20 max-w-[700px] opacity-80 group-hover:opacity-100 duration-150 ease-in-out">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque, itaque dolor. Atque odit fugiat, nihil dolores cumque
                  laboriosam aliquam eveniet dolorem officia nemo provident
                  officiis suscipit animi porro, doloremque cum.
                </p>
              </div>

              {/* arrow */}
              <div className="flex justify-end">
                <ArrowSvg
                  className="w-10 -rotate-45 md:group-hover:scale-150 group-hover:scale-125 group-hover:rotate-0 ease-in-out duration-200"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
