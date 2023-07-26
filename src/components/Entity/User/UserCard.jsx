import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Link } from "react-router-dom";
import "./UserCard.scss";

function UserCard({ user }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------

  // View ------------------------------------------------
  return (
    <div className="userCard">
      <Card>
        <div className="userImage">
          <img src={user.UserImageURL} />
        </div>
        <div className="userCardItems">
          <h3>{user.UserFirstname}</h3>
          <h4>{user.UserLastname}</h4>
        </div>
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    UserFirstname: PropTypes.string.isRequired,
    UserLastname: PropTypes.string.isRequired,
    UserImageURL: PropTypes.string.isRequired,
  }),
};

export default UserCard;
