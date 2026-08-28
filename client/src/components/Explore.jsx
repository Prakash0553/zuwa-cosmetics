import { Link } from "react-router";
import soap from "../assets/cleanser.webp";
import toner from "../assets/treatment.webp";
import sunscreen from "../assets/sunprotect.webp";
import serum from "../assets/moisture.webp";
import mask from "../assets/mask.webp";
import cleanser from "../assets/pump.webp";
import wave from "../assets/wave.svg"

const Explore = () => {
  return (
    <div className=" bg-[#f7aadf] pt-4 relative">
      <div className="max-w-[1280px] px-8">
        <div className=" flex flex-col items-center py-8">
          <h1 className="text-4xl font-semibold mb-2">Explore By Skin Need</h1>
          <p className="text-[#404040] py-2">Handpicked just for you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 ipad:grid-cols-6 lg:grid-cols-6 gap-5 pb-8">

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={soap} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Soap
            </p>
          </div>

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={toner} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Toner
            </p>
          </div>

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={sunscreen} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Sunscreen
            </p>
          </div>

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={serum} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Serum
            </p>
          </div>

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={mask} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Hair Mask
            </p>
          </div>

          <div className="group flex flex-col items-center transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="flex h-38 w-38 items-center justify-center rounded-full bg-white transition duration-500 ease-in-out group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <Link>
                <img src={cleanser} width={80} alt="Soap" />
              </Link>
            </div>

            <p className="pt-3 text-xl font-semibold transition duration-500 ease-in-out group-hover:text-[#991b60]">
              Cleanser
            </p>
          </div>
        </div>
      </div>

      <div className="absolute">
        <img src={wave} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Explore;
