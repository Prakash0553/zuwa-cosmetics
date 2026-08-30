import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

const ShoppingCart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-6 z-50 w-full max-w-[550px] h-[60vh] bg-white rounded-3xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-8">
        <h2 className="text-2xl font-bold text-[#991b60]">Shopping Cart</h2>

        <button
          onClick={onClose}
          className="cursor-pointer text-3xl text-red-600"
        >
          <FaXmark />
        </button>
      </div>

      {/* Empty Cart */}
      <div className="flex h-[45%] items-center justify-center overflow-auto">
        <p className="text-[#838897]">Your shopping cart is empty.</p>
      </div>

      {/* Buttons */}
      <div className="px-4 flex items-center justify-between">
        <button
          type="submit"
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-5 py-3 font-semibold text-[13px] text-white "
        >
          <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

          <span className="relative z-10 text-sm">VIEW CART</span>
        </button>

        <button
          type="submit"
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-5 py-3 font-semibold text-[13px] text-white "
        >
          <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

          <span className="relative z-10 text-sm">CHECKOUT</span>
        </button>
      </div>

      <div className="w-full text-center mt-5 ">
        <Link className="font-bold text-sm hover:underline hover:text-pretty uppercase">
          or continue shopping
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
