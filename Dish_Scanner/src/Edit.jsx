import React, { useContext, useEffect } from "react";
import { FoodContext } from "./FoodContext"; // Import the context
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Edit() {
  const { foodData } = useContext(FoodContext); // Consume the context
  const navigate = useNavigate(); // Initialize the navigate function

  // Redirect to Home if foodData is not available
  useEffect(() => {
    if (!foodData) {
      navigate("/"); // Redirect to the home page
    }
  }, [foodData, navigate]);

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
