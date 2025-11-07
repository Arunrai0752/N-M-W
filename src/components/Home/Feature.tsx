import React from "react";
import { motion } from "framer-motion";
import { features } from "../../services/Feature/feature";
import { fadeUp, buttonVariants } from "../../motion/Motions";

const Feature: React.FC = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center gap-10 py-16 bg-white"
    >
      <motion.h1
        variants={fadeUp}
        className="text-[#0c7748] text-4xl md:text-5xl font-semibold text-center"
      >
        Featured on mad4india.com
      </motion.h1>

      {/* Feature Image */}
      <div className="flex justify-center items-center">
        {features.map((feature ) => (
          <motion.img
            key={feature.tittle}
            src={feature.img}
            alt="Featured on Mad4India"
            variants={fadeUp}
            className="rounded-2xl shadow-lg w-[90%] md:w-[100%] object-cover"
            initial="initial"
            animate="animate"
          />
        ))}
      </div>

      {/* Read More Button */}
      <motion.a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="bg-[#0c7748] hover:bg-[#095c38] text-white px-6 py-3 rounded-3xl font-medium transition-all duration-300"
      >
        Read More
      </motion.a>
    </motion.div>
  );
};

export default Feature;
