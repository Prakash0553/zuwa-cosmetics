import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CategoryCard from "./CategoryCard";
import pro1 from "../assets/pro1.webp"
const categories = [
  {
    products: 5,
    image: pro1,
    category: "Others",
  },
  {
    products: 8,
    image: pro1,
    category: "Soap",
  },
  {
    products: 6,
    image: pro1,
    category: "Serum",
  },
  {
    products: 4,
    image: pro1,
    category: "Toner",
  },
  {
    products: 7,
    image: pro1,
    category: "Sunscreen",
  },
];

const BrowseCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < categories.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full my-20">
      <h1 className="text-4xl font-semibold mb-16 mt-20 text-center">Browse Categories</h1>  

    <div className="relative w-full mx-auto">
      {/* Slider */}
      <div className="overflow-hidden">

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-4"
            >
              <CategoryCard
                image={cat.image}
                category={cat.category}
                products={cat.products}
              />
            </div>
          ))}
        </div>

      </div>


      {/* Previous */}
      <button
        onClick={previousSlide}
        disabled={currentIndex === 0}
        className="absolute left-8 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#e84cb0]"
      >
        <FaArrowLeft />
      </button>


      {/* Next */}
      <button
        onClick={nextSlide}
        disabled={currentIndex >= categories.length - 4}
        className="absolute right-8 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#e84cb0]"
      >
        <FaArrowRight />
      </button>

    </div>
    </div>
  );
};

export default BrowseCategory;