import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, buttonVariants } from "../../motion/Motions";


const ForgotPassword: React.FC = () => {
  const navigate =  useNavigate();
  return (
    <motion.main variants={fadeUp} initial="initial" animate="animate" exit="exit" className="min-h-screen bg-gray-200 flex flex-col">
      {/* Breadcrumb */}
      <motion.div variants={fadeUp} className="flex items-center px-10 min-h-[60px] bg-white shadow-sm">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-md">
          <Link to="/" className="hover:text-green-700 cursor-pointer">
            Home
          </Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Forgot Password</p>
        </h1>
      </motion.div>

      {/* Main Container */}
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex justify-center items-center flex-1 px-4 py-12">
        <div className="bg-white rounded-md shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
          {/* Left Section - Recover Form */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2 p-10 space-y-6">
            <motion.h1 variants={fadeUp} className="text-2xl font-medium text-center w-full text-gray-800">
              Forgot Password
            </motion.h1>
            <motion.h4 variants={fadeUp} className="text-center text-gray-700 font-medium">
              Enter your email ID so that we can send you a link to reset
              password
            </motion.h4>

            <div className="space-y-4">
              <motion.div variants={fadeUp}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg: yogesh@gmail.com"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </motion.div>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-green-700 text-white py-2 rounded-full font-semibold hover:bg-green-800 transition-all"
              >
                Recover
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section - Login Link */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 p-10 text-center md:text-left space-y-5">
            <motion.h2 variants={fadeUp} className="text-lg text-center font-medium text-gray-800">
              Remember your password?
            </motion.h2>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/login")}
              className="border w-full border-green-700 text-green-700 py-2 px-6 rounded-md font-semibold hover:bg-green-700 hover:text-white transition-all"
            >
              Login
            </motion.button>
            <motion.p variants={fadeUp} className="text-sm text-gray-600 leading-relaxed">
              *{" "}
              <Link to="/termsandcondition" className="text-green-700 hover:underline font-medium">
                Terms & conditions.
              </Link>
              <br />
              Your privacy and security are important to us. For more
              information on how we use your data, read our{" "}
              <a href="#" className="text-green-700 hover:underline font-medium">
                privacy policy
              </a>
              .
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ForgotPassword;
