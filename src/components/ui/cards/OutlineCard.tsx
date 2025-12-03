import type { ReactNode } from "react";
import ArrowSvg from "../ArrowSvg";

export default function OutlineCard({
  title,
  text,
  icon,
  image,
  className,
}: {
  title?: string;
  text?: string;
  icon?: ReactNode;
  image?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "group relative cursor-pointer w-full max-w-[700px] p-5 md:p-6 xl:p-8 h-full lg-rounded border border-blueish-gray space-y-8 flex flex-col justify-between bg-blueish-gray text-white duration-200 ease-in-out " +
        className
      }
    >
      {icon && (
        <div className="w-6 xl:w-7 aspect-square fill-whtie text-whtie">
          {icon}
        </div>
      )}
      {image}

      <div className="space-y-2">
        <p className="text-32">{title}</p>
        <p className="text-20">{text}</p>
      </div>

      <div className="flex justify-end">
        <ArrowSvg
        color="white"
          strokeWidth={1.5}
          className="w-5 xl:w-7 -rotate-45 group-hover:rotate-0 group-hover:scale-125 duration-150 ease-in-out"
        />
      </div>

      {/* bg */}
      <div className="absolute z-0 object-cover top-0 bottom-0 left-0 right-0  min-h-full min-w-full">
        <img
          src="/assets/textured-bg.png"
          alt="Textured Background"
          className={"w-full h-full object-cover opacity-35"}
        />
      </div>
    </div>
  );
}
