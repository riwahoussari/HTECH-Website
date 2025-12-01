import type { ReactNode } from "react";
import ArrowSvg from "../ArrowSvg";

export default function OutlineCard({
  title,
  text,
  icon,
  className
}: {
  title: string;
  text: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "group cursor-pointer w-full max-w-[700px] p-5 md:p-6 xl:p-8 h-full lg-rounded border border-light-black space-y-8 flex flex-col justify-between hover:bg-gold/75 duration-200 ease-in-out " + className
        
      }
    >
      <div className="w-6 xl:w-7 aspect-square fill-light-black text-light-black">
        {icon}
      </div>

      <div className="space-y-2">
        <p className="text-32">{title}</p>
        <p className="text-20">{text}</p>
      </div>

      <div className="flex justify-end">
        <ArrowSvg
          strokeWidth={1.5}
          className="w-5 xl:w-7 -rotate-45 group-hover:rotate-0 group-hover:scale-125 duration-150 ease-in-out"
        />
      </div>
    </div>
  );
}
