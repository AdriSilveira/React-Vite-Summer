import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Link } from "react-router-dom";
//import "./UserCard.scss";

function LogCard({ log }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------

  // View ------------------------------------------------
  return (
    <div className="userCard">
      <Card>
        <div className="userCardItems">
          <h3>{log.ContributionFuturetasks}</h3>
          <h4>{log.ContributionUserID}</h4>
        </div>
      </Card>
    </div>
  );
}

// LogCardCard.propTypes = {
//   user: PropTypes.shape({
//     UserFirstname: PropTypes.string.isRequired,
//     UserLastname: PropTypes.string.isRequired,
//     UserImageURL: PropTypes.string.isRequired,
//   }),
//};

export default LogCard;
