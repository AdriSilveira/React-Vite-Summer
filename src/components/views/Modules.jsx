import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import ListOfModules from "../data/ListOfModules.js";
import "./Modules.scss";

function Modules({ setIsModulesView, setIsGroupView }) {
  // Initialisation --------------------------------------
  //adding a button
  const RoundButton = () => {
    return <button classname="actions"></button>;
  };
  const loggedInUser = 13;
  const apiURL = "http://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/modules`;

  // State ---------------------------------------
  const [modules, setModules] = useState(null);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  useEffect(() => {
    apiGet(myGroupEndpoint);
  }, [myGroupEndpoint]);

  // Handlers ------------------------------------

  // View --------------------------------------
  const selectModule = () => {
    setIsModulesView(false);
  };

  return (
    <>
      {!modules ? (
        <p>Loading records ...</p>
      ) : modules.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <>
          <CardContainer>
            <h1>Modules</h1>
          </CardContainer>
          <Card>
            <CardContainer>
              {modules.map((module) => {
                return (
                  <div className="moduleCard" key={module.ModuleCode}>
                    <div onClick={selectModule}>
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
                    </div>
                  </div>
                );
              })}
            </CardContainer>
          </Card>
        </>
      )}
    </>
  );
}

export default Modules;
