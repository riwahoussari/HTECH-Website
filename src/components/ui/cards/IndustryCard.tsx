import { Link } from "react-router-dom";

export default function IndustryCard({
  img,
  title,
  className,
  fetchPriority,
}: {
  img: { src: string; alt: string };
  title: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <Link to={`/solutions/${title}`}>
      <div
        className={
          "relative cursor-pointer group overflow-clip text-white lg-rounded " +
          (className || "")
        }
      >
        {/* image */}
        <div className="absolute z-2 top-0 left-0 right-0 bottom-0 w-full bg-black-vertical-gradient" />
        <div className="h-full relative z-1 group-hover:scale-110 duration-300 ease-in-out">
          <img
            fetchPriority={fetchPriority}
            className="w-full object-cover"
            {...img}
          />
        </div>

        {/* title */}
        <div className="absolute z-3 right-0 top-0 left-0 p-3 py-4 xs:p-8">
          <p className="text-22 font-light" style={{ letterSpacing: "0.5px" }}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
