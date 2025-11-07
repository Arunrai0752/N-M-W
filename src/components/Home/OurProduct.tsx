import React from "react";
import { products } from "../../services/Product/Product.ts";

const OurProduct = () => {
  return (
    <main>
      <div className=" w-full h-auto  bg-gray-200 flex justify-center py-20 ">
        <div className=" max-w-[90vw] p-4 ">
          <h1 className="text-5xl text-center font-medium text-[#0c7748]">
            Our Products{" "}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="  transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative w-full h-90 overflow-hidden rounded-lg">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="absolute shadow rounded-xl hover:shadow-lg inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={item.image2}
                    alt={`${item.name} alternate`}
                    className="absolute shadow rounded-xl hover:shadow-lg inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>

                {/* Product Info */}
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

                <button className="mt-4 w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center pt-5 ">
            <button className=" bg-[#0C7748] px-4 py-2 rounded-3xl ">
              View All Product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurProduct;
