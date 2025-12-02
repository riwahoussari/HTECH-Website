import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ArrowSvg from "./ArrowSvg";

const buttonVariants = cva(
  "group inline-flex items-center justify-center duration-200 cursor-pointer ease-in-out overflow-clip leadin-none ",
  {
    variants: {
      variant: {
        fill: " rounded-full ",
        outline: "bg-transparent! border-b-[1px] hover:opacity-70 ",
      },
      clr: {
        black: "bg-light-black border-light-black ",
        white: "bg-white border-white ",
      },
      size: {
        sm: " text-[12px] lg:text-[14px] ",
        md: " text-[14px] lg:text-[16px] ",
        lg: " text-[16px] lg:text-[18px] ",
      },
      arrow: {
        none: "",
        normal: "gap-[12px]",
      },
    },
    compoundVariants: [
      // clr - variant
      {
        variant: "fill",
        clr: "black",
        class: " text-white hover:text-light-black hover:bg-white ",
      },
      {
        variant: "outline",
        clr: "black",
        class: " text-light-black ",
      },
      {
        variant: "fill",
        clr: "white",
        class: " text-light-black hover:text-white hover:bg-light-black ",
      },
      {
        variant: "outline",
        clr: "white",
        class: " text-white ",
      },

      // Size - variant
      {
        variant: "fill",
        size: "sm",
        class: " px-[14px] py-[7px] lg:px-[16px] lg:py-[8px] ",
      },
      {
        variant: "outline",
        size: "sm",
        class: " p-[3px] xl:p-[4px] ",
      },
      {
        variant: "fill",
        size: "md",
        class: " px-[16px] py-[8px] lg:px-[20px] lg:py-[10px] ",
      },
      {
        variant: "outline",
        size: "md",
        class: " p-[3.5px] xl:p-[5px] ",
      },
      {
        variant: "fill",
        size: "lg",
        class: " px-[20px] py-[10px] lg:px-[24px] lg:py-[12px] ",
      },
      {
        variant: "outline",
        size: "lg",
        class: " p-[4px] xl:p-[6px] ",
      },
    ],
    defaultVariants: {
      variant: "fill",
      size: "md",
      arrow: "none",
      clr: "black",
    },
  }
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  clr,
  size,
  arrow,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, clr, size, arrow }), className)}
      {...props}
    >
      <span className="w-max">{props.children}</span>
      {arrow && arrow !== "none" && (
        <ArrowSvg
          strokeWidth={1.5}
          color={
            clr == "white"
              ? variant == "outline"
                ? "white"
                : "var(--color-light-black)"
              : variant == "outline"
                ? "var(--color-light-black)"
                : "white"
          }
          className={
            "group-hover:rotate-0 ease-in-out duration-200 -rotate-45 " +
            (variant === "outline" ? "" : " group-hover:invert-100! ") +
            (size == "sm"
              ? " w-[17px] lg:w-[18px] "
              : size == "md"
                ? " w-[18px] lg:w-[20px] "
                : " w-[18px] xl:w-[22px] ")
          }
        />
      )}
    </button>
  );
}
