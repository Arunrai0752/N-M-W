import React from "react";
import Cow from "../../assets/Cow1.webp";

const Welcomepage = () => {
  return (
    <main>
      <div className="xl:flex grid items-center justify-center min-w-full">
        <div className="h-auto bg-white flex justify-center items-center w-full xl:w-1/2">
          <img src={Cow} alt="Natural Milk World Cow" className="h-80" />
        </div>

        <div className="h-auto xl:w-1/2 w-full gap-6 md:gap-12 flex font-medium flex-wrap py-20 max-w-md text-center sm:text-start md:max-w-2xl">
          <h1 className="text-center md:text-start w-full lg:text-4xl text-green-800">
            Welcome To Natural Milk World
          </h1>

          <p className="lg:text-xl">
            It’s all about purity, freshness, and tradition here. At Natural Milk World, we bring you the
            unmatched taste of Desi Cow Ghee, Buffalo Ghee, Organic Mustard Oil, handmade Green Chilli Pickle,
            Kair Pickle, and many more homemade delights — straight from our farms to your kitchen.
          </p>

          <button className="sm:w-fit w-full px-10 py-5 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Welcomepage;
