import { Link } from "react-router-dom";
import { CardContainer, Card } from "../UI/Card.jsx";
import ListOfModules from "../data/ListOfModules.js";
import "./Modules.scss";

function Modules() {
  // Initialisation --------------------------------------
  //adding a button
  const RoundButton = () => {
    return <button classname="actions"></button>;
  };

  // View --------------------------------------

  return (
    <>
      {
        <>
          <CardContainer>
            <h1>Modules</h1>
          </CardContainer>
          <Card>
            <CardContainer>
              {ListOfModules.map((module) => {
                return (
                  <div className="moduleCard" key={module.ModuleCode}>
                    <Link to={`/groups${module.ModuleName}`}>
                      <Card>
                        <div className="moduleImage">
                          <img src={module.ModuleImageURL} />
                        </div>
                        <div className="moduleCardItems">
                          <h3>{module.ModuleName}</h3>
                          <h4>{module.ModuleCode}</h4>
                        </div>

                        <div className="actions">
                          <button></button>
                          <button>Groups</button>
                          <button></button>
                        </div>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </CardContainer>
          </Card>
        </>
      }
    </>
  );
}

export default Modules;
