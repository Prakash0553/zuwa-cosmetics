import axios from "axios";

const API_URL = "http://localhost:3000/api/category";

export const getCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCategory = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

export const getCategoriesWithProducts = async () => {
  const response = await axios.get(`${API_URL}/with-products`);
  return response.data;
};

export const getProductsByCategory = async (id) => {
  const response = await axios.get(`${API_URL}/category/${id}`);
  return response.data;
};