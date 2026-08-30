import { useMutation, useQuery } from "@tanstack/react-query";
import { createCategory, getCategories } from "../api/categoryApi";

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: createCategory,
  });
};