import ReviewCard from "./ReviewCard";
import ashma from "../assets/ashma.webp";

const reviews = [
  {
    image: ashma,
    name: "Ashma",
    rating: 5,
    review: "i just love the product and yesley kam garxa hai❤️",
  },
  {
    image: ashma,
    name: "Sita",
    rating: 5,
    review: "Amazing product. I really loved the quality and results.❤️",
  },
  {
    image: ashma,
    name: "Prakriti",
    rating: 4,
    review: "Really good product and the delivery was also very fast.❤️",
  },
];

const Review = () => {
  return (
    <div className="px-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-2 text-center py-16">
        What Our Customer Say
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>

      <button
        type="submit"
        className=" group relative  cursor-pointer content-center overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 my-12 font-semibold text-[13px] text-white hover:text-white f"
      >
        <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl  transition-all bg-[#991b60] duration-500 ease-out group-hover:h-full" />

        <span className="relative z-10 text-base">READ ALL REVIEWS</span>
      </button>
    </div>
  );
};

export default Review;
