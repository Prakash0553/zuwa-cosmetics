
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">Login</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040]">Home</Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040]">Login</span>
        </div>
      </div>
      <div className="min-h-screen bg-white px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex min-h-[90vh] w-full max-w-[1400px] flex-col justify-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Login */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-10 text-3xl font-bold text-[#3d3d3d] sm:text-5xl">
              Login
            </h1>

            <form className="space-y-8">

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

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#555]">
                  Password <span className="text-red-500">*</span>
                </label>

                <div className="relative flex h-14 w-full items-center rounded-xl border border-gray-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-100">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="h-full w-full rounded-xl px-6 pr-14 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 text-gray-500 transition hover:text-pink-500"
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                <input type="checkbox" name="remember" id="remember"/>
                <label 
                htmlFor="remember" className="pl-2 cursor-pointer text-sm">Remember me</label>
                </div>
                <div>
                  <Link to="/forget"
                  className="text-sm font-semibold hover:underline">
                  Forgot password?
                  </Link>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white
                cursor-pointer"
              >
                <span className="absolute inset-x-0 bottom-0 h-0  bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full rounded-2xl" />
                <span className="relative z-10">LOGIN</span>
              </button>
            </form>
          </div>

          {/* ================= LOGIN ================= */}
          <div className="w-full border-t border-gray-200 pt-10 lg:w-1/2 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="max-w-[700px]">
              <h2 className="text-3xl font-semibold leading-tight text-[#3d3d3d] sm:text-4xl lg:text-4xl">
                New Customer
              </h2>

              <p className="mt-2 mb-4 max-w-2xl text-sm leading-6 text-[#404040] sm:text-lg sm:leading-8">
                Be part of our growing family of new customers! Join us today and unclock a worlf of exclusive benifits, offers, and personalized experiencs.
              </p>

              <button
                type="submit"
                className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white cursor-pointer"
                onClick={() => navigate("/register")}
              >
                <span className="absolute inset-x-0 bottom-0 h-0  bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full rounded-2xl" />
                <span className="relative z-10">REGISTER</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
