import { useState } from "react";
import { useCreateProduct } from "../../hooks//useProducts";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { mutate, isPending } = useCreateProduct();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("image", formData.image);

    mutate(data, {
      onSuccess: (response) => {
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          stock: "",
          image: null,
        });

        toast.success(response.message);
      },

      onError: (error) => {
        toast.error(error.response?.data?.message || "Something went wrong");
      },
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#fbf5f5] flex items-center justify-center">
      <div className="w-full max-w-[800px] bg-white rounded-3xl m-20">
        <h2 className="text-center my-12 text-2xl font-semibold">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4 "
        >
          <div className=" ">
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Product name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Product Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              required
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="category"
              required
              placeholder="Category ID"
              value={formData.category}
              onChange={handleChange}
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="stock"
              required
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="image"
              required
              accept="image/*"
              onChange={handleChange}
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white cursor-pointer mb-16"
          >
            {isPending ? "Creating..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
