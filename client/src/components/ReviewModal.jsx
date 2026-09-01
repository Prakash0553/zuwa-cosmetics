import { useState } from "react";
import { useCreateReview, useGetReviews } from "../hooks/useReview";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ratings = [
  { label: "Excellent", stars: 5 },
  { label: "Very Good", stars: 4 },
  { label: "Average", stars: 3 },
  { label: "Poor", stars: 2 },
  { label: "Terrible", stars: 1 },
];

export default function ReviewModal({ isOpen, onClose, productId, userId }) {
  const [selectedRating, setSelectedRating] = useState(1);
  const [comment, setComment] = useState("");
  const { id} = useParams();

  const user = useSelector((state) => state.auth.user);
  //console.log(user)
  const { mutate, isPending } = useCreateReview();
  const { data } = useGetReviews(id);
  console.log(data)

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(
      {
        userId,
        productId,
        rating: selectedRating,
        comment,
      },
      {
        onSuccess: () => {
          toast.success("Review submitted successfully!");
          setComment("");
          setSelectedRating(1);
          onClose();
        },

        onError: (error) => {
          toast.error(
            error?.response?.data?.message || "Failed to submit review",
          );
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full h-[70vh] max-w-[680px] rounded-2xl bg-white px-8 py-8 shadow-2xl md:px-12 md:py-10">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-500 text-2xl text-red-500 hover:bg-red-500 hover:text-white"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="mb-4 text-xl font-semibold text-[#a51d63]">
          Leave a comment
        </h2>

        {/* Ratings */}
        <div className="mb-4 grid grid-cols-5 gap-2">
          {ratings.map((rating) => (
            <button
              key={rating.label}
              type="button"
              onClick={() => setSelectedRating(rating.stars)}
              className="flex flex-col items-center"
            >
              <div
                className={`mb-3 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  selectedRating === rating.stars
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300"
                }`}
              >
                {selectedRating === rating.stars && (
                  <span className="text-base text-white">✓</span>
                )}
              </div>

              <div className="flex text-lg gap=1 text-[#f6a21a]">
                {"★".repeat(rating.stars)}
              </div>

              <span className="mt-2 text-base text-black">{rating.label}</span>
            </button>
          ))}
        </div>

        {/* Comment */}
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="comment"
            className="mb-3 block text-base font-semibold text-gray-600"
          >
            Write your comment
          </label>

          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="h-[120px] w-full resize-none rounded-2xl border-2 border-gray-200 p-5 outline-none focus:border-[#e843a8] mb-2"
          />

          <button
            type="submit"
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 font-semibold text-[13px] text-white flex items-center gap-2"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

            <span className="relative z-10 text-sm uppercase">
              {isPending ? "SUBMITTING..." : "SUBMIT"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
