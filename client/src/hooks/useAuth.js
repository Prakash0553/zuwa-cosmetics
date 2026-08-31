import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api/authApi";



export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useLoginUser =() => {
  return useMutation({
    mutationFn: loginUser
  })
}