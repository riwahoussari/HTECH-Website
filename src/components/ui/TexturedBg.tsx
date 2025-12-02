export default function TexturedBg({
  color = "var(--color-blueish-gray)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <img
      src="/assets/textured-bg.png"
      alt="Textured Background"
      style={{ backgroundColor: color }}
      className={
        "min-h-full min-w-full absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center " +
        className
      }
    />
  );
}
