import React from "react";
import { motion } from "framer-motion";
import { products } from "../../services/Product/Product";
import { fadeUp, staggerContainer, cardVariant, buttonVariants } from "../../motion/Motions";

const OurProduct: React.FC = () => {
  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" w-full h-auto  bg-gray-200 flex justify-center py-20 "
    >
      <div className=" max-w-[90vw] p-4 ">
        <motion.h1 variants={fadeUp} className="text-5xl text-center font-medium text-[#0c7748]">
          Our Products
        </motion.h1>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {products.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              className="  transition-all duration-300 group"
            >
              <div className="relative w-full h-90 overflow-hidden rounded-lg">
                <motion.img
                  src={item.image1}
                  alt={item.name}
                  className="absolute shadow rounded-xl hover:shadow-lg inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  draggable={false}
                />
                <motion.img
                  src={item.image2}
                  alt={`${item.name} alternate`}
                  className="absolute shadow rounded-xl hover:shadow-lg inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  draggable={false}
                />
              </div>

              <h2 className="font-bold text-lg mt-3 h-[50px] overflow-hidden">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500">
                ⭐ {item.rating} ({item.reviews} reviews)
              </p>
              <p className="text-green-700 font-semibold mt-2">
                ₹{item.discountedPrice}{" "}
                <span className="line-through text-gray-400 text-sm">
                  ₹{item.originalPrice}
                </span>
              </p>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="mt-4 w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all"
              >
                Add To Cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center pt-5 ">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className=" bg-[#0C7748] px-4 py-2 rounded-3xl "
          >
            View All Product
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
};

export default OurProduct;
