import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import axios from "axios";

function EditDish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dishName, setDishName] = useState("");
  const [items, setItems] = useState([
    { name: "", quantity: "", calories: "" },
  ]);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    fetchDish(id);
  }, [id]);

  const fetchDish = async (id) => {
    try {
      // console.log(id)
      const response = await axios.get(
        `https://discanner-backend.onrender.com/dishes/${id}`,
        {
          headers: { token },
        }
      );
      // console.log(response.data); // Log the response for debugging
      setDishName(response.data.dishName);
      setItems(response.data.items);
    } catch (error) {
      console.error("Error fetching dish:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://discanner-backend.onrender.com/dishes/${id}`,
        { dishName: dishName, items },
        { headers: { token } }
      );
      navigate("/all-dishes");
    } catch (error) {
      console.error("Error updating dish:", error);
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
          ✏️ Edit Dish
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
            ✅ Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDish;
