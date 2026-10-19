import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000/api/products"
    : "https://e-commerce-ccs3.onrender.com/api/products");

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductsByType = async (type) => {
  const response = await axios.get(`${API_URL}?type=${type}`);
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await axios.get(`${API_URL}?featured=true`);
  return response.data;
};
