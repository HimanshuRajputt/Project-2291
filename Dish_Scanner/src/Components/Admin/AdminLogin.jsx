import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginContext } from "../../Context/AdminLoginContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { AdminLoginUpdater } = useContext(AdminLoginContext);
  const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();

    const hardcodedEmail = "admin@gmail.com";
    const hardcodedPassword = "admin123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem("authToken", "hardcoded-token");
      AdminLoginUpdater();
      navigate("/all-dishes");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🔑 Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
