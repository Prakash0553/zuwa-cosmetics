const AddProduct = () => {
  return (
    <div className="w-full max-w-[1020px]">
      <h1 className="text-4xl font-semibold mb-2 text canter">Add Products</h1>

      <div>
      <form className="space-y-8">
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#555]">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Full Name"
            className="h-14 w-full rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#555]">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="Enter your Email Address"
            className="h-14 w-full rounded-xl border border-gray-200 px-6 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#555]">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <div className="flex h-14 w-full overflow-hidden rounded-xl border border-gray-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-100">
            <div className="flex w-20 shrink-0 items-center justify-center bg-gray-100 text-base font-semibold text-gray-700 sm:w-24">
              +977
            </div>

            <input
              type="tel"
              placeholder="Enter your Phone Number"
              className="min-w-0 flex-1 px-4 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400 sm:px-6"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#555]">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={"password"}
            placeholder="Enter your Password"
            className="h-full w-full rounded-xl px-6 pr-14 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white cursor-pointer"
        >
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
