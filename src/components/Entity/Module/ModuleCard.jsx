import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import { Link } from "react-router-dom";
import "./ModuleCard.scss";

function ModuleCard({ module, setIsModulesView, setSelectedModuleID }) {
  // Initialisation --------------------------------------
  // State -----------------------------------------------
  // Handlers --------------------------------------------
  const selectModule = (moduleId) => {
    setIsModulesView(false);
    setSelectedModuleID(moduleId);
    console.log(moduleId);
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
          <button onClick={() => selectModule(module.ModuleID)}>Groups</button>
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
