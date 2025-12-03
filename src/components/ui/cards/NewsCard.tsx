import { useState } from "react";
import { Link } from "react-router-dom";
import HtechLogoSvg from "../HtechLogoSvg";
import Button from "../Button";
import ArrowSvg from "../ArrowSvg";
import { motion as m } from "motion/react";

export default function NewsCard({
  imgSrc,
  title,
  subtitle,
  className,
  fetchPriority,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const [hovering, setHovering] = useState(false);
  return (
    <Link
      to={`/news/${title}`}
      className={
        "group flex flex-col justify-between bg-[#EAEDF1] lg-rounded overflow-hidden h-full w-full " +
        className
      }
      aria-label={`Read more about ${title}`}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div className="p-4  ">
        {/* image */}
        <div className="aspect-2/1 xs:aspect-33/10 rounded-lg overflow-hidden relative">
          <img
            fetchPriority={fetchPriority}
            className="w-full h-full object-cover duration-200 ease-in-out group-hover:scale-110"
            src={imgSrc}
            alt={`Image representing ${title}`}
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20" />
          <HtechLogoSvg
            className="absolute bottom-1/2 right-1/2 translate-1/2 w-1/4"
            color="white"
          />
        </div>

        {/* text */}
        <div className="mt-6 space-y-4">
          <p className="opacity-70">{subtitle}</p>
          <p className="text-22">{title}</p>
        </div>
      </div>

      {/* read more  */}
      <div className="flex relative justify-between items-center bg-white  py-6 pt-9 p-4 ">
        <Button variant={"outline"} size={"sm"} className="relative z-1">
          Read more
        </Button>
        <ArrowSvg className="w-5 relative z-1 group-hover:-rotate-45 duration-200 ease-in-out group-hover:scale-125" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 670 111"
          preserveAspectRatio="none"
          className="absolute top-0 bottom-0 right-0 left-0 h-full w-full z-0"
        >
          <m.path
            className="w-full transition-all duration-300 ease-in-out"
            fill="#EAEDF1"
            d={
              hovering
                ? "M670 0H0V91C0 102.046 8.9543 111 20 111H518.641C526.216 111 533.14 111 536.529 111L570.988 111C574.377 111 581.301 111 588.875 111H650C661.046 111 670 102.046 670 91Z"
                : "M670 0H0V91C0 102.046 8.9543 111 20 111H518.641C526.216 111 533.14 106.721 536.529 99.9469L570.988 31.0531C574.377 24.2789 581.301 20 588.875 20H650C661.046 20 670 11.0457 670 0Z"
            }
          ></m.path>
        </svg>
      </div>
    </Link>
  );
}
