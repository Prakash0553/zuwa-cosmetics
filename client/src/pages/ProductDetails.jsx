import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { FaMinus, FaPlus, FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useProductById } from "../hooks/useProducts";
import { useAddToCart } from "../hooks/useCart";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import ReviewModal from "../components/ReviewModal";

const ProductDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [quantity, setQuantity] = useState(1);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const { data: product, isLoading, error } = useProductById(id);
  const { mutate, isPending } = useAddToCart();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  //console.log(product);

  const handleAddToCart = () => {
    mutate(
      {
        userId: user._id,
        productId: product._id,
        quantity: quantity,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message || "Added to cart!");
        },

        onError: (error) => {
          toast.error(error.response?.data?.message || "Failed to add to cart");
        },
      },
    );
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-[#fbe8f6] px-4 py-3 text-lg text-[#404040]">
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/">
            <span className="text-sm hover:text-[#e846ad]">Home</span>
          </Link>
          <FaChevronRight className="text-sm text-gray-400" />
          <Link to="/products">
            <span className="text-sm hover:text-[#e846ad]">Products</span>
          </Link>
          <FaChevronRight className="text-sm text-gray-400" />
          <span className="text-sm">Vitamin C effervescent tablets</span>
        </div>
      </div>

      {/* Product */}
      <div className="grid grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:px-5">
        {/* Left */}
        <div>
          <div className="flex h-[580px] items-center justify-center rounded-2xl bg-[#f0eff2] ">
            <img
              src={product.image}
              alt=""
              className="h-full w-full px-16 py-4 object-cover rounded-2xl"
            />
          </div>

          <div className="mt-4 h-28 w-28 rounded-2xl border-2 border-[#e846ad] bg-[#f1f1f3] p-3">
            <img
              src={product.image}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <div className="">
            <p className="text-base text-[#404040] font-semibold">
              {product.category.name}
            </p>

            <div className="flex items-center justify-between gap-2">
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#3e3e3e]">
                {product.name}
              </h1>
              <span className="rounded-xl bg-[#fbe8f6] px-3 py-2 font-semibold text-[#459e75]">
                {product.stock > 0 ? " IN STOCK" : "EMPTY"}
              </span>

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbe8f6] text-2xl text-[#991b60]">
                <FaHeart />
              </button>
            </div>
          </div>

          <p className="mt-7 text-xl font-semibold text-[#991b60]">
            {product.price}
          </p>

          <p className="mt-6 text-base leading-relaxed text-[#2e2e2e]">
            {product.description}
          </p>

          <hr className="my-8 border-[#d2cdce]" />

          <p className="text-sm font-semibold">Quantity:</p>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div className="flex h-16 w-72 items-center justify-between rounded-2xl border px-8">
              <button
                className="text-gray-400"
                type="button"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <FaMinus />
              </button>

              <span className="text-xl font-semibold">{quantity}</span>

              <button
                className="text-gray-400"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              type="submit"
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 font-semibold text-[13px] text-white flex items-center gap-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

              <span className="relative z-10 text-sm">
                {isPending ? "Adding ..." : "ADD TO CART"}
              </span>
              <FaCartShopping className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* review */}
      <div className="w-full bg-[#f7f7f7]">
        <div className="flex items-center justify-between px-6 py-12 mb-20">
          <h2 className="text-3xl font-semibold">Customer Reviews</h2>
          <button
            onClick={() => setIsReviewOpen(true)}
            type="submit"
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 font-semibold text-[13px] text-white flex items-center gap-2"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

            <span className="relative z-10 text-sm uppercase">
              Write a review
            </span>
          </button>
        </div>
        <ReviewModal
          isOpen={isReviewOpen}
          onClose={() => setIsReviewOpen(false)}
          productId={product._id}
          userId={user._id}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
