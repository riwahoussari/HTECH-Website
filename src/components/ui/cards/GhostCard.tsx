import type { ReactNode } from "react";

export default function GhostCard({
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
        "w-full max-w-[700px] h-full space-y-8 flex flex-col justify-between  duration-200 ease-in-out " + className
      }
    >
      <div className="w-6 xl:w-7 aspect-square fill-light-black text-light-black">
        {icon}
      </div>

      <div className="space-y-2">
        <p className="text-32">{title}</p>
        <p className="text-20">{text}</p>
      </div>
    </div>
  );
}
