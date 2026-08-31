import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  addToCart,
  fetchFromCart,
  removeFromCart,
  updateCartQuantity,
} from "../api/cartApi";


export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId],
      });
    },
  });
};


export const useFetchCart = (id) => {
  return useQuery({
    queryKey: ["cart", id],
    queryFn: () => fetchFromCart(id),
    enabled: !!id,
  });
};


export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartQuantity,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId],
      });
    },
  });
};


export const useRemoveCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromCart,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId],
      });
    },
  });
};