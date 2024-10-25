import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { searchRestaurants } from "../services/restaurantService";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = async () => {
    const results = await searchRestaurants(query);
    setRestaurants(results);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Restaurants</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, cuisine..."
        className="p-2 border rounded mb-4 w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Search</button>
      <div className="mt-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
