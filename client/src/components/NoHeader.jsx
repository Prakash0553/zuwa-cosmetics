import { FaCartShopping } from "react-icons/fa6";
import { useProducts } from "../hooks/useProducts";

const NoHeader = () => {
  const {data: products, isLoading, error} = useProducts()

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-full bg-[#991b60]">
      <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
      {products.slice(0,4).map((product, index) => (
        <div key={index} className="">

          {/* Image */}
          <div className="w-full sm:h-[250px] md:-h-[320px] lg:h-[380px]">
            <img
              src={product.image}
              alt={product.category}
              className="w-full rounded-2xl h-full object-cover"
            />
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between px-2 mt-3 gap-2 ">
            <h3 className="text-xl  font-semibold text-white">
              {product.category.name}
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