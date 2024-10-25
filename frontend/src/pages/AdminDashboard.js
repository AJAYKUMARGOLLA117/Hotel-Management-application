// src/pages/AdminDashboard.js

import React, { useEffect, useState } from "react";
import { getAllRestaurants, removeDuplicateListings } from "../services/restaurantService";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [duplicates, setDuplicates] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getAllRestaurants();
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  const handleRemoveDuplicates = async () => {
    const data = await removeDuplicateListings();
    setDuplicates(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <button onClick={handleRemoveDuplicates} className="bg-red-500 text-white p-2 rounded mb-4">
        Remove Duplicates
      </button>
      <h2 className="text-2xl font-bold">All Listings</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="border p-2 my-2">
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </li>
        ))}
      </ul>
      {duplicates.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6">Duplicates Found</h2>
          <ul>
            {duplicates.map((duplicate) => (
              <li key={duplicate.id} className="border p-2 my-2">
                <h2 className="text-xl font-bold">{duplicate.name}</h2>
                <p>{duplicate.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
