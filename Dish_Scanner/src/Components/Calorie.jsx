import { useState, useEffect, useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FoodContext } from "../Context/FoodContext";
import { Link } from "react-router-dom";

const Calorie = () => {
  const { foodData } = useContext(FoodContext);
  const [foodItems, setFoodItems] = useState([]);
  const [dishName,setDishName] = useState("")

  useEffect(() => {
    // if(foodData?  :"")
    
    if (foodData && foodData.items) {
      setDishName(foodData.dishName);
      const updatedItems = foodData.items.map((item) => ({
        name: item.name,
        quantity: Number(item.quantity),
        calories: Number(item.calories),
      }));
      setFoodItems(updatedItems);
    }

  }, [foodData]);

  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const total = foodItems.reduce(
      (sum, item) => sum + item.quantity * item.calories,
      0
    );
    setTotalCalories(total);
  }, [foodItems]);

  const handleQuantityChange = (itemName, delta) => {
    const updatedItems = foodItems.map((item) =>
      item.name === itemName
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    );
    setFoodItems(updatedItems);
  };

  const chartData = foodItems.map((item) => ({
    name: item.name,
    calories: item.quantity * item.calories,
  }));
  // console.log(foodData.dishName);
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-sky-700 tracking-tight">
              Calorie Tracker
            </h1>
            <Link
              to={localStorage.getItem("authToken") ? "/Scanner" : "/login"}
            >
              <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 font-medium">
                Scan New Item
              </button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Food Items Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-400">
              <div className="p-6 border-b border-sky-100 bg-sky-50">
                {/* <h2 className="text-2xl font-semibold text-sky-700">
                  Dish Details
                </h2> */}
                <h2 className="text-2xl font-semibold text-sky-700">
                  {dishName? dishName:"Dish Details"}
                </h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-sky-100">
                        <th className="text-left py-3 px-4 font-semibold text-sky-600">
                          Item
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sky-600">
                          Quantity
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sky-600">
                          Calories
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodItems.map((item) => (
                        <tr
                          key={item.name}
                          className="border-b border-sky-50 hover:bg-sky-50 transition-colors duration-150"
                        >
                          <td className="py-4 px-4 text-sky-700 font-medium">
                            {item.name}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, -1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 text-sky-600 transition-colors duration-150"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                                className="w-12 text-center border border-sky-200 rounded-lg bg-sky-50 text-sky-700 font-medium"
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, 1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 text-sky-600 transition-colors duration-150"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sky-700 font-medium">
                            {item.quantity * item.calories}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-sky-50">
                        <td
                          colSpan="2"
                          className="py-4 px-4 font-bold text-sky-700"
                        >
                          Total Calories
                        </td>
                        <td className="py-4 px-4 font-bold text-sky-700">
                          {totalCalories}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-400">
              <div className="p-6 border-b border-sky-100 bg-sky-50">
                <h2 className="text-2xl font-semibold text-sky-700">
                  Calorie Distribution
                </h2>
              </div>
              <div className="p-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#0369a1" }}
                        axisLine={{ stroke: "#0369a1" }}
                      />
                      <YAxis
                        tick={{ fill: "#0369a1" }}
                        axisLine={{ stroke: "#0369a1" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#f0f9ff",
                          border: "1px solid #bae6fd",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="calories"
                        fill="#0ea5e9"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calorie;
