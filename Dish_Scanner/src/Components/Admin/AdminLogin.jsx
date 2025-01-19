import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginContext } from "../../Context/AdminLoginContext";
// import "../styles/Login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
   const {AdminLoginUpdater } = useContext(AdminLoginContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const hardcodedEmail = "admin@gmail.com";
    const hardcodedPassword = "admin123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem("authToken", "hardcoded-token"); 
      AdminLoginUpdater()
      // Store token for session
      navigate("/all-dishes"); // Redirect after login
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="Admin-login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
