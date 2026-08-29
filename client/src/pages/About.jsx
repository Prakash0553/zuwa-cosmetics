import { Link } from "react-router";

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">About Us</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer">About us</span>
        </div>
      </div>

      <div className="max-w-[1280px] py-10 md:py-20 px-10 md:px-6">
        <div>
          <p className="text-[#2e2e2e] text-[16px] font-500">
            <strong>Zuwa Cosmetics</strong> is a skincare brand founded by{" "}
            <strong>Dr. Suav Zuwa</strong> , a doctor-in-training, and{" "}
            <strong>Ms. Sheilla Mae Manto</strong> , a registered nurse and
            former BPO executive. The couple established Zuwa Enterprises Pvt.
            Ltd. in Nepal and Zuwa Enterprises Inc. in the Philippines, focusing
            on delivering effective and affordable skincare solutions.
          </p>
          <hr className="text-[#e2e1e1] my-8" />
        </div>

        <div>
          <h3 className="text-[24px] font-semibold text-[#991b60] mb-4">
            🌿 Brand Philosophy
          </h3>
          <p className="text-[#2e2e2e] text-[16px] font-500">
            Zuwa Cosmetics aims to provide accessible skincare products that
            promote holistic living. Their offerings are designed to be both
            effective and affordable, ensuring that quality skincare is
            available to a wide audience.
          </p>
          <hr className="text-[#e2e1e1] my-8" />
        </div>

        <div>
          <h3 className="text-[24px] font-semibold text-[#991b60] mb-4">
            🧴 Product Range
          </h3>
          <p className="text-[#2e2e2e] text-[16px] font-500 mb-4">
            The brand's product line includes items such as:
          </p>
          <ul className="space-y-3 pl-4">
            <li className="list-disc">
              <strong>Kojic Acid Soap:</strong> Known for its skin-brightening properties.
            </li>
            <li className="list-disc">
              <strong>Niacinamide Toner with Alpha Arbutin:</strong>Targets uneven skin tone and enhances skin texture.
            </li>
            <li className="list-disc">
              <strong>Hyaluronic Aqua Gel Sunscreen SPF 50:</strong>Provides broad-spectrum sun protection while hydrating the skin.
            </li>
            <li className="list-disc">
              <strong>Glutathione Skin Whitening Cream:</strong>Aims to lighten dark spots and promote an even skin tone. These products are formulated to cater to various skin concerns, offering solutions that are both effective and budget-friendly.
            </li>
          </ul>
          <hr className="text-[#e2e1e1] my-8" />
        </div>

        <div>
          <h3 className="text-[24px] font-semibold text-[#991b60] mb-4">
            🌍 Availability
          </h3>
          <p className="text-[#2e2e2e] text-[16px] font-500">
            Zuwa Cosmetics products are available through various online platforms, including{" "} Jeevee . The brand has a presence in over 300 retail shops and distributors across Nepal, making their products widely accessible to the local population.
          </p>
          <hr className="text-[#e2e1e1] my-8" />
        </div>

      </div>
    </div>
  );
};

export default About;
