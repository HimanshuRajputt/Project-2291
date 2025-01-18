import React, { createContext, useState } from "react";

// Create a context for sharing food data
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodData, setFoodData] = useState(null);

  // Function to update the food data
  const updateFoodData = (data) => {
    setFoodData(data);
  };

  // Provide the food data and updater function to children components
  return (
    <FoodContext.Provider value={{ foodData, updateFoodData }}>
      {children}
    </FoodContext.Provider>
  );
};
