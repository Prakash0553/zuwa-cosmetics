import axios from "axios";

const API_URL = "http://localhost:3000/api/product";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}