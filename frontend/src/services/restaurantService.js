// src/services/restaurantService.js

import api from "./api";

// Search for restaurants based on a query
export const searchRestaurants = async (query) => {
  try {
    const response = await api.get("/restaurants/search", {
      params: { query },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Search failed");
  }
};

// Get details of a specific restaurant by ID
export const getRestaurantDetails = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to load restaurant details");
  }
};

// Get a list of all restaurants for admin view
export const getAllRestaurants = async () => {
  try {
    const response = await api.get("/admin/restaurants");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to fetch all restaurants");
  }
};

// Get a list of restaurants owned by the current business owner
export const getMyRestaurants = async () => {
  try {
    const response = await api.get("/business/restaurants");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to load owned restaurants");
  }
};

// Add a new restaurant (for business owner)
export const addRestaurant = async (restaurantData) => {
  try {
    const response = await api.post("/business/restaurants", restaurantData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to add restaurant");
  }
};

// Update a restaurant's details
export const updateRestaurant = async (id, updateData) => {
  try {
    const response = await api.put(`/business/restaurants/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to update restaurant");
  }
};

// Remove duplicate listings (admin-only function)
export const removeDuplicateListings = async () => {
  try {
    const response = await api.delete("/admin/restaurants/duplicates");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to remove duplicates");
  }
};
