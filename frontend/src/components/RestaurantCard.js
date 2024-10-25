import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => (
  <div className="border p-4 mb-4 rounded">
    <h2 className="text-xl font-bold">{restaurant.name}</h2>
    <p>{restaurant.address}</p>
    <p>Rating: {restaurant.rating}</p>
    <Link to={`/restaurant/${restaurant.id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default RestaurantCard;
