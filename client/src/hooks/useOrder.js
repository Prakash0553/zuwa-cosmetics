import { useMutation, useQuery } from "@tanstack/react-query";

import { createOrder, fetchUserOrders, fetchAllOrders } from "../api/orderApi";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};

export const useUserOrders = (userId) => {
  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => fetchUserOrders(userId),
    enabled: !!userId,
  });
};

export const useAllOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchAllOrders,
  });
};
