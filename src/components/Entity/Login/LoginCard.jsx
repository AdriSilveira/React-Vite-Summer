import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Link } from "react-router-dom";
import "./LoginCard.scss";

function ModuleCard({ module, setIsModulesView }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------
  const selectModule = () => {
    setIsModulesView(false);
  };

  // View ------------------------------------------------
  return (
    <div className="moduleCard">
      <Card>
        <div className="moduleImage">
          <img src={module.ModuleImageURL} />
        </div>
        <div className="moduleCardItems">
          <h3>{module.ModuleName}</h3>
          <h4>{module.ModuleCode}</h4>
        </div>

        <div className="actions">
          {/*<Link to ="/groups">*/}
          <button onClick={selectModule}>Groups</button>
          {/*</div>/</Link>*/}
        </div>
      </Card>
    </div>
  );
}

ModuleCard.propTypes = {
  module: PropTypes.shape({
    ModuleCode: PropTypes.string.isRequired,
    ModuleName: PropTypes.string.isRequired,
    ModuleImageURL: PropTypes.string.isRequired,
  }),
};

export default ModuleCard;
