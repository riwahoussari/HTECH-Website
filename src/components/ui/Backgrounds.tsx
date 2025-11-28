import { useState } from "react";
import GreenBlueGradient from "../../assets/green-blue-gradient.webp";
import GradientCircle from "./GradientCircle";

export function LandscapeBg({
  ref,
  fetchPriority,
}: {
  fetchPriority?: "high" | "low" | "auto" | undefined;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className="bg-dark-green-blue-gradient-oblique h-full w-[100vw]!"
    >
      <img
        fetchPriority={fetchPriority}
        alt="Landscape filled with mountains and a girl standing on a rock"
        src="/images/mountains-landscape.webp"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function BlurredLandscapeBg({ blur = "md" }: { blur?: "lg" | "md" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={
        "absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip " +
        (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
      }
    >
      <div
        className={
          "relative h-full w-[120vw]! -translate-x-[10vw] " +
          (blur == "md" ? "blur-[max(2vw,25px)]" : "blur-[max(4vw,50px)]")
        }
      >
        <img
          alt="Landscape filled with mountains and a girl standing on a rock"
          src="/images/mountains-landscape.webp"
          className="h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}

export function BlurredTealGradientBg({
  withBall = true,
  fetchPriority,
}: {
  withBall?: boolean;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[min(6vw,120px)] lg:h-[950px] xl:h-[1000px] 2xl:h-[1100px] " +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={GreenBlueGradient}
          className="h-full w-full object-cover"
          alt="Gradient background"
        />
      </div>
      {withBall && (
        <div className="absolute top-[140px] left-1/2 w-[500px] max-w-[670px] -translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
          <GradientCircle />
        </div>
      )}
    </div>
  );
}

export function BlurredTealGradientBg2({
  withBall = true,
}: {
  withBall?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] blur-[min(6vw,120px)]" +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={GreenBlueGradient}
          className="h-full w-full object-cover"
          alt="Gradient Background"
        />
      </div>
      {withBall && (
        <div className="absolute top-1/2 left-1/2 w-[450px] max-w-[600px] -translate-1/2 lg:w-[30vw] lg:min-w-[500px]">
          <GradientCircle />
        </div>
      )}
    </div>
  );
}

export function HeroImgBackground({
  blur,
  src,
  alt,
  className,
  fetchPriority,
}: {
  className?: string;
  blur?: string;
  src: string;
  alt: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] " +
          (blur || " blur-[max(1vw,10px)] ") +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={src}
          className={"h-full w-full object-cover " + (className || "")}
          alt={alt}
        />
      </div>
    </div>
  );
}
