export default function TexturedBg({
  color = "var(--color-blueish-gray)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "min-h-full min-w-full absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center " +
        className
      }
      style={{ backgroundColor: color }}
    >
      <img
        src="/assets/textured-bg.png"
        alt="Textured Background"
        className={
          "min-h-full min-w-full object-cover opacity-100 " +
          className
        }
      />
    </div>
  );
}
