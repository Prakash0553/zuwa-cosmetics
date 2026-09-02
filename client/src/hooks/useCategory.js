import { useMutation, useQuery } from "@tanstack/react-query";
import { createCategory, getCategories, getCategoriesWithProducts, getProductsByCategory } from "../api/categoryApi";

export const useGetCategory = () => {
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

export const useCategoriesWithProducts = () => {
  return useQuery({
    queryKey: ["categories-with-products"],
    queryFn: getCategoriesWithProducts,
  });
};

export const useProductsByCategory = (id) => {
  return useQuery({
    queryKey: ["products", "category", id],
    queryFn: () => getProductsByCategory(id),
    enabled: !!id,
  });
};