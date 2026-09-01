import axios from "axios";

const API_URL = "http://localhost:3000/api/reviews";

export const createReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData)
  return response.data
}

export const getReviews = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);

  return response.data;
};