import { useRef } from "react";

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void
) {
  const startX = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  const minDistance = 50; // px threshold

  // TOUCH START
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  // TOUCH END
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    handleSwipe(endX);

    startX.current = null;
  };

  // MOUSE DOWN
  const onMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    startX.current = e.clientX;
  };

  // MOUSE UP
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || startX.current === null) {
      isMouseDown.current = false;
      return;
    }

    handleSwipe(e.clientX);

    startX.current = null;
    isMouseDown.current = false;
  };

  // OPTIONAL: If you want to prevent text selection while dragging
  const onMouseMove = (e: React.MouseEvent) => {
    if (isMouseDown.current) {
      e.preventDefault();
    }
  };

  // SHARED SWIPE LOGIC
  const handleSwipe = (endX: number) => {
    if (startX.current === null) return;

    const diff = startX.current - endX;

    if (Math.abs(diff) > minDistance * 3) {
      if (diff > 0) {
        onSwipeLeft();
        onSwipeLeft();
      } else {
        onSwipeRight();
        onSwipeRight();
      }
    } else if (Math.abs(diff) > minDistance) {
      diff > 0 ? onSwipeLeft() : onSwipeRight();
    }
  };

  return {
    // touch
    onTouchStart,
    onTouchEnd,

    // mouse
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };
}
