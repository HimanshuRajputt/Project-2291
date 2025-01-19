// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FoodProvider } from "./Context/FoodContext.jsx";
import { AdminLoginProvider } from "./Context/AdminLoginContext.jsx";
// import { UserProvider } from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <UserProvider> */}
    <AdminLoginProvider>
      <FoodProvider>
        <App />
      </FoodProvider>

    </AdminLoginProvider>
    {/* </UserProvider> */}
  </BrowserRouter>
);
