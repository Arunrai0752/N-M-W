import { FaArrowRight } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main className="min-h-auto bg-black/10 flex flex-col">
      {/* Breadcrumb */}
      <div className="flex items-center px-10 min-h-[60px] bg-gray-50 ">
        <h1 className="flex gap-3 items-center text-gray-700 font-medium text-lg">
          <Link to={"/"} className="hover:text-green-700 cursor-pointer">Home</Link>
          <FaArrowRight className="text-green-800" />
          <p className="font-semibold">Your shopping cart</p>
        </h1>
      </div>

      {/* Empty Cart Section */}
      <div className="flex flex-col justify-center gap-5 items-center flex-1 text-center py-20 px-4">
        <h2 className="text-3xl   font-semibold text-gray-800 mb-3">
          Your <span className="text-green-700">cart</span> is currently
          <span className="text-green-700">empty!</span>
        </h2>

        <div className="text-9xl text-gray-800 my-8">
          <BsCartPlus />
        </div>

        <Link
          to="/"
          className="bg-green-700 text-white px-10 py-3 rounded-full font-semibold hover:bg-green-800 transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
};

export default Cart;
