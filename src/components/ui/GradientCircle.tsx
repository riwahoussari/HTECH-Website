import { cva, type VariantProps } from "class-variance-authority";
import TealDiamondGradient from "../../assets/teal-diamond-gradient.svg";
import BeigeDiamondGradient from "../../assets/beige-diamond-gradient.svg";
import { cn } from "../../lib/utils";

const gradientCircleVariants = cva("aspect-square rounded-full overflow-clip", {
  variants: {
    blur: {
      md: " blur-[max(1vw,10px)]",
      lg: "blur-[max(12vw,120px)]",
    },
    colorr: {
      beige: "",
      teal: "",
    },
  },
  defaultVariants: {
    blur: "md",
    colorr: "teal",
  },
});

interface GradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientCircleVariants> {}

export default function GradientCircle({
  blur,
  colorr,
  className,
  ...props
}: GradientProps) {
  return (
    <div className={cn(gradientCircleVariants({ blur }), className)} {...props}>
      <img
        src={colorr == "beige" ? BeigeDiamondGradient : TealDiamondGradient}
        className="h-full w-full object-contain"
        alt="Faded gradient ball"
      />
    </div>
  );
}

export function BigEllipseGradient() {
  return (
    <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/3 opacity-60 md:opacity-40">
      <GradientCircle
        className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-300 md:scale-y-200 md:-rotate-90 lg:blur-[max(5vw,50px)]! xl:blur-[max(3.5vw,35px)]!"
        colorr={"teal"}
      />
    </div>
  );
}
