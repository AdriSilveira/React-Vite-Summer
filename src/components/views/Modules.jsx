import { useState, useEffect } from "react";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../Entity/Module/ModuleForm.jsx";
import { CardContainer, Card } from "../UI/Card.jsx";
import ModuleCard from "../Entity/Module/ModuleCard.jsx";
import "./Modules.scss";

function Modules({ setIsModulesView, setSelectedModuleID, loggedInUserId }) {
  // Initialisation --------------------------------------

  // Adding a button
  const RoundButton = () => {
    return <button className="buttonActions"></button>;
  };

  const apiURL = "http://softwarehub.uk/unibase/api";
  console.log(loggedInUserId);
  var myModulesEndpoint = `${apiURL}/modules/`;

  if (loggedInUserId != "") {
    myModulesEndpoint = `${apiURL}/modules/users/${loggedInUserId}`;
  } else {
    myModulesEndpoint = `${apiURL}/modules/`;
  }

  console.log(myModulesEndpoint);

  // State -----------------------------------------------
  const [modules, setModules] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  useEffect(() => {
    apiGet(myModulesEndpoint);
  }, [myModulesEndpoint]);

  // Handlers --------------------------------------------
  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleSuccess = async () => {
    handleCancel();
    await apiGet(myModulesEndpoint);
  };

  // View ------------------------------------------------

  const selectModule = () => {
    setIsModulesView(false);
  };

  return (
    <>
      {!modules ? (
        <p>Loading Records ...</p>
      ) : modules.length === 0 ? (
        <p>No records found ...</p>
      ) : (
        <>
          <CardContainer>
            {
              <Card>
                <h1>Modules</h1>
              </Card>
            }
          </CardContainer>

          {!showForm && (
            <Action.Tray>
              <Action.Add
                showText
                buttonText="Add New Module"
                onClick={handleAdd}
              />
            </Action.Tray>
          )}

          {showForm && (
            <ModuleForm onCancel={handleCancel} onSuccess={handleSuccess} />
          )}

          <CardContainer>
            {modules.map((module) => (
              <ModuleCard
                module={module}
                setIsModulesView={setIsModulesView}
                key={module.ModuleCode}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default Modules;
