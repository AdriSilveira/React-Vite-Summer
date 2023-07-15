import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navItem">
        <NavLink to="/login">Login</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/home">Home</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
