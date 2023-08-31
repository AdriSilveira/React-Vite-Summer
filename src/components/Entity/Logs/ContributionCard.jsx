import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Link } from "react-router-dom";
//import "./UserCard.scss";

function ContributionCard({ contribution }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------

  // View ------------------------------------------------
  return (
    <div className="userCard">
      <Card>
        <div className="userCardItems">
          <h3>{contribution.ContributionFuturetasks}</h3>
          <h4>{contribution.ContributionUserID}</h4>
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

export default ContributionCard;
