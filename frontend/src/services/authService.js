// src/services/authService.js

import api from "./api";

// Register a new user
export const registerUser = async ({ email, password, role }) => {
  try {
    const response = await api.post("/auth/register", {
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Registration failed");
  }
};

// Log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return user;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};

// Log out the user
export const logoutUser = () => {
  localStorage.removeItem("token");
  delete api.defaults.headers.common["Authorization"];
};

// Get the current user's role from stored data
export const getCurrentUserRole = () => {
  // Retrieve token and decode role here, if using JWT
  return localStorage.getItem("token") ? "User" : null; // Placeholder role
};
