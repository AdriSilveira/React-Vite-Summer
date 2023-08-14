import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  //Initialisation---------------------------------
  //State------------------------------------------
  //Handlers---------------------------------------
  //View-------------------------------------------

  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="https://i.postimg.cc/fTns4XzT/Logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="login">
        {props.loggedInUser != "" ? (
          <div className="user">
            <span>{props.loggedInUser}</span>
          </div>
        ) : (
          <div className="user"></div>
        )}
      </div>
    </header>
  );
}
Header.prototype = {
  loggedInUser: PropTypes.string.isRequired,
};

export default Header;
