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

  useEffect(() => {
    if (foodData && foodData.items) {
      const updatedItems = foodData.items.map((item) => ({
        name: item.name,
        quantity: Number(item.quantity),
        calories: Number(item.calories),
      }));
      setFoodItems(updatedItems);
    }
    console.log("this is scanned Data:",foodData)
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

  return (
    <div className="mt-1 flex flex-col min-h-screen">
      <main className="flex-grow bg-orange-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between"  >
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-8">
              Calorie Tracker
            </h1>

            <Link to="/Scanner">
              <button className="text-white px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-400">
                Scan Again
              </button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            {/* Food Items Card */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-200">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
                  Dish Details
                </h2>
              </div>
              <div className="p-4 md:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-500">
                          Item
                        </th>
                        <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-500">
                          Qty
                        </th>
                        <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-500">
                          Cal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodItems.map((item) => (
                        <tr
                          key={item.name}
                          className="border-b border-gray-100"
                        >
                          <td className="py-2 md:py-3 px-2 md:px-4 text-gray-600">
                            {item.name}
                          </td>
                          <td className="py-2 md:py-3 px-2 md:px-4">
                            <div className="flex items-center gap-2 md:gap-4">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, -1)
                                }
                                className="px-2 md:px-3 py-1 rounded-lg bg-yellow-200 hover:bg-yellow-300"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                                className="w-8 md:w-12 text-center border border-gray-300 rounded-lg"
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, 1)
                                }
                                className="px-2 md:px-3 py-1 rounded-lg bg-yellow-200 hover:bg-yellow-300"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-2 md:py-3 px-2 md:px-4 text-gray-600">
                            {item.quantity * item.calories}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-yellow-100">
                        <td
                          colSpan="2"
                          className="py-3 md:py-4 px-2 md:px-4 font-semibold text-gray-600"
                        >
                          Total Calories
                        </td>
                        <td className="py-3 md:py-4 px-2 md:px-4 font-semibold text-blue-600">
                          {totalCalories}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-200">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
                  Calorie Distribution
                </h2>
              </div>
              <div className="p-4 md:p-6">
                <div className="h-64 md:h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="calories" fill="#2563eb" />
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
