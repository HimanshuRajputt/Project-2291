import React, { useState } from "react";
import DishDetails from "./Components/DishDetails";

const App = () => {
  const dishes = {
    idliVadaCombo: {
      dishName: "Idli Vada Combo",
      items: [
        { name: "Idli", quantity: 2, calories: 100 },
        { name: "Vada", quantity: 1, calories: 200 },
        { name: "Sambhar", quantity: 1, calories: 120 },
        { name: "Chutney", quantity: 1, calories: 80 },
      ],
    },
    pastaAlfredo: {
      dishName: "Pasta Alfredo",
      items: [
        { name: "Pasta", quantity: 1, calories: 350 },
        { name: "Alfredo Sauce", quantity: 1, calories: 250 },
        { name: "Parmesan Cheese", quantity: 50, calories: 100 },
        { name: "Mushrooms", quantity: 100, calories: 22 },
      ],
    },
  };

  const [dishData, setDishData] = useState(
    Object.fromEntries(
      Object.entries(dishes).map(([key, value]) => [
        key,
        {
          ...value,items: value.items.map((item) => ({...item,userQuantity: item.quantity,})),
        },
      ])
    )
  );

  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const dishKeys = Object.keys(dishData);

  const handleQuantityChange = (itemIndex, newQuantity) => {
    const currentDishKey = dishKeys[currentDishIndex];
    setDishData((prevState) => {
      const updatedDish = { ...prevState[currentDishKey] };
      updatedDish.items[itemIndex].userQuantity = newQuantity;
      return { ...prevState, [currentDishKey]: updatedDish };
    });
  };

  const calculateTotalCalories = (items) =>
    items.reduce(
      (total, item) =>
        total + (item.userQuantity * item.calories) / item.quantity,
      0
    );

  const currentDishKey = dishKeys[currentDishIndex];
  const currentDish = dishData[currentDishKey];
  const totalCalories = calculateTotalCalories(currentDish.items);

  const goToNextDish = () => {
    setCurrentDishIndex((prevIndex) =>
      prevIndex === dishKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevDish = () => {
    setCurrentDishIndex(
      (prevIndex) => (prevIndex === 0 ? dishKeys.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div>
      <DishDetails
        dish={currentDish}
        onQuantityChange={handleQuantityChange}
        totalCalories={totalCalories}
      />
      <div>
        <button onClick={goToPrevDish} style={{ marginRight: "10px" }}>
          Previous Dish
        </button>
        <button onClick={goToNextDish}>Next Dish</button>
      </div>
    </div>
  );
};

export default App;
