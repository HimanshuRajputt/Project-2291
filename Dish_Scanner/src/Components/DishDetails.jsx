import React from "react";

const DishDetails = ({ dish, onQuantityChange, totalCalories }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h2>{dish.dishName}</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>Item</th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
              Quantity
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
              Calories
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
              Edit Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {dish.items.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                {item.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                {item.quantity}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                {item.calories}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                <input
                  type="number"
                  value={item.userQuantity}
                  min="0"
                  onChange={(e) =>
                    onQuantityChange(index, parseInt(e.target.value, 10) || 0)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Calories: {totalCalories.toFixed(2)}</h3>
    </div>
  );
};

export default DishDetails;
