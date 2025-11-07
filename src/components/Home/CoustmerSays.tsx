// src/components/home/CoustmerSays.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cowsimg from "../../assets/Coustmersaysimg1.webp";
import { coustmerSays } from "../../services/Coustmer/Coustmersay";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { fadeUp, buttonVariants } from "../../motion/Motions";

const CoustmerSays: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Responsive items per slide
  useEffect(() => {
    const updateItems = () => {
      setItemsPerSlide(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalSlides = Math.ceil(coustmerSays.length / itemsPerSlide);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = current * itemsPerSlide;
  const visibleCards = coustmerSays.slice(startIndex, startIndex + itemsPerSlide);

  // local slide animation variants (kept as-is)
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Background */}
      <div
        className="relative w-full h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Cowsimg})` }}
      >
        <div className="absolute inset-0 bg-black/35 z-10" />
        <div className="text-white relative flex flex-col gap-10 z-20 items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl max-w-5xl font-bold">
            A philosophy rooted in Interdependence
          </h1>
          <h2 className="text-2xl md:text-3xl max-w-2xl">
            Ancient system of farming that still thrives in our villages
          </h2>
        </div>
      </div>

      {/* Customer Reviews Slider */}
      <div className="py-20 w-full">
        <h1 className="text-4xl md:text-5xl font-medium text-center mb-12 text-green-800">
          Our customer say
        </h1>

        <div className="relative mx-auto px-6 md:px-10">
          {/* Prev Button (motion-only) */}
          <motion.button
            onClick={prevSlide}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full z-30 transition-transform active:scale-90 shadow-lg"
            aria-label="Previous testimonials"
          >
            <IoChevronBack size={28} />
          </motion.button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div className="relative h-[420px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0 flex gap-8 justify-center items-start px-4"
                >
                  {visibleCards.map((item) => (
                    <motion.div
                      key={item.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow h-[400px] text-center w-full max-w-[700px] flex flex-col justify-start"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex justify-center items-center mb-4 pt-5">
                        <div className="border-2 rounded-full p-2 border-yellow-400">
                          <FaQuoteLeft className="bg-yellow-400 text-white p-5 rounded-full text-6xl" />
                        </div>
                      </div>
                      <h3 className="px-5 font-semibold text-lg text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm my-3 px-6">{item.review}</p>
                      <p className="flex justify-center text-yellow-500 text-lg pb-4">
                        {"⭐".repeat(item.rating)}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next Button (motion-only) */}
          <motion.button
            onClick={nextSlide}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full z-30 transition-transform active:scale-90 shadow-lg"
            aria-label="Next testimonials"
          >
            <IoChevronForward size={28} />
          </motion.button>
        </div>

        {/* Dots (motion applied to active state only) */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-green-700" : "bg-gray-400"}`}
              animate={i === current ? { width: 32 } : { width: 8 }}
              style={{ overflow: "hidden" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default CoustmerSays;
