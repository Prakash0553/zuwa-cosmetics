import axios from "axios";

const API_URL = "http://localhost:3000/api/order";

export const createOrder = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const fetchUserOrders = async (userId) => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

export const fetchAllOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};