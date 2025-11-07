import { useState, useEffect, useRef } from "react";

type AnnouncementBarProps = {
  messages: string[];
  delay?: number; 
}

export default function AnnouncementBar ({
  messages,
  delay = 3000,
}: AnnouncementBarProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offsetX, setOffsetX] = useState(0); // For dragging offset
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Auto rotation
  useEffect(() => {
    if (paused || isDragging.current || animating) return;
    const interval = setInterval(() => handleNext(), delay);
    return () => clearInterval(interval);
  }, [paused, delay, animating]);

  const handleNext = () => {
    setDirection("left");
    triggerAnimation(() =>
      setIndex((prev) => (prev + 1) % messages.length)
    );
  };

  const handlePrev = () => {
    setDirection("right");
    triggerAnimation(() =>
      setIndex((prev) => (prev - 1 + messages.length) % messages.length)
    );
  };

  const triggerAnimation = (callback: () => void) => {
    setAnimating(true);
    setTimeout(() => {
      callback();
      setAnimating(false);
    }, 400); // match animation duration
  };

  // --- Drag / Swipe Logic ---
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    setPaused(true);
    if ("touches" in e) startX.current = e.touches[0].clientX;
    else startX.current = e.clientX;
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setOffsetX(currentX - startX.current);
  };

  const handleEnd = () => {
    if (!isDragging.current || startX.current === null) return;

    const diff = offsetX;
    const threshold = 80;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) handlePrev();
      else handleNext();
    }

    setOffsetX(0);
    startX.current = null;
    isDragging.current = false;
    setPaused(false);
  };

  return (
    <div
      className="bg-green-800/95 text-white text-lg font-medium py-3 px-4 text-center overflow-hidden relative select-none"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div
        className={`inline-block w-full transition-transform duration-500 ease-in-out ${
          animating
            ? direction === "left"
              ? "slide-out-left"
              : "slide-out-right"
            : ""
        }`}
        style={{
          transform: `translateX(${offsetX}px)`,
        }}
        key={index}
      >
        {messages[index]}
      </div>
      {/* Incoming text overlay for smooth visual transition */}
      {animating && (
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out ${
            direction === "left" ? "slide-in-right" : "slide-in-left"
          }`}
        >
          {direction === "left"
            ? messages[(index + 1) % messages.length]
            : messages[(index - 1 + messages.length) % messages.length]}
        </div>
      )}
    </div>
  );
}
