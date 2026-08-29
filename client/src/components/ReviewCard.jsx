const ReviewCard = ({ image, name, rating, review }) => {
  return (
    <div className="relative w-full max-w-[780px] min-h-[300px] rounded-2xl bg-[#fbe8f6] px-6 py-5">
      <div className="flex justify-between">
        <div>
          <img
            src={image}
            alt=""
            className="h-[66px] w-[66px] rounded-full border-4 border-white object-cover"
          />
          <h3 className="mt-5 text-base font-semibold text-[#1d1920]">
            {name}
          </h3>
        </div>

        <span className=" text-[110px] leading-none font-bold text-[#ed80c4]">
          ”
        </span>
      </div>

      <div className="mt-4 flex gap-2 text-lg text-[#e84cb0]">
        ★ ★ ★ ★ ★{rating}
      </div>

      <p className="mt-4 text-base leading-relaxed text-[#404040]">{review}</p>
    </div>
  );
};

export default ReviewCard;
