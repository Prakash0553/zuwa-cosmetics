import lips from "../assets/lips.svg";
import tooth from "../assets/tooth.svg";
import light from "../assets/light.svg";
import hand  from "../assets/hand1.svg";
import face from "../assets/face.webp";


const ProductHighlight = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[750px] max-w-[1920px] flex-col lg:flex-row py-14">
        {/* left div */}
        <div className="flex w-full  lg:w-1/3">
          <div className="max-w-[620px] pl-5">
            <h2 className="lg:text-4xl text-5xl font-semibold text-[#3e3e3e]">
              Pure <span>Coconut Oil</span>
            </h2>

            <p className="py-5 text-lg leading-normal text-[#404040]">
              Zuwa Cosmetics Pure Coconut Oil (100ml) is a versatile, 100% vegan and organic product designed to enhance your daily wellness and beauty routines. Sourced from natural ingredients, it offers multiple benefits for oral care, skin, and hair
            </p>

            <button
              type="submit"
              className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-9 py-4 font-semibold text-[13px] text-white cursor-pointer"
            >
              <span className="absolute inset-x-0 bottom-0 h-0  bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full rounded-2xl" />
              <span className="relative z-10">SEE OFFERS</span>
            </button>
          </div>
        </div>

        {/* right div */}
        <div className="relative min-h-[700px] w-full lg:w-2/3">
          {/* bg-image */}
          <img
            src={face}
            alt="Pure Coconut Oil"
            className=" absolute bottom-0 left-1/2 z-0 h-[75%] w-[75%] -translate-x-1/2 object-cover object-center sm:h-[80%] sm:w-[70%] lg:h-[85%] lg:w-[72%]"
          />

          {/* card */}

          {/* Top card */}
          <div className=" absolute left-[30%] top-5 z-10 w-[170px] -translate-x-1/2 rounded-2xl bg-[#fbe8f6]  text-center lg:top-5 px-2 py-4">

            <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white">
              <img src={lips} alt="" srcset="" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold  text-[#3e3e3e]">
              For Skin & Lip Care
            </h3>

            <p className="mt-2 leading1.4 text-[14px] text-[#404040]">
              Hydrate and protect with nourishing formulas.
            </p>
          </div>

          {/* Left bottom card */}
          <div className=" absolute bottom-[20%] left-4 z-10 w-[170px] rounded-2xl bg-[#fbe8f6]  text-center sm:left-10 lg:left-0 px-2 py-4">

            <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white">
              <img src={tooth} alt="" srcset="" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold  text-[#3e3e3e]">
              For Skin & Lip Care
            </h3>

            <p className="mt-2 leading1.4 text-[14px] text-[#404040]">
              Hydrate and protect with nourishing formulas.
            </p>
          </div>

          {/* Right card */}
          <div className=" absolute bottom-[20%] left-[67%] z-10 w-[170px] rounded-2xl bg-[#fbe8f6]  text-center sm:right-10 lg:right-0 px-2 py-4">

            <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white">
              <img src={lips} alt="" srcset="" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold  text-[#3e3e3e]">
              For Skin & Lip Care
            </h3>

            <p className="mt-2 leading1.4 text-[14px] text-[#404040]">
              Hydrate and protect with nourishing formulas.
            </p>
          </div>

          {/* Bottom right card */}
          <div className=" absolute bottom-[2%] right-[34%] z-10 w-[170px] rounded-2xl bg-[#fbe8f6] text-center px-2 py-4">

            <div className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white">
              <img src={lips} alt="" srcset="" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold  text-[#3e3e3e]">
              For Skin & Lip Care
            </h3>

            <p className="mt-2 leading1.4 text-[14px] text-[#404040]">
              Hydrate and protect with nourishing formulas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
