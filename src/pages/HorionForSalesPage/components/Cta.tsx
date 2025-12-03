import CallToAction from "../../../components/sections/CallToAction";
import { ICONS } from "../../../lib/data";

export default function Cta() {
  return (
    <CallToAction>
      <div className="flex gap-8 flex-col text-20 font-light xl:mt-16 mt-6 mb-10 max-w-[600px]">
        <div className="flex gap-4 ps-2 xl:gap-8 xl:ps-4 items-center">
          <div className="w-10 aspect-square borde border-light-black text-light-black rounded-md">
            {ICONS.GRAPH}
          </div>
          <p>
            Deliver high-quality results with advanced retrieval, reasoning, and
            self-validation techniques.
          </p>
        </div>
        <div className="flex gap-4 ps-2 xl:gap-8 xl:ps-4 items-center">
          <div className="w-10 aspect-square borde border-light-black text-light-black rounded-md">
            {ICONS.LOADING}
          </div>
          <p>
            Accelerate time to deployment by automatically creating unique plans
            to solve each task.
          </p>
        </div>
        <div className="flex gap-4 ps-2 xl:gap-8 xl:ps-4 items-center">
          <div className="w-10 aspect-square borde border-light-black text-light-black rounded-md">
            {ICONS.EYE}
          </div>
          <p>
            Provide full visibility into workflows with a visual execution graph
            and confidence scores.
          </p>
        </div>
      </div>
    </CallToAction>
  );
}
