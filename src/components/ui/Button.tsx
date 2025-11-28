import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ArrowSvg from "./ArrowSvg";

const buttonVariants = cva(
  "group inline-flex items-center justify-between rounded-full font-bold  hover:opacity-70 duration-200 cursor-pointer ease-in-out overflow-clip",
  {
    variants: {
      variant: {
        primary: " text-white bg-button backdrop-blur-3xl",
        secondary: "bg-white/50 text-dark-green backdrop-blur-3xl",
        black: "bg-light-black text-white",
        ghost: "bg-transparent ",
      },
      size: {
        sm: "px-3.5 py-1.5 text-[13px] xs:px-5 xs:py-3 xs:text-sm",
        md: "px-5 py-3 text-sm",
      },
      arrow: {
        none: "",
        normal: "gap-[8px]",
        back: "gap-4",
        spaced: "gap-[25px] xs:gap-[40px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      arrow: "none",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  arrow,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, arrow }), className)}
      {...props}
    >
      {arrow && arrow == "back" && (
        <ArrowSvg
          color={variant == "secondary" ? "var(--color-dark-green)" : "white"}
          className={"w-[14px] rotate-180 stroke-[2px]"}
        />
      )}
      <span>{props.children}</span>
      {arrow && arrow !== "none" && arrow !== "back" && (
        <ArrowSvg
          color={variant == "secondary" ? "var(--color-dark-green)" : "white"}
          className={"w-[14px] stroke-[2px] group-hover:translate-x-1 ease-in-out duration-200"}
        />
      )}
    </button>
  );
}
