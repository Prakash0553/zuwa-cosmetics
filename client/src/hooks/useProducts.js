import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts, createProduct } from "../api/productApi";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
  });
};