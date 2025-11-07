import React from "react";
import certification from "../../assets/Certification.png";

const Certification = () => {
  return (
    <div className="h-auto w-screen flex flex-col gap-8 justify-center items-center py-10">
        <h1 className="text-3xl font-medium text-[#0c7748]">CERTIFICATION</h1>
      <img src={certification} alt="" className="w-150 " />
    </div>
  );
};

export default Certification;
