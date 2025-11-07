// src/components/home/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Heroimages, HeroimagesSM } from "../../services/Heroimg";
import {
  buttonVariants,
  fadeUp,
  transitions,
} from "../../motion/Motions";

const Hero: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isClient, setIsClient] = useState(false); // SSR safe
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % Heroimages.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + Heroimages.length) % Heroimages.length);

  const handleStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setOffsetX(currentX - startX.current);
  };

  const handleEnd = () => {
    if (!isDragging.current || startX.current === null) {
      setOffsetX(0);
      startX.current = null;
      isDragging.current = false;
      return;
    }

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

  // choose images based on viewport width safely (SSRed-friendly)
  const images = isClient && window.innerWidth >= 1024 ? Heroimages : HeroimagesSM;

  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative overflow-hidden"
    >
      <div
        className="relative h-[65vh] w-full flex items-center justify-center"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current].img}
            alt={`slide-${current}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1, transition: transitions.slow }}
            exit={{ opacity: 0, scale: 0.98, transition: transitions.fast }}
            draggable={false}
          />
        </AnimatePresence>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <IoChevronBack size={24} />
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <IoChevronForward size={24} />
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        variants={fadeUp}
        initial="initial"
        animate="animate"
      >
        {Heroimages.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 rounded-full ${current === idx ? "bg-white w-4" : "bg-white/50 w-2"}`}
            animate={current === idx ? { scale: [1, 1.3, 1], transition: { duration: 0.6 } } : { scale: 1 }}
          />
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Hero;
