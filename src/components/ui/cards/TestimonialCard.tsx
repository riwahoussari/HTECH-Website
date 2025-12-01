import NetBg from "../NetBg";

export default function TestimonialCard({
  text,
  name,
  company,
  position,
  className,
}: {
  text: string;
  name: string;
  position?: string;
  company?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "relative flex flex-col justify-between lg-rounded overflow-hidden w-full 2xl:gap-48 xl:gap-32 gap-20 sm:gap-24 p-6 sm:p-10 sm:pb-6 lg:p-12 lg:pb-8 bg-blueish-gray/15 " +
        className
      }
    >
      {/* content */}
      <p className="relative z-1 text-32 max-w-[1200px] ">{text}</p>

      <div className="relative z-1 flex justify-between gap-6 xs:items-end max-xs:flex-col max-w-[1200px] ">
        <div className="space-y-1.5">
          <p className="text-20 font-light uppercase">{name}</p>

          <p className="text-20 font-light uppercase">— {position}</p>
        </div>
        <p className="text-20 font-light uppercase">{company}</p>
      </div>

      {/* bg */}
      <NetBg
        color="var(--color-gold)"
        className="absolute z-0 opacity-60 origin-top w-[3000px] top-1/2 left-1/2 -translate-1/2"
      />
    </div>
  );
}
