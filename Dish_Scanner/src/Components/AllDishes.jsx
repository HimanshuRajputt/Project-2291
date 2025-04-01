import { useState, useEffect } from "react";
import QRCodeCard from "./QRCodeCard.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AdminLoginContext } from "../Context/AdminLoginContext.jsx";

function AllDishes() {
  // const { AdminLogin, AdminLoginUpdater } = useContext(AdminLoginContext);
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  // console.log(token)

  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    try {
      const response = await axios.get(
        "https://discanner-backend.onrender.com/dishes/"
      );
      setMenuData(response.data);
    } catch (error) {
      console.error("Error fetching data from the server:", error);
    }
  };
  const handleDelete = async (_id) => {
    try {
      //  console.log("Auth token:", token);
      await axios.delete(
        `https://discanner-backend.onrender.com/dishes/${_id}`,
        {
          headers: { token },
        }
      );
      // setMenuData(menuData.filter((dish) => dish._id !== id));
      fetchMenuData();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  // const handleLogoutAdmin = () => {
  //   localStorage.removeItem("authToken")
  //   localStorage.removeItem("role")
  //   AdminLoginUpdater();
  //   navigate("/");
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 px-4">
          <h1 className="text-3xl font-bold text-blue-800 hidden md:block">
            Menu Dashboard
          </h1>
          {menuData.length > 0 && (
            <div className="flex gap-4 w-full md:w-auto justify-between md:justify-end">
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition duration-300"
                onClick={() => navigate("/add-dish")}
              >
                <span className="text-xl">➕</span>
                <span>Add Dish</span>
              </button>
              {/* <button
                className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition duration-300"
                onClick={handleLogoutAdmin}
              >
                <span className="text-xl">{AdminLogin ? "🚪" : "🔑"}</span>
                <span>{AdminLogin ? "Logout" : "Login"}</span>
              </button> */}
            </div>
          )}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {menuData.length > 0 ? (
            menuData.map((dish) => {
              const { dishName, _id, items } = dish;
              const jsonData = JSON.stringify(dish);

              return (
                <div
                  key={_id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-102 transition duration-300 hover:shadow-xl border border-blue-100"
                >
                  <div className="relative p-6">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 opacity-50" />
                    <QRCodeCard
                      dish={dish}
                      dishName={dishName}
                      jsonData={jsonData}
                      items={items}
                      onDelete={handleDelete}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center min-h-[400px] bg-white rounded-2xl shadow-lg p-8">
              <img
                className="w-64 h-64 animate-pulse"
                src="https://ik.imagekit.io/m9qnay09g/Animation%20-%201737285406045.gif?updatedAt=1737286046150"
                alt="Loading"
              />
              <p className="text-blue-600 font-medium mt-4 text-lg">
                Loading menu items...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllDishes;
