import axios from "axios";

const API_URL = "http://localhost:3000/api/cart";


export const addToCart = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const fetchFromCart = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};


export const updateCartQuantity = async ({ userId, productId, quantity }) => {
  const response = await axios.patch(
    `${API_URL}/${userId}/${productId}`,
    { quantity }
  );

  return response.data;
};

export const removeFromCart = async ({ userId, productId }) => {
  const response = await axios.delete(
    `${API_URL}/${userId}/${productId}`
  );

  return response.data;
};

