import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts, createProduct, getProductById, deleteProduct } from "../api/productApi";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};


export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: deleteProduct,
  });
};