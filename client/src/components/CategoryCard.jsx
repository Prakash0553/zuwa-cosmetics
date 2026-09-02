import { Link } from "react-router";

const CategoryCard = ({ image, category, categoryId, productCount }) => {
  return (
    <div className="max-w-[333px] bg-[#f0eff2] rounded-2xl pt-8">
      <div className="w-full h-[280px] flex items-center justify-center rounded-2xl relative">
        <img src={image} width={180} alt="" className="py-8" />

        <span className="text-xs max-h-[220px] font-bold text-black bg-[#e84cb0] rounded-lg absolute right-4 -top-2 px-4 py-2">
          {productCount} <span>Products</span>
        </span>
      </div>

      <div className="flex items-center justify-between bg-[#f7aadf] rounded-b-2xl px-3">
        <h3 className="text-[#3e3e3e] text-lg font-semibold">
          {category}
        </h3>

        <Link to={`/category/${categoryId}`}>
          <button
            type="button"
            className="group relative overflow-hidden rounded-2xl bg-white px-3 py-3 font-semibold text-[13px] text-[#e84cb0] cursor-pointer flex items-center justify-center gap-3 mb-4 mt-4 hover:text-white"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full rounded-2xl" />

            <span className="relative z-10 text-base">
              View Products
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;