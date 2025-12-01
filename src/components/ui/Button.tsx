import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ArrowSvg from "./ArrowSvg";

const buttonVariants = cva(
  "group inline-flex items-center justify-center duration-200 cursor-pointer ease-in-out overflow-clip",
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
        sm: " text-[14px] lg:text-[15px] ",
        md: " text-[15px] lg:text-[17px] ",
        lg: " text-[16px] xs:text-[18px] xl:text-[20px] ",
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
        class: " px-[15px] py-[7px] lg:px-[17px] lg:py-[10px] ",
      },
      {
        variant: "outline",
        size: "sm",
        class: " p-[3px] lg:p-[4px] ",
      },
      {
        variant: "fill",
        size: "md",
        class: " px-[17px] py-[10px] lg:px-[19px] lg:py-[12px] ",
      },
      {
        variant: "outline",
        size: "md",
        class: " p-[4px] lg:p-[5px] ",
      },
      {
        variant: "fill",
        size: "lg",
        class: " px-[20px] py-[10px] xs:px-[24px] xs:py-[13px] xl:px-[29px] xl:py-[17px] ",
      },
      {
        variant: "outline",
        size: "lg",
        class: " px-[5px] py-[6px] xl:px-[7px] xl:py-[10px] ",
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
          strokeWidth={2}
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
            (size == "sm"
              ? " w-[17px] lg:w-[19px] "
              : size == "md"
                ? " w-[20px] lg:w-[22px] "
                : " w-[20px] xs:w-[22px] xl:w-[25px] ")
          }
        />
      )}
    </button>
  );
}
