import { useMutation, useQuery } from "@tanstack/react-query";
import { createReview, getAllReviews, getReviews } from "../api/reviewApi";

export const useCreateReview = () => {
  return useMutation({
    mutationFn: createReview,
  });
};

export const useGetReviews = (productId) => {
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getReviews(productId),
    enabled: !!productId,
  });
};

export const useGetAllReviews= () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () =>getAllReviews()
  })
}