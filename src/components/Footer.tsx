import React from "react";
import { motion } from "framer-motion";
import Footerimg from "../assets/footer1.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  fadeUp,
  staggerContainer,
  buttonVariants,
} from "../motion/Motions";

const Footer: React.FC = () => {
  return (
    <motion.footer
      variants={fadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative border-t-1 bg-white text-black pt-10 pb-0 overflow-hidden"
      style={{
        backgroundImage: `url(${Footerimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="w-screen flex justify-center items-center"
      >
        <div className="mx-auto w-[90vw] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-96 place-items-center text-center lg:text-left">
          {/* Column 1 - Brand Info */}
          <motion.div variants={fadeUp} className="space-y-3 px-10 text-xl">
            <img
              src="Logo.png"
              alt="Natural Milk World Logo"
              className="w-40 object-contain mb-4"
            />
            <div className="flex items-start gap-2">
              <IoLocationOutline className="text-xl mt-1 text-green-800" />
              <p className="text-[16px] leading-6">
                Natural Milk World Farm, 343, Berla Road, Vill Asalwas,
                Surajgarh, Rajasthan, 333033
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-lg text-green-800" />
              <p className="text-[16px]">+91 7427003708</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-lg text-green-800" />
              <p className="text-[16px]">info@naturalmilkworld.com</p>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-green-800">Company</h3>
            <a href="#" className="hover:text-green-700">
              About us
            </a>
            <a href="#" className="hover:text-green-700">
              Rate us
            </a>
            <a href="#" className="hover:text-green-700">
              Contact us
            </a>
            <a href="#" className="hover:text-green-700">
              Blogs
            </a>
            <a href="#" className="hover:text-green-700">
              Bulk Order Inquiry
            </a>

            {/* Social Links */}
            <div className="flex gap-3 pt-3">
              <motion.a
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                href="https://wa.me/917427003708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-green-700 transition-all"
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-green-700 transition-all"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-green-700 transition-all"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-green-700 transition-all"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 3 - Policies */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-green-800">Policies</h3>
            <a href="#" className="hover:text-green-700">
              Payment policy
            </a>
            <a href="#" className="hover:text-green-700">
              Privacy policy
            </a>
            <a href="#" className="hover:text-green-700">
              Return policy
            </a>
            <a href="#" className="hover:text-green-700">
              Shipping policy
            </a>
            <a href="#" className="hover:text-green-700">
              Terms & conditions
            </a>
          </motion.div>

          {/* Column 4 - My Account */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-green-800">My Account</h3>
            <a href="#" className="hover:text-green-700">
              My account
            </a>
            <a href="#" className="hover:text-green-700">
              My cart
            </a>
            <a href="#" className="hover:text-green-700">
              Order history
            </a>
            <a href="#" className="hover:text-green-700">
              My wishlist
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default  Footer ; 