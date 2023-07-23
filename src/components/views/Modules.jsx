import { useState, useEffect } from "react";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../Entity/Module/ModuleForm.jsx";
import { CardContainer, Card } from "../UI/Card.jsx";
import ModuleCard from "../Entity/Module/ModuleCard.jsx";
import "./Modules.scss";

function Modules({setIsModulesView}) {
  // Initialisation --------------------------------------

  /*const modulelist = [
    {
      ModuleID: 1,
      ModuleName: "Programming 1",
      ModuleCode: "CI4105",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 824,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
      ModuleLeaderName: "Paul Knave",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 2,
      ModuleName: "Computing Fundamentals",
      ModuleCode: "CI4250",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 3,
      ModuleName: "Requirements Analysis and Design",
      ModuleCode: "CI4305",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 4,
      ModuleName: "Professional Environments 1",
      ModuleCode: "CI4450",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
  ];*/
  // Adding a button
  const RoundButton = () => {
    return <button className="buttonActions"></button>;
  };

   const loggedInUser = 13;
  const apiURL = 'http://softwarehub.uk/unibase/api';
  const myModulesEndpoint = `${apiURL}/modules`;

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
          <Action.Add showText buttonText="Add New Module" onClick={handleAdd} />
        </Action.Tray>
      )}

      {showForm && <ModuleForm onCancel={handleCancel} onSuccess={handleSuccess} />}



      <CardContainer>
        {modules.map((module) => (
        <ModuleCard module={module} key={module.ModuleCode}/>
        ))}
      </CardContainer>
      </>
      )}
    </>
  );
}

export default Modules;
