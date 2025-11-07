import React from "react";
import { features } from "../../services/Feature/feature";

const Feature = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 bg-white">
      <h1 className="text-[#0c7748] text-4xl md:text-5xl font-semibold text-center">
        Featured on mad4india.com
      </h1>

      {/* Feature Image */}
      <div className="flex justify-center items-center">
        {features.map((feature) =>
          <>
            <img
              src={feature.img}
              alt="Featured on Mad4India"
              className="rounded-2xl shadow-lg w-[90%] md:w-[100%] object-cover"
            />
          </>
        )}
      </div>

      {/* Read More Button */}
      <a
        href={"www.google.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0c7748] hover:bg-[#095c38] text-white px-6 py-3 rounded-3xl font-medium transition-all duration-300"
      >
        Read More
      </a>
    </div>
  );
};

export default Feature;
