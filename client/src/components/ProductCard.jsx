import { FaCartShopping, FaWhatsapp } from "react-icons/fa6";
import { Heart } from "lucide-react"

const ProductCard = ({ image, category, name, price }) => {
  return (
    <div className="w-full max-w-[333px]">
      {/* Product Image Section */}
      <div className="relative h-[290px] w-full overflow-hidden rounded-[28px] bg-[#f1f0f3]">
        {/* Heart */}
        <button className="bg-[#f9ddef] absolute left-3 top-2 border-[#e5e5e5] p-2.5 transition rounded-full  cursor-pointer active:scale-95 z-20">
          <Heart className="w-8 h-8 text-[#991b60]" />
        </button>

        {/* Price Badge */}
        <div
          className="
            absolute right-0 top-0 z-20
            flex h-[90px] w-[110px]
            items-center justify-center
            bg-[#efa5d5]
            text-center
            text-2xl font-bold text-[#1e1e1e]
            [clip-path:polygon(0_0,100%_0,100%_100%,85%_92%,75%_100%,63%_90%,50%_100%,38%_90%,25%_100%,12%_88%,0_92%,10%_78%,0_68%,10%_55%,0_45%,10%_32%,0_20%)]
          "
        >
          <div>
            <p className="text-[#1e1e1e] text-lg font-medium">Rs</p>
            <small>{price}</small>
          </div>
        </div>

        {/* Main Product Image */}
        <div className="flex h-full items-center justify-center px-7 pt-8 z-15">
          <img
            src={image}
            width={200}
            alt={name}
            className="h-auto w-full max-h-[75%] object-contain transition transform duration-300 ease-out hover:scale-[112%] overflow-x-hidden"
          />
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-[#71717b]">{category}</p>

        <h2 className="mt-2 text-xl font-normal text-[#3e3e3e]">{name}</h2>

        {/* Add To Cart */}
        <button
          type="submit"
          className="group relative overflow-hiddens   rounded-2xl bg-[#e846ad] px-4 py-3 font-semibold text-[13px] text-white cursor-pointer flex items-center justify-center gap-3 mb-4 mt-4"
        >
          <span className="absolute inset-x-0 bottom-0 h-0  bg-[#991b60] transition-all duration-500 ease-in group-hover:h-full rounded-2xl" />
          <span className="relative z-10 text-base">Add to cart</span>
          <FaCartShopping className="text-xl" />
        </button>

        {/* WhatsApp */}
        <button
          type="submit"
          className="group relative overflow-hiddens   rounded-2xl bg-[#25d366] px-4 py-3 font-semibold text-[13px] text-white cursor-pointer flex items-center justify-center gap-3 hover:bg-[#1faf54]"
        >
          <FaWhatsapp className="text-xl" />
          <span className="relative z-10 text-base">Message on Whatsapp</span>
          
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
