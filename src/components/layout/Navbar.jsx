import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

  return (
    <nav>
      <div className="navItem">
        <NavLink to="/fauxLogin">Faux-Lo</NavLink>
      </div>      
      
<<<<<<< Updated upstream
      {/* <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div> */}
      
      <div className="navItem">
        <NavLink to="/modules">Modules</NavLink>
=======
      <div className="navItem">
        <NavLink to="/modules">Home</NavLink>
>>>>>>> Stashed changes
      </div>
      
      <div className="navItem">
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );  
}

export default Navbar;