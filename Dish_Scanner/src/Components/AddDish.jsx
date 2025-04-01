import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import axios from "axios";

function AddDish() {
  const [dishName, setDishName] = useState("");
  const [items, setItems] = useState([
    { name: "", quantity: "", calories: "" },
  ]);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(items)
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "https://discanner-backend.onrender.com/dishes/add",
        { dishName: dishName, items },
        { headers: { token } }
      );
      // console.log(response.data)
      navigate("/all-dishes");
    } catch (error) {
      console.error("Error adding dish:", error);
    }
  };

  const handleItemChange = (index, { target: { name, value } }) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index][name] = value;
      return updatedItems;
    });
  };

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: "", quantity: "", calories: "" },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={() => navigate("/all-dishes")}
          className="text-gray-500 hover:text-gray-700 flex items-center mb-4"
        >
          <MoveLeft className="w-6 h-6 mr-2" /> Back
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🍽️ Add a New Dish
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Dish Name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex space-x-3">
                {["name", "quantity", "calories"].map((field, i) => (
                  <input
                    key={i}
                    type={field === "name" ? "text" : "number"}
                    name={field}
                    className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={item[field]}
                    onChange={(e) => handleItemChange(index, e)}
                    required
                  />
                ))}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            onClick={addItem}
          >
            ➕ Add Item
          </button>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            ✅ Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDish;
