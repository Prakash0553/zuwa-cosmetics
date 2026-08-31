import { Delete } from "lucide-react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import {
  useFetchCart,
  useUpdateProduct,
  useRemoveCart,
} from "../hooks/useCart";

const Cart = () => {
  const user = useSelector((state) => state.auth.user);

  const { data: products, isLoading, error } = useFetchCart(user?._id);
  const updateProduct = useUpdateProduct();
  const removeCart = useRemoveCart();

  const items = products?.data?.items || [];

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">All Products</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040] hover:text-[#e846ad]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer hover:text-[#e846ad]">
            Products
          </span>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_350px] my-22 md:p-4 p-6">
        {/* CART */}
        <div className="min-w-0">
          {/* HEADER */}
          <div className="hidden h-16 items-center rounded-2xl bg-[#fbe8f6] px-6 md:grid md:grid-cols-[minmax(0,1fr)_180px_160px_100px_50px] md:gap-6">
            <h2 className="text-base font-semibold text-black">Products</h2>

            <h2 className="text-base font-semibold text-black">Price</h2>

            <h2 className="text-base font-semibold text-black">Quantity</h2>

            <h2 className="text-base font-semibold text-black">Total</h2>

            <div />
          </div>

          {/* PRODUCTS */}
          {products &&
            products?.data?.items?.map((item) => (
              <div
                key={item.productId}
                className="relative border-b border-gray-200 py-8 md:grid md:grid-cols-[minmax(0,1fr)_160px_200px_120px_40px] md:items-center md:gap-6"
              >
                {/* PRODUCT */}
                <div className="mb-6 flex items-center gap-5 md:mb-0">
                  <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-[#fceafa] p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-semibold leading-tight text-gray-800">
                    {item.name}
                  </h3>
                </div>

                {/* PRICE */}
                <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
                  <span className="text-gray-500 md:hidden">Price</span>

                  <span className="text-sm font-semibold text-black">
                    Rs.{item.price}
                  </span>
                </div>

                {/* QUANTITY */}
                <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
                  <span className="text-gray-500 md:hidden">Quantity</span>

                  <div className="flex h-[44px] w-32 items-center justify-between rounded-2xl border border-gray-200 px-7">
                    <button
                      type="button"
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        updateProduct.mutate({
                          userId: user._id,
                          productId: item.productId,
                          quantity: item.quantity - 1,
                        })
                      }
                      className="text-lg font-semi text-gray-400 hover:text-black disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="text-sm font-semibold text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateProduct.mutate({
                          userId: user._id,
                          productId: item.productId,
                          quantity: item.quantity + 1,
                        })
                      }
                      className="text-lg font-semibold text-gray-400 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
                  <span className="text-gray-500 md:hidden">Total</span>

                  <span className="text-sm font-semibold text-black">
                    Rs.{item.price * item.quantity}
                  </span>
                </div>

                {/* DELETE */}
                <button
                  type="button"
                  onClick={() =>
                    removeCart.mutate({
                      userId: user._id,
                      productId: item.productId,
                    })
                  }
                  className="absolute right-8 top-22 text-red-500 hover:text-red-700"
                  aria-label="Remove product"
                >
                  <Delete />
                </button>
              </div>
            ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="h-fit rounded-2xl bg-[#fbe8f6] lg:p-4 p-12">
          <h2 className="text-[24px] font-semibold text-black text-center">
            Order Summary
          </h2>

          <div className="my-4 border-t border-[#d5c5d1]" />

          {/* SUBTOTAL */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-black">Subtotal:</span>

            <span className="text-sm font-semibold text-gray-600">
              {subtotal}
            </span>
          </div>

          <div className="my-7 border-t border-[#d5c5d1]" />

          {/* DISCOUNT */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-black">Discounts:</span>

            <span className="text-sm font-semibold text-gray-600">
              discount
            </span>
          </div>

          <div className="my-4 border-t border-[#d5c5d1]" />

          {/* GRAND TOTAL */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-black">Grand Total:</span>

            <span className="text-sm font-semibold text-gray-600">
              grandtotal
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="button"
            className="mt-6 w-[180px] lg:w-full rounded-2xl bg-[#e83da8] py-4 text-base font-semibold text-white transition hover:bg-[#d92f98]"
            onClick={() => console.log("Place order")}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
