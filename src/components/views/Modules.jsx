import { CardContainer, Card } from "../UI/Card.jsx";
import "./Modules.scss";

function Modules() {
  // Initialisation --------------------------------------

  const modulelist = [
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
  ];

  // View --------------------------------------

  return (
    <>
      <CardContainer>
        {
          <Card>
            <h1>Modules</h1>
          </Card>
        }
      </CardContainer>
      <h1>Modules</h1>
      <CardContainer>
        {modulelist.map((module) => {
          return (
            <div className="moduleCard" key={module.ModuleCode}>
              <Card>
                <div className="moduleImage">
                  <img src={module.ModuleImageURL} />
                </div>
                <div className="moduleCardItems">
                  <h3>{module.ModuleCode}</h3>
                  <h3>{module.ModuleName}</h3>
                </div>

                <div className="actions">
                  <button />
                </div>
              </Card>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
}

export default Modules;
