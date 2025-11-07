import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, buttonVariants, staggerContainer } from "../../motion/Motions";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" bg-black/10 flex flex-col"
    >
      {/* Breadcrumb */}
      <motion.div
        variants={fadeUp}
        className="flex items-center px-10 min-h-[60px] bg-white shadow-sm"
      >
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-lg">
          <Link to={"/"} className="hover:text-green-700 cursor-pointer">
            Home
          </Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Login in your account</p>
        </h1>
      </motion.div>

      {/* Login Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center flex-1 px-4 py-26"
      >
        <div className="bg-white rounded-md shadow-lg w-full max-w-3xl flex flex-col md:flex-row">
          {/* Left Side - Login Form */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2 p-10 space-y-6">
            <h1 className="text-3xl font-md text-gray-800 text-center ">Login</h1>
            <h4 className="text-center text-black font-medium">
              Please login below account detail
            </h4>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg: yogesh@gmail.com"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="eg: ********"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-green-700 text-white py-2 rounded-full font-semibold hover:bg-green-800 transition-all"
              >
                Sign in
              </motion.button>

              <div className="text-center">
                <Link
                  to="/forgotpassword"
                  className="text-green-700 font-medium hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Signup + Info */}
          <motion.div
            variants={fadeUp}
            className="w-full flex justify-center items-center md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 p-10 text-center md:text-left space-y-5"
          >
            <div className="grid gap-5">
              <h2 className="text-md text-center font-medium text-gray-800">
                Don’t have an account?
              </h2>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate("/signup")}
                className="border border-2 w-full border-green-700 text-green-700 py-2 px-6 rounded-md font-semibold hover:bg-green-700 hover:text-white transition-all"
              >
                Signup
              </motion.button>

              <p className="text-sm text-gray-600 leading-relaxed">
                *{" "}
                <Link
                  to="/termsandcondition"
                  className="text-green-700 text-xs hover:underline"
                >
                  Terms & conditions.
                </Link>
                <br />
                <p className="text-black ">
                  Your privacy and security are important to us. For more
                  information on how we use your data, read our{" "}
                </p>
                <a href="#" className="text-green-700 hover:underline text-sm">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Login;
