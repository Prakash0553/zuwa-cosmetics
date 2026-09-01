import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateCategory } from "../../hooks/useCategory";

const AddCategory = () => {
  const { mutate, isPending } = useCreateCategory()

  const [formData, setFormData] = useState({
    name: "",
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
    data.append("image", formData.image);

    mutate(data, {
      onSuccess: (response) => {
        setFormData({
          name: "",
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
          Add Category
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4 "
        >
          <div className=" ">
            <label className=" block  text-base font-semibold text-[#555] mb-2">
              Category Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Category name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
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
              className="h-14 w-[500px] rounded-xl border text-sm border-gray-200 px-6  font-medium text-gray-700 outline-none placeholder:text-gray-200  focus:border-pink-500 focus:ring-2 focus:ring-pink-100 "
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white cursor-pointer mb-16"
          >
            {isPending ? "Creating..." : "Add Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
