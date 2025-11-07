import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Blogs } from "../../services/Blogs/Blog";
import { fadeUp, cardVariant, buttonVariants } from "../../motion/Motions";

const Ourblog: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <motion.main variants={fadeUp} initial="initial" animate="animate" exit="exit">
      <div className="h-auto w-screen py-20 bg-white">
        <motion.h1 variants={fadeUp} className="text-5xl text-center w-full  text-[#0c7748]">
          Our Blogs
        </motion.h1>

        <div className="w-full flex justify-center">
          <div
            ref={scrollRef}
            className="grid grid-cols-1 max-w-[90%] sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 px-6 py-10 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {Blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
              >
                <img src={blog.image} alt={blog.title} className="w-120" />
                <div className="p-5">
                  <h2 className="text-lg font-medium text-gray-500 mb-1">
                    {blog.title}
                  </h2>
                  <p className="text-md text-black font-bold mb-1">
                    By {blog.author}
                  </p>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {blog.description}
                  </p>
                  <a
                    href={blog.readMoreLink}
                    className="text-black font-semibold text-md hover:underline"
                  >
                    Read more →
                  </a>
                  <p className="text-md text-black mt-2">
                    {blog.publishedDate}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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

export default Ourblog;
