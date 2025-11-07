import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className=" inset-0  z-99 fixed top-0 scroll-0  flex flex-col justify-center items-center min-h-screen bg-[#0d1117] text-center px-6">
      {/* Glowing 404 Number */}
      <h1 className="text-7xl md:text-8xl font-medium text-green-500 mb-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-2">
        Oops! Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 mb-10 max-w-md">
        The page you’re looking for doesn’t exist, has been moved, or is lost in
        the digital void.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
      >
        <FaArrowLeft />
        Go Back Home
      </Link>

      {/* Decorative Glow */}
      <div className="absolute w-72 h-72 bg-green-500/20 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>
    </main>
  );
};

export default NotFound;
