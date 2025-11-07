import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrackYourOrder = () => {
  const [orderId, setOrderId] = useState("");

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderId.trim()) {
      alert("Please enter a valid order ID!");
      return;
    }
    alert(`Wrong order ID: ${orderId}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Breadcrumb */}
      <div className="flex items-center px-10 min-h-[60px] bg-white shadow-sm">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-lg">
          <Link to="/" className="hover:text-green-700 cursor-pointer">
            Home
          </Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Track Your Order</p>
        </h1>
      </div>

      {/* Main Section */}
      <section className="flex flex-col justify-center items-center flex-1 px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Track Your Order
          </h1>
          <p className="text-gray-600 font-medium mt-2">
            Please enter your order ID
          </p>
        </div>

        {/* Order ID Input */}
        <form
          onSubmit={handleTrack}
          className="flex flex-col items-center w-full max-w-xl space-y-8"
        >
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Your order ID"
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-full font-semibold text-lg hover:bg-green-800 transition-all duration-300"
          >
            Track
          </button>

          <div className="w-full border-t border-gray-200 mt-8"></div>
        </form>
      </section>
    </main>
  );
};

export default TrackYourOrder;
