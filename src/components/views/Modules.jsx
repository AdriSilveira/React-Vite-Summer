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
      <CardContainer>
        {
          <Card>
            <h1>Modules</h1>
            <CardContainer>
              {ListOfModules.map((module) => {
                return (
                  <div className="moduleCard" key={module.ModuleCode}>
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
                        <button></button>
                        <button></button>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </CardContainer>
          </Card>
        }
      </CardContainer>
    </>
  );
}

export default Modules;
