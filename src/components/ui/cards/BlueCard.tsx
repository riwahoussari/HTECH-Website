import type { ReactNode } from "react";

export default function BlueCard({
  title,
  text,
  icon,
  className,
  image,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  className?: string;
  image?: ReactNode;
}) {
  return (
    <div
      className={
        "group overflow-clip relative cursor-pointer w-full max-w-[700px] p-5 md:p-6 xl:p-8 h-full lg-rounded border border-blueish-gray gap-y-8 flex flex-col justify-between bg-blueish-gray text-white duration-200 ease-in-out " +
        className
      }
    >
      <div className="space-y-3">
        {icon && (
          <div className="w-6 xl:w-7 aspect-square fill-whtie text-whtie">
            {icon}
          </div>
        )}
        {image}

        <p className="text-32">{title}</p>
      </div>

      <p className="text-20">{text}</p>

      {/* bg */}
      <div className="absolute top-0 bottom-0 left-0 right-0 min-w-full min-h-full">
        <img
          src="/assets/textured-bg.png"
          alt="Textured Background"
          className={"w-full h-full object-cover opacity-35"}
        />
      </div>
    </div>
  );
}
