import leaf from "../assets/leaf1.png";
import banner from "../assets/banner.webp"
import { Link } from "react-router";
const Banner = () => {
  return (
    <section className="relative flex min-h-[520px] w-full overflow-hidden bg-linear-to-b from-[#f7aadf] to-[#e7dcf2]">
      {/* left div */}
      <div className="relative flex md:w-1/3 w-full items-center overflow-hidden pl-6">
        {/* rotate background image */}
        <div
          className=" absolute -left-32 -top-24 h-[600px] w-[600px] rotate-[20deg] bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${leaf})` }}
        ></div>

        {/* Left content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Welcome to Zuwa Cosmetics
          </h1>

          <p className="my-8 text-xl text-gray-700">
            Discover the best in beauty and skincare.
          </p>
          <Link to="/shop">
          <button
                type="submit"
                className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white
                cursor-pointer"
              >
                <span className="absolute inset-x-0 bottom-0 h-0  bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full rounded-2xl" />
                <span className="relative z-10">SHOP NOW</span>
              </button>
              </Link>

        </div>
      </div>

      {/* right div*/}
      <div className="relative flex w-full md:w-2/3 items-end justify-center overflow-hidden">
        {/* Main image */}
        <div
          className=" relative z-10 h-full w-full bg-contain bg-bottom bg-no-repeat md:pr-8"
        >
          {/* MAIN IMAGE */}
          <img
            src={banner}
            alt="Zuwa Cosmetics"
            className=" relative z-10 h-full w-auto object-contain object-bottom"
          />
        </div>

        {/* Small background image from right */}
        <div
          className=" absolute right-[-40px] top-8 z-0 h-56 w-56 bg-contain bg-center bg-no-repeat">         
        </div>
      </div>
    </section>
  );
};

export default Banner;

