// App.jsx
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllDishes from "./Components/AllDishes";
import AddDish from "./Components/AddDish";
import EditDish from "./Components/EditDish";
// import Home from "./Components/Scanner";
import NotFound from "./Components/notFound";
import Scanner from "./Components/Scanner";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Home from "./Components/Home";
import AdminLogin from "./Components/Admin/AdminLogin";
import { NotAdmin } from "./Components/Route/NotAdmin";
import ProtectedRoutes from "./Components/Route/ProtectedRoutes";
import Calorie from "./Components/Calorie";
import Team from "./Components/Team";
import About from "./Components/About";
import KnowWhy from "./Components/KnowWhy";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calorie" element={<Calorie />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/About" element={<About />} />
        <Route path="/KnowWhy" element={<KnowWhy />} />

        <Route path="/Scanner" element={<Scanner />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/all-dishes" element={<AllDishes />} />
          <Route path="/add-dish" element={<AddDish />} />
          <Route path="/edit/:id" element={<EditDish />} />
        </Route>

        <Route path="/notAdmin" element={<NotAdmin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
