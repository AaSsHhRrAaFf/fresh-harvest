// src/services/productService.js
import axios from "axios";

const API_URL = "https://code-commando.com/api/v1";

// Get all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
};

// Get product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch product");
  }
};

// Get all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch categories"
    );
  }
};
