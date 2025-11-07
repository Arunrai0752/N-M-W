import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, buttonVariants } from "../../motion/Motions";

const SignUp: React.FC = () => {
  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-200 flex flex-col"
    >
      {/* Breadcrumb */}
      <motion.div variants={fadeUp} className="flex items-center px-10 min-h-[60px] bg-white shadow-sm">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-md">
          <Link to={"/"} className="hover:text-green-700 cursor-pointer">
            Home
          </Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">
            Create an account With Natural Milk World{" "}
          </p>
        </h1>
      </motion.div>

      {/* Sign Up Form */}
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex justify-center items-center flex-1 px-4 py-12 md:px-10">
        <div className="bg-white rounded-md shadow-lg w-full max-w-3xl p-10 md:px-30">
          <motion.h1 variants={fadeUp} className="text-3xl font-bold text-gray-800 text-center mb-3">
            Create an Account
          </motion.h1>

          <motion.p variants={fadeUp} className="text-center text-black mb-8 font-light">
            If you do not have an account with us, please fill the form below to
            create your account.
          </motion.p>

          <form className="space-y-5">
            {/* Name */}
            <motion.div variants={fadeUp}>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="eg: Yogesh Sharma"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div variants={fadeUp}>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="eg: 9079794224"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="eg: yogesh@gmail.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeUp}>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="eg: ********"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-green-700 text-white py-2 rounded-full font-semibold hover:bg-green-800 transition-all"
            >
              Sign up
            </motion.button>

            <motion.div variants={fadeUp} className="text-center mt-3">
              <Link to="/forgotpassword" className="text-green-700 font-medium hover:underline">
                Forgot your password?
              </Link>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default SignUp;
