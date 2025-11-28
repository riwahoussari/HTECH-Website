export default function ArrowSvg({
  className,
  color,
  strokeWidth
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      stroke={color || "#212121"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth || 2}
      d="M1 11.546h21.213m0 0L12.667 2m9.546 9.546-9.546 9.546"
    />
  </svg>
  );
}


export function Arrow2Svg({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.42916 1.3605L12.7594 1.36035M12.7594 1.36035V11.5436M12.7594 1.36035L1.35938 12.7604"
        stroke={color || "black"}
        stroke-width="1.5"
      />
    </svg>
  );
}
