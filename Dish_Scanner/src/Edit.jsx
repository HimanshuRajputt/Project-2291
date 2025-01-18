import React, { useContext, useEffect } from "react";
import { FoodContext } from "./FoodContext";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the styles

function Edit() {
  const { foodData } = useContext(FoodContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!foodData) {
      navigate("/");
    }
  }, [foodData, navigate]);

  return (
    <div className="edit-container">
      {foodData ? (
        <div className="food-info">
          <h1 className="food-name">{foodData.product.name}</h1>
          <p className="food-ingredients">
            {foodData.product.ingredients_text}
          </p>
          <img
            src={foodData.product.image_url}
            alt={foodData.product.name}
            className="food-image"
          />
        </div>
      ) : (
        <p className="no-data">No food data available.</p>
      )}
    </div>
  );
}

export default Edit;
