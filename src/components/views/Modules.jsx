import { CardContainer, Card } from "../UI/Card.jsx";
import { TitleCardContainer, TitleCard } from "../UI/TitleCard.jsx";
import ListOfModules from "../data/ListOfModules.js";
import "./Modules.scss";

function Modules() {
  // View ------------------------
  return (
    <>
      <TitleCardContainer>
        <h1>Modules</h1>
        <TitleCard>
          <CardContainer>
            {ListOfModules.map((module) => {
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
        </TitleCard>
      </TitleCardContainer>
    </>
  );
}

export default Modules;
