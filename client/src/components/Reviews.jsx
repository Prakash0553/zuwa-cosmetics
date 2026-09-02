import ReviewCard from "./ReviewCard";
import { useGetAllReviews } from "../hooks/useReview";


const Review = () => {
  const { data } = useGetAllReviews();
  //console.log(data);

  return (
    <div className="px-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-2 text-center py-16">
        What Our Customer Say
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.reviews?.slice(0,3).map((review) => (
          <ReviewCard
            key={review._id}
            image={review.userId?.image}
            name={review.userId?.name}
            rating={review.rating}
            review={review.comment}
          />
        ))}
      </div>

      <button
        type="submit"
        className=" group relative  cursor-pointer content-center overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 my-12 font-semibold text-[13px] text-white hover:text-white f"
      >
        <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl  transition-all bg-[#991b60] duration-500 ease-out group-hover:h-full" />

        <span className="relative z-10 text-sm">READ ALL REVIEWS</span>
      </button>
    </div>
  );
};

export default Review;
