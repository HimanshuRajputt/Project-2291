import React, { useContext } from "react";
import { FoodContext } from "./FoodContext"; // Import the context

function Edit() {
  const { foodData } = useContext(FoodContext); // Consume the context

  return (
    <div>
      {foodData ? (
        <div>
          <h1>{foodData.product.name}</h1>
          <p>{foodData.product.ingredients_text}</p>
          <img src={foodData.product.image_url} alt={foodData.product.name} width="100" />
          {/* Add other relevant data from foodData */}
        </div>
      ) : (
        <p>No food data available.</p>
      )}
    </div>
  );
}

export default Edit;
