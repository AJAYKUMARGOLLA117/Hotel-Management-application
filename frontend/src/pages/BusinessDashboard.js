// src/pages/BusinessDashboard.js

import React, { useEffect, useState } from "react";
import { getMyRestaurants } from "../services/restaurantService";

const BusinessDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getMyRestaurants();
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="border p-2 my-2">
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessDashboard;
