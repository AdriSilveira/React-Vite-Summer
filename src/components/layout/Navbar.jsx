import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navItem">
        <NavLink to="/modules">Home</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
