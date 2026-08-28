import wave from "../assets/bgwave.svg";
import hand from "../assets/hand.webp";
import love from "../assets/love.webp";
import fast from "../assets/fast.webp";
import plant from "../assets/plant.webp";

const offers = [
  {
    img: hand,
    title: "Exciting Offers & Combos",
    description:
      "Real results, real reviews. Our community trusts us for visible skin transformation and honest care.",
  },
  {
    img: love,
    title: "Loved by 1000+ customers",
    description:
      "Discover high-quality beauty products carefully selected for you.",
  },
  {
    img: fast,
    title: "Fast & Reliable Shipping",
    description:
      "Your glow-up shouldn’t wait — we deliver across Nepal (or your country) quickly and reliably.",
  },
  {
    img: plant,
    title: "Clean & Safe Ingredients",
    description:
      "Every product is crafted with natural, skin-loving ingredients — no harmful chemicals, no compromise.",
  },
];

const ChooseUs = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img src={wave} alt="" srcset="" />
      </div>

      <div className="bg-[#fbe8f6] pb-16 ">
        <h2 className="text-center text-4xl font-semibold">
          Why Choose Us?
        </h2>
        <p className="text-[#404040] py-2 text-center md:px-90 px-20">
          We believe beauty should be clean, effective, and empowering — here’s why thousands trust us.
        </p>
      </div>

      <div className="bg-[#fbe8f6] grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-7 px-6">
        {offers.map((offer, index) => (
          <div key={index} className="w-[290px] h-[200px] relative transition duration-500 ease-in-out hover:-translate-y-5">
            <div className="bg-white rounded-2xl w-full h-full p-6 ">
              <h3 className="text-xl font-semibold mt-8 text-center ">{offer.title}</h3>

              <p className="text-sm text-[#404040] text-center pt-4 leading-5">{offer.description}</p>
            </div>

            <div className="w-[74px] h-[74px] rounded-full absolute -top-[37px] left-1/2 -translate-x-1/2 bg-[#fbe8f6] flex items-center justify-center">
              <img src={offer.img} width={42} alt={offer.title} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChooseUs;
