import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="https://i.postimg.cc/fTns4XzT/Logo.png" alt="logo" />
        </NavLink>
      </div>
      <div class="login">
        <a href="#">
          Welcome <span>{props.loggedInUser}</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
