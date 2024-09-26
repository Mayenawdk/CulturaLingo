import React from 'react';


const DropDown = ({ restaurants = [], onSelect }) => {
  return (
    <div>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a restaurant</option>
        {restaurants.map((restaurant) => (
          <option key={restaurant.location_id} value={restaurant.location_id}>
            {restaurant.name}
          </option>
        ))}
      </select>
      
      
      <select>
        <option value="foods">Foods</option>
        <option value="country">Countries</option>
        <option value="city">Cities</option>
      </select>
    </div>
  );
};

export default DropDown;
