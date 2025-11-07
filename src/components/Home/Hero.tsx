import React, { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Heroimages , HeroimagesSM } from "../../services/Heroimg";

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % Heroimages.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + Heroimages.length) % Heroimages.length);

 

  const handleEnd = () => {
    if (!isDragging.current || startX.current === null) return;
    const diff = offsetX;
    const threshold = 100;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    setOffsetX(0);
    startX.current = null;
    isDragging.current = false;
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setOffsetX(currentX - startX.current);
  };

  return (
    <main className="relative overflow-hidden ">
      <div
        className="relative  h-[65vh]   w-full flex items-center justify-center"
        // onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      
      >
        <div
          className=" hidden lg:flex absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {Heroimages.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full md:object-contain lg:object-cover transition-all duration-[1200ms] ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            />
          ))}
        </div>


         <div
          className="flex lg:hidden absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {HeroimagesSM.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-auto  object-cover transition-all duration-[1200ms] ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-40 sm:top-60 md:top-60    lg:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
        >
          <IoChevronBack size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-40 sm:top-60 md:top-60  lg:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Heroimages.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              current === idx ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default Hero;
