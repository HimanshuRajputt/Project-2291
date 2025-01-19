// Navbar.jsx
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Scanner">QR SCANNER</Link>
        </li>
        <li>
          <Link to="/all-dishes">All Dishes</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/AdminLogin">ADMIN-Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
