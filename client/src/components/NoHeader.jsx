import { FaCartShopping } from "react-icons/fa6";
import rect1 from "../assets/rect1.webp";
import rect2 from "../assets/rect2.webp";
import rect3 from "../assets/rect3.webp";
import rect4 from "../assets/rect4.webp";

const products = [
  {
    image: rect1,
    category: "Retinol + Hyaluronic Acid Face Serum - 30ml",
    products: 5,
  },
  {
    image: rect2,
    category: "Kojic Acid Sunscreen Lotion SPF 50-200 ml",
    products: 8,
  },
  {
    image: rect3,
    category: "Kojic acid 2% serum 30 ml",
    products: 6,
  },
  {
    image: rect4,
    category: "Sophia Brightening Facial Serum 30 ml",
    products: 4,
  },
];

const NoHeader = () => {
  return (
    <div className="w-full bg-[#991b60]">
      <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
      {products.map((product, index) => (
        <div key={index} className="">

          {/* Image */}
          <div className="w-full ">
            <img
              src={product.image}
              alt={product.category}
              className="w-full rounded-2xl"
            />
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between px-2 mt-3 gap-2 ">
            <h3 className="text-xl  font-semibold text-white">
              {product.category}
            </h3>

            <button
              type="submit"
              className="group relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-2xl bg-white px-3 py-3 mb-4 mt-4 font-semibold text-[13px] text-[#e84cb0] hover:text-white"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#e84cb0] transition-all duration-500 ease-out group-hover:h-full" />

              <span className="relative z-10 text-base">
                ADD To CART
              </span>

              <FaCartShopping className="relative z-10 text-xl" />
            </button>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default NoHeader;