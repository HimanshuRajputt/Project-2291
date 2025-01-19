import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

function EditDish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dishName, setDishName] = useState("");
  const [items, setItems] = useState([
    { name: "", quantity: "", calories: "" },
  ]);

  useEffect(() => {
    fetch(
      `https://dish-qr-scanner-default-rtdb.firebaseio.com/Dishes/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setDishName(data.dishName);
        setItems(data.items);
      })
      .catch((error) => {
        console.error("Error fetching dish:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDish = { dishName, items };

    fetch(
      `https://dish-qr-scanner-default-rtdb.firebaseio.com/Dishes/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updatedDish),
      }
    )
      .then(() => {
        navigate("/all-dishes");
      })
      .catch((error) => {
        console.error("Error updating dish:", error);
      });
  };

  const handleItemChange = (index, e) => {
    const updatedItems = [...items];
    updatedItems[index][e.target.name] = e.target.value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: "", calories: "" }]);
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
                <input
                  type="text"
                  name="name"
                  className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
                <input
                  type="number"
                  name="calories"
                  className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Calories"
                  value={item.calories}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
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
