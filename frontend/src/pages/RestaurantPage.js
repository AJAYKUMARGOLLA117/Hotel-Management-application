// src/pages/RestaurantPage.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails } from "../services/restaurantService";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await getRestaurantDetails(id);
      setRestaurant(data);
    };
    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      <p className="mb-4">{restaurant.description}</p>
      <p>Address: {restaurant.address}</p>
      <p>Rating: {restaurant.rating}</p>
      <h2 className="text-2xl font-bold mt-6">Reviews</h2>
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id} className="border p-2 my-2">
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
