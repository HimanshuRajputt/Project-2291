import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const navigate= useNavigate()
  const [userlogin, SetuserLogin] = useState(false);

  const handleUserLogin=()=>{
       localStorage.removeItem("authToken");
       localStorage.removeItem("role");
        navigate("/")
    SetuserLogin(!userlogin)
  }

  return (
    <UserContext.Provider value={{ userlogin, handleUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};

// export const useUser = () => {
//   return useContext(UserContext);
// };
