import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

// export const getProducts = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

export const registerUser = async (formData) => {
  const response = await axios.post(`${API_URL}/register`, formData);
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  return response.data;
};

export const getAuthUser = async (id) => {
  
}