import React from "react";
import { motion } from "framer-motion";
import Cow from "../../assets/Cow1.webp";
import { fadeUp, subtleScale, buttonVariants } from "../../motion/Motions";

const Welcomepage: React.FC = () => {
  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="xl:flex grid items-center justify-center min-w-full">
        <motion.div
          variants={subtleScale}
          className="h-auto bg-white flex justify-center items-center w-full xl:w-1/2"
        >
          <motion.img
            src={Cow}
            alt="Natural Milk World Cow"
            className="h-80"
            draggable={false}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          />
        </motion.div>

        <div className="h-auto xl:w-1/2 w-full gap-6 md:gap-12 flex font-medium flex-wrap py-20 max-w-md text-center sm:text-start md:max-w-2xl">
          <motion.h1
            variants={fadeUp}
            className="text-center md:text-start w-full lg:text-4xl text-green-800"
          >
            Welcome To Natural Milk World
          </motion.h1>

          <motion.p variants={fadeUp} className="lg:text-xl">
            It’s all about purity, freshness, and tradition here. At Natural Milk World, we bring you the
            unmatched taste of Desi Cow Ghee, Buffalo Ghee, Organic Mustard Oil, handmade Green Chilli Pickle,
            Kair Pickle, and many more homemade delights — straight from our farms to your kitchen.
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="sm:w-fit w-full px-10 py-5 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-all"
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
};

export default Welcomepage;
