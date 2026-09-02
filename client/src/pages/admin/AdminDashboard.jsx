import { Link, useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer">Admin Dashboard</span>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto border-2 border-[#e5e6dc] my-12 pb-8 px-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-center my-6">
          Admin Controls</h3>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
          <button
            type="submit"
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-5 py-4 font-semibold text-white text-center"
            onClick={()=> navigate("/admin/category")}
          >
            <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

            <span className="relative z-10 text-lg">Manage Categories</span>
            
          </button>

          <button
            type="submit"
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-5 py-4 font-semibold text-white text-center"
            onClick={()=> navigate("/admin/products")}
          >
            <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

            <span className="relative z-10 text-lg">📦 Manage Products</span>          
          </button>

          <button
            type="submit"
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-5 py-4 font-semibold text-white text-center"
            onClick={()=> navigate("/admin/order")}
          >
            <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />
            <span className="relative z-10 text-lg">🚚 Manage Orders</span>     
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
